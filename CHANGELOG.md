# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - MVP Release

### Added
- **Frontend Core**: Initialized React 18 + Vite + TypeScript application.
- **Design System**: Implemented Tailwind CSS v4 dark mode theme with custom Teal and Slate branding.
- **Animations**: Added Framer Motion for scroll effects, page transitions, and micro-interactions.
- **Pages**:
  - `Home`: Hero banner, Roadmap timeline, and feature highlights.
  - `About`: Founder credibility, core values, and mission statement.
  - `Services`: Card grid outlining Full-Stack, Backend, and IoT offerings.
  - `Community`: Community benefits outline and joining form.
  - `Contact`: General inquiries form.
  - `Mock Interviews`: Specialized form for requesting technical interviews.
- **Backend Core**: Initialized Spring Boot 3.3 (Java 21) REST API.
- **Database Architecture**: Implemented Spring Data JPA models with automated timestamp auditing (`created_at`, `updated_at`).
- **PostgreSQL Integration**: Setup Hibernate connection to Supabase instance.
- **Security**: Added custom `CorsConfig.java` mapped to dynamic environment variables.
- **Documentation**: Generated extensive README, Deployment Guides, and `.env.example` templates.
