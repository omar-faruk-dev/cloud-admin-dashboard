# Security Considerations

- Use OAuth2/OIDC in production; current login endpoint is scaffold-only.
- Apply RBAC policies at method level using Spring Security annotations.
- Enforce HTTPS and secure cookies/token storage policy.
- Add rate-limiting and audit retention policy.
- Implement dependency vulnerability scanning in CI (SCA).
