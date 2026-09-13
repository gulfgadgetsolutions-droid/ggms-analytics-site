import assert from 'node:assert/strict';

const base = process.env.AUDIT_BASE_URL || 'http://127.0.0.1:3000';
for (const region of ['om', 'ae', 'sa']) {
  for (const path of ['', '/contact']) {
    for (const cookie of ['', `ggms-region=${region}`, 'ggms-region=om']) {
      const response = await fetch(`${base}/${region}${path}`, {
        headers: cookie ? { Cookie: cookie } : {},
        redirect: 'manual',
      });
      assert.equal(response.status, 200, `${region}${path} with ${cookie}: unexpected redirect or failure`);
      assert.match(await response.text(), /GGMS/);
    }
  }
}
const global = await fetch(`${base}/sa/contact?region=global`, {
  headers: { Cookie: 'ggms-region=sa' }, redirect: 'manual',
});
assert.equal(global.status, 307);
assert.equal(new URL(global.headers.get('location'), base).pathname, '/contact');
assert.match(global.headers.get('set-cookie'), /ggms-region=;/);
console.log('PASS: all three regions load with fresh, saved and different region cookies; Global clears the selection.');
