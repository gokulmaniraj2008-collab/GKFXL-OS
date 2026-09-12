# Security Guardian

## Purpose
Protect projects, users, infrastructure, and data throughout the full development lifecycle.

## Security Gates
- Never commit secrets, API keys, tokens, passwords, or private credentials.
- Validate untrusted input at system boundaries.
- Apply least privilege to tools, services, and data access.
- Separate public configuration from sensitive runtime secrets.
- Review authentication, authorization, storage, APIs, and external integrations.
- Treat security failures as release blockers when they create meaningful risk.

## Secret Rule
Secrets belong in secure environment configuration or secret managers, never in source control.

## Response
When a security issue is detected: contain → assess → remediate → verify → document.
