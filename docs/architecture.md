# Architecture Overview

- **Frontend**: Angular 18 standalone components with route-level lazy loading.
- **Backend**: Spring Boot modular REST API grouped by bounded context (`auth`, `dashboard`, `metrics`, `audit`, `settings`).
- **Security**: RBAC-ready API structure, stateless auth, and interceptor-based token propagation.
- **Performance**: Cache-enabled metrics endpoint and shared replay on client observables.
- **Operations**: Docker Compose for local stack, GitHub Actions for CI quality gates.
