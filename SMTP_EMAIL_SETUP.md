# cPanel contact-form email

The current mailbox is Analytics@ggmsglobal.com, hosted on cPanel. Microsoft 365 registration is not needed for this SMTP setup.

In Azure App Service ggms-analytics, Settings > Environment variables > App settings, add:

| Name | Value |
| --- | --- |
| CONTACT_EMAIL_PROVIDER | smtp |
| CONTACT_EMAIL_ENABLED | true |
| SMTP_HOST | mail.ggmsglobal.com |
| SMTP_PORT | 465 |
| SMTP_USER | Analytics@ggmsglobal.com |
| SMTP_PASSWORD | Enter the mailbox password privately in Azure |
| CONTACT_TO_EMAIL | Analytics@ggmsglobal.com |

Apply settings and allow the app to restart. Never commit the password or share it in chat. Port 465 uses TLS with certificate validation enabled. Sender and recipient are configured server-side; the visitor is Reply-To. Errors preserve the enquiry in the form. SMTP acceptance does not prove inbox delivery.

After deployment and configuration, submit a clearly labelled test enquiry and confirm its arrival in cPanel webmail, including all project fields and Reply-To. Check spam if needed. A live mailbox test remains required. Configure hosting-level abuse protection for the public contact endpoint before enabling sending.

Run `node scripts/contact-mail-audit.mjs` for mocked tests without sending mail.
