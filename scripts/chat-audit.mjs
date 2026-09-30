import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import Module from 'node:module';
import path from 'node:path';
import ts from 'typescript';

// Compile the route in memory to exercise its real validation and provider handling.
const filename = path.resolve('app/api/chat/route.ts');
const compiled = ts.transpileModule(readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const route = new Module(filename);
route.filename = filename;
route.paths = Module._nodeModulePaths(path.dirname(filename));
route._compile(compiled, filename);
const { POST } = route.exports;
const names = ['AZURE_OPENAI_ENDPOINT', 'AZURE_OPENAI_API_KEY', 'AZURE_OPENAI_DEPLOYMENT'];
const saved = names.map(name => process.env[name]);
const originalFetch = globalThis.fetch;
const request = value => new Request('https://analytics.ggmsglobal.com/api/chat', {
  method: 'POST', body: JSON.stringify(value), headers: {'Content-Type': 'application/json'},
});

async function expectFallback(response) {
  assert.equal(response.status, 200);
  const text = await response.text();
  assert.ok(text.includes('GGMS Analytics'));
  assert.ok(!text.includes('private provider detail'));
}

try {
  globalThis.fetch = async () => { throw new Error('Unexpected network request'); };
  for (const name of names) delete process.env[name];
  for (const value of [null, {}, {message:''}, {message:'   '}, {message:42}, {message:'x'.repeat(2001)}]) {
    assert.equal((await POST(request(value))).status, 400);
  }
  assert.equal((await POST(new Request('https://example.com', {method:'POST',body:'{'}))).status, 400);
  await expectFallback(await POST(request({message:'Hello'})));

  Object.assign(process.env, {
    AZURE_OPENAI_ENDPOINT:'https://digital-6182-resource.services.ai.azure.com/openai/v1/',
    AZURE_OPENAI_DEPLOYMENT:'gpt-5.6-luna', AZURE_OPENAI_API_KEY:'fake-test-key',
  });
  globalThis.fetch = async (url, options) => {
    assert.equal(url, 'https://digital-6182-resource.services.ai.azure.com/openai/v1/responses');
    assert.equal(options.headers['api-key'], 'fake-test-key');
    const body = JSON.parse(options.body);
    assert.equal(body.model, 'gpt-5.6-luna');
    assert.equal(body.store, false);
    assert.equal(body.input, 'Hello');
    assert.ok(body.instructions.includes('GGMS Analytics'));
    return Response.json({status:'completed', output:[{type:'reasoning'}, {type:'message', content:[{type:'output_text',text:'Welcome to GGMS Analytics.'}]}]});
  };
  const result = await POST(request({message:' Hello '}));
  assert.equal(result.status, 200);
  assert.equal((await result.json()).response, 'Welcome to GGMS Analytics.');

  for (const status of [401, 403, 429, 500]) {
    globalThis.fetch = async () => new Response('private provider detail', {status});
    await expectFallback(await POST(request({message:'Hello'})));
  }
  for (const value of [{status:'completed',output:[]}, {status:'incomplete',output:[]}]) {
    globalThis.fetch = async () => Response.json(value);
    await expectFallback(await POST(request({message:'Hello'})));
  }
  globalThis.fetch = async () => {throw new DOMException('Timed out', 'TimeoutError');};
  await expectFallback(await POST(request({message:'Hello'})));

  console.log('PASS: chat validation, fallback handling, Azure request, output parsing, provider failures, and timeout. No live AI calls.');
} finally {
  globalThis.fetch = originalFetch;
  names.forEach((name, i) => {if (saved[i] === undefined) delete process.env[name]; else process.env[name] = saved[i];});
}
