# cloud-admin-dashboard

Senior-level full-stack portfolio project demonstrating **Angular 18 frontend + Java Spring Boot backend** integration for enterprise SaaS administration.

## Features

- Role-based admin UX (RBAC-ready)
- Authentication flow scaffold (`/api/auth/login` + Angular interceptor/guard)
- Dashboards, metrics, audit logs, and settings modules
- Caching strategy for metrics APIs
- Docker Compose local orchestration
- CI pipelines for frontend and backend

## Project Structure

```text
.
├── frontend/
├── backend/
├── docs/
├── .github/workflows/
├── docker-compose.yml
└── README.md
```

## Screenshots (placeholders)

- `docs/screenshots/login.png`
- `docs/screenshots/dashboard.png`
- `docs/screenshots/metrics.png`

## Architecture

- **Frontend**: Angular 18 standalone components, lazy loaded routes, RxJS-powered services.
- **Backend**: Spring Boot REST microservice-style modules (`auth`, `dashboard`, `metrics`, `audit`, `settings`).
- **Integration**: REST APIs under `/api/*` consumed by Angular through typed services.

See: [`docs/architecture.md`](docs/architecture.md)

## Setup

### Prerequisites

- Node.js 20+
- Java 21+
- Maven 3.9+
- Docker + Docker Compose

### Local run (Docker)

```bash
docker compose up --build
```

- Frontend: `http://localhost:4200`
- Backend: `http://localhost:8080`

### Local run (manual)

```bash
cd backend && mvn spring-boot:run
cd frontend && npm install && npm start
```

## Quality

- Frontend unit tests + linting (`npm run test`, `npm run lint`)
- Backend tests (`mvn test`)
- API specification: [`docs/api-spec.yaml`](docs/api-spec.yaml)

## Security Considerations

- Stateless security config with authenticated endpoints by default
- RBAC foundation in place for method-level policy controls
- Recommended production controls documented in [`docs/security.md`](docs/security.md)

## Performance Notes

- Backend endpoint caching (`@Cacheable` for KPIs)
- Frontend response memoization (`shareReplay(1)`)
- Route-level code splitting via lazy loading

## Accessibility (WCAG)

Notes are tracked in [`docs/accessibility.md`](docs/accessibility.md), including semantic landmarks, labels, keyboard support, and validation guidance.

## Roadmap

1. Replace mock auth with OAuth2/OIDC + refresh token rotation.
2. Add persistent storage (PostgreSQL) and migration tooling.
3. Implement full RBAC role matrix with policy engine.
4. Add E2E tests (Playwright/Cypress) and contract tests.
5. Add observability stack (OpenTelemetry, Prometheus, Grafana).
