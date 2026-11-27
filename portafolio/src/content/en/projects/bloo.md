---
title: "Bloo ERP - Multi-tenant SaaS Platform"
image: "../../../assets/projects/bloo.png"
description: "Decoupled enterprise ERP with a multi-tenant architecture on Laravel 13 (PHP 8.4), a Vue 3 Landlord panel and a Next.js 16 web client."
frameworks:
  [
    "Next.js 16",
    "React 19",
    "Laravel 13",
    "Vue 3",
    "TypeScript",
    "Docker",
    "Spatie",
  ]
type: "Enterprise SaaS & Full-Stack"
order: 4
status: "en-desarrollo"
url_production: ""
url_repo: "https://github.com/ThejavaZ/erp-client"
urls:
  [
    "https://github.com/ThejavaZ/erp-client",
    "https://github.com/ThejavaZ/erp-api",
  ]
---

**Bloo ERP** is a decoupled, multi-tenant SaaS (Software as a Service) platform for end-to-end inventory, invoicing and commercial operations across multiple companies, kept isolated and secure.

### System Architecture

- **Web client (Next.js frontend):** built on **Next.js 16** (App Router and Turbopack) with **React 19**, delivering an ultra-fast, reactive interface. Configured for optimized production deploys with multi-stage **Docker** images (~280 MB).
- **Multi-tenant REST API (Laravel backend):** built with **Laravel 13 and PHP 8.4**. Enforces strict `company_id` filtering at the database level, per-tenant maintenance mode and role-based access control with **Spatie Permission** (107+ permissions), backed by **77 automated tests** in PHPUnit.
- **Landlord panel (Vue 3):** global administration panel built as an SPA on **Vue 3, TypeScript and Vite**, focused on subscriptions, global metrics, backups and tenant auditing.
