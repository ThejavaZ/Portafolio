---
title: "Warehouse - Warehouse Management System"
image: "../../../assets/projects/warehouse.png"
description: "Warehouse management system with an ASP.NET Core REST API, PostgreSQL and a Vue 3 and TypeScript web client."
frameworks:
  [
    "C#",
    ".NET 8",
    "ASP.NET Core",
    "Entity Framework Core",
    "PostgreSQL",
    "Vue 3",
    "TypeScript",
    "Pinia",
    "Axios",
    "Docker",
  ]
type: "Backend Engineering & Full-Stack"
order: 5
status: "en-desarrollo"
url_production: ""
url_repo: "https://github.com/ThejavaZ/Warehouse-API"
urls:
  [
    "https://github.com/ThejavaZ/Warehouse-API",
    "https://github.com/ThejavaZ/Warehouse-Client",
  ]
---

**Warehouse** is a warehouse and inventory management system built as a decoupled application, using ASP.NET Core for the backend and Vue 3 for the web client. The project aims to deliver a modular solution for managing users, products, warehouses and inventory operations through a REST API.

### System Architecture

- **REST API (ASP.NET Core backend):** built with **C# and ASP.NET Core**, using **Entity Framework Core** and **PostgreSQL** for persistence. It implements authentication with JWT and rotating refresh tokens, management of users, products and warehouses, plus inventory operations protected against concurrency conditions. Includes pagination, filtering, sorting and centralized error handling through ProblemDetails.

- **Web client (Vue 3 frontend):** built with **Vue 3 and TypeScript**, using **Pinia** for global state, **Vue Router** for navigation and **Axios** to talk to the API. Implements authentication, session restoration, token renewal and management modules for users, products and warehouses.

### Engineering and good practices

- **Separation of concerns:** backend organized into controllers, services, repositories and a data context.
- **Authentication and security:** session handling with access tokens and rotating refresh tokens, with BCrypt password storage.
- **Persistence and concurrency:** inventory operations with conditional updates to protect stock integrity.
- **Typed contracts:** DTOs and TypeScript models to keep frontend and backend communication consistent.
- **Automated tests:** the API README documents a suite of 188 automated tests.
- **Containerization:** Docker setup to make running the backend straightforward.
