import assert from 'node:assert/strict';
const endpoint = `${process.env.AUDIT_BASE_URL || 'http://127.0.0.1:3000'}/api/contact`;
const valid = { name: 'Website test', organization: 'Test', email: 'test@example.com', message: 'Local validation test' };
for (const [body, expected] of [
  ['{', 400], ['null', 400], ['[]', 400], ['{}', 400],
  [JSON.stringify({ ...valid, name: '   ' }), 400],
  [JSON.stringify({ ...valid, email: 'invalid' }), 400],
  [JSON.stringify({ ...valid, message: 123 }), 400],
  [JSON.stringify({ ...valid, message: 'a'.repeat(10001) }), 400],
  [JSON.stringify(valid), 503],
]) {
  const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body });
  assert.equal(response.status, expected);
  assert.notEqual((await response.json()).success, true);
}
console.log('PASS: invalid inputs rejected; disconnected delivery never reports success. No email sent.');
