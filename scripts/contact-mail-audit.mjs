import assert from 'node:assert/strict';
import nodemailer from 'nodemailer';
import { sendContactMail } from '../app/lib/contact-mail.ts';

const names = ['CONTACT_EMAIL_PROVIDER','SMTP_HOST','SMTP_PORT','SMTP_USER','SMTP_PASSWORD','CONTACT_EMAIL_ENABLED','M365_TENANT_ID','M365_CLIENT_ID','M365_CLIENT_SECRET','M365_SENDER_EMAIL','CONTACT_TO_EMAIL'];
const saved = Object.fromEntries(names.map(name => [name, process.env[name]]));
const originalFetch = globalThis.fetch;
const originalTransport = nodemailer.createTransport;
const fields = { name: 'Test', email: 'visitor@example.com', organization: 'Example', message: '<b>Plain text</b>', stage: 'Planning', help: 'Migration', timeline: 'Next quarter' };
try {
  delete process.env.CONTACT_EMAIL_PROVIDER;
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
  Object.assign(process.env, {CONTACT_EMAIL_PROVIDER:'smtp', SMTP_HOST:'mail.example.com', SMTP_PORT:'465', SMTP_USER:'analytics@example.com', SMTP_PASSWORD:'fake', CONTACT_TO_EMAIL:'analytics@example.com'});
  let sent, options, closed = 0;
  nodemailer.createTransport = config => {
    options = config;
    return {sendMail: async mail => {sent = mail; return {accepted:['analytics@example.com'], rejected:[]};}, close: () => closed++};
  };
  assert.equal(await sendContactMail(fields), 'accepted');
  assert.equal(options.secure, true);
  assert.equal(options.port, 465);
  assert.equal(sent.from.address, 'analytics@example.com');
  assert.equal(sent.to.address, 'analytics@example.com');
  assert.equal(sent.replyTo.address, 'visitor@example.com');
  assert.ok(sent.text.includes('<b>Plain text</b>'));
  assert.equal(closed, 1);
  nodemailer.createTransport = () => ({sendMail: async () => {throw new Error('SMTP unavailable');}, close() {}});
  assert.equal(await sendContactMail(fields), 'failed');
  delete process.env.SMTP_PASSWORD;
  assert.equal(await sendContactMail(fields), 'unconfigured');
  console.log('PASS: Graph and SMTP gates, TLS, recipient, Reply-To, content, and provider failures. No real email sent.');
} finally {
  nodemailer.createTransport = originalTransport;
  globalThis.fetch = originalFetch;
  for (const name of names) { if (saved[name] === undefined) delete process.env[name]; else process.env[name] = saved[name]; }
}
