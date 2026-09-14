# Website enquiries through Microsoft 365

> Current hosting uses cPanel SMTP. Follow [SMTP_EMAIL_SETUP.md](SMTP_EMAIL_SETUP.md). This document is retained only for a future Microsoft 365 migration.

Recipient: **Digital@ggmsglobal.com**. Change `CONTACT_TO_EMAIL` later to change the recipient without a code edit. The public general-contact addresses are unchanged.

## Administrator setup

1. Register a single-tenant application in Microsoft Entra ID for GGMS website enquiries.
2. Authorize application mail sending through Microsoft Graph. Have the Exchange administrator restrict this application to the chosen sending mailbox; do not grant unrestricted access to all company mailboxes. Use your organization's approved Exchange application access controls.
3. Record the directory (tenant) ID and application (client) ID. Create a client credential and save its **value** securely. Track its expiry and rotate it before expiration.
4. Choose an authorized sending mailbox. This can be Digital@ggmsglobal.com if the administrator authorizes it, or a dedicated website mailbox. The visitor is used as Reply-To, never as the sender.

Microsoft references: [sendMail and Mail.Send permissions](https://learn.microsoft.com/en-us/graph/api/user-sendmail?view=graph-rest-1.0), [application authentication](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-client-creds-grant-flow).

## Website configuration

Put these values in the hosting provider's server environment settings, or `.env.local` for local testing. Do not paste secrets into chat, commit them, or prefix them with `NEXT_PUBLIC_`.

```dotenv
M365_TENANT_ID=your-tenant-id
M365_CLIENT_ID=your-application-id
M365_CLIENT_SECRET=your-secret-value
M365_SENDER_EMAIL=your-authorized-sending-mailbox
CONTACT_TO_EMAIL=Digital@ggmsglobal.com
CONTACT_EMAIL_ENABLED=true
```

Restart/redeploy after configuration changes. Until all settings are supplied and sending is enabled, the form returns an unavailable response and retains the enquiry for retry or direct email. No enquiry is stored in a database.

## Verification before launch

- Run `node scripts/contact-mail-audit.mjs` for mocked provider checks; it never sends mail.
- `node scripts/contact-audit.mjs` is for an **unconfigured local endpoint only**; it expects sending to remain unavailable. Do not run it against a configured environment because its final request is a valid submission.
- Once authorized and configured, send a clearly labelled test from each form and confirm receipt in Digital@ggmsglobal.com, all fields, and Reply-To behavior. Graph's 202 response confirms acceptance, not inbox delivery. Check Sent Items and Exchange message trace if needed.
- Configure hosting-level abuse protection/rate limits on `/api/contact` before making the public sending endpoint live.

Current status: code prepared; Microsoft administrator authorization, credentials and real inbox delivery test are outstanding.
