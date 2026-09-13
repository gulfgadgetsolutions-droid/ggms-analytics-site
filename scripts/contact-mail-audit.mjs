import assert from 'node:assert/strict';
import { sendContactMail } from '../app/lib/contact-mail.ts';

const names = ['CONTACT_EMAIL_ENABLED','M365_TENANT_ID','M365_CLIENT_ID','M365_CLIENT_SECRET','M365_SENDER_EMAIL','CONTACT_TO_EMAIL'];
const saved = Object.fromEntries(names.map(name => [name, process.env[name]]));
const originalFetch = globalThis.fetch;
const fields = { name: 'Test', email: 'visitor@example.com', organization: 'Example', message: '<b>Plain text</b>', stage: 'Planning', help: 'Migration', timeline: 'Next quarter' };
try {
  globalThis.fetch = async () => { throw new Error('Unexpected network call'); };
  process.env.CONTACT_EMAIL_ENABLED = 'false';
  assert.equal(await sendContactMail(fields), 'unconfigured');
  Object.assign(process.env, { CONTACT_EMAIL_ENABLED:'true', M365_TENANT_ID:'test', M365_CLIENT_ID:'test', M365_CLIENT_SECRET:'fake', M365_SENDER_EMAIL:'sender@example.com', CONTACT_TO_EMAIL:'Digital@ggmsglobal.com' });
  let calls = [];
  globalThis.fetch = async (url, options) => {
    calls.push({url, options});
    return calls.length === 1 ? Response.json({access_token:'fake-token'}) : new Response(null,{status:202});
  };
  assert.equal(await sendContactMail(fields), 'accepted');
  const mail = JSON.parse(calls[1].options.body).message;
  assert.equal(mail.toRecipients[0].emailAddress.address,'Digital@ggmsglobal.com');
  assert.equal(mail.replyTo[0].emailAddress.address,'visitor@example.com');
  assert.equal(mail.body.contentType,'Text');
  for (const value of ['Planning','Migration','Next quarter','<b>Plain text</b>']) assert.ok(mail.body.content.includes(value));
  for (const status of [401,403,429,500]) {
    globalThis.fetch = async () => new Response(null,{status});
    assert.equal(await sendContactMail(fields),'failed');
  }
  globalThis.fetch = async url => url.includes('oauth2') ? Response.json({access_token:'fake'}) : new Response(null,{status:503});
  assert.equal(await sendContactMail(fields),'failed');
  console.log('PASS: configuration gate, recipient, Reply-To, project details, and provider failure handling. No real email sent.');
} finally {
  globalThis.fetch = originalFetch;
  for (const name of names) { if (saved[name] === undefined) delete process.env[name]; else process.env[name] = saved[name]; }
}
