# Azure chatbot setup

In App Service `ggms-analytics`, Settings > Environment variables > App settings:

| Name | Value |
| --- | --- |
| AZURE_OPENAI_ENDPOINT | https://digital-6182-resource.services.ai.azure.com/openai/v1 |
| AZURE_OPENAI_DEPLOYMENT | gpt-5.6-luna |
| AZURE_OPENAI_API_KEY | Enter a regenerated resource key privately in Azure |

Use the model resource key, never a project endpoint or a key shared in chat. Apply settings and restart. These are server-only settings, never NEXT_PUBLIC variables. The Python example uses Entra authentication; this website uses the supported api-key header instead.

The route uses Responses API, bounded message/output sizes, a 25-second upstream timeout and store:false. It sends the approved company prompt with each message; conversation history and playground agents/tools are not included. Configure hosting-level rate limiting for a public paid AI endpoint. Live authentication, quota, and model response latency must be verified after configuration. Mock checks: `node scripts/chat-audit.mjs`.

After the deployment succeeds, ask the website chatbot about Power BI and check that it responds. No live provider test was performed during implementation.
