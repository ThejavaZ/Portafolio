---
title: "Laranet - Laravel-inspired Toolkit for .NET"
image: "../../../assets/projects/lanet.png"
description: "Modular toolkit for .NET 10 inspired by Laravel, with expressive APIs, a provider-neutral data layer, a scaffolding CLI and an admin panel with metadata inference; published on NuGet as 10 packages."
frameworks:
  [
    ".NET 10",
    "C#",
    "ASP.NET Core",
    "Entity Framework Core",
    "xUnit",
    "Astro",
    "Tailwind CSS",
    "GitHub Actions",
  ]
type: "Open Source Developer Toolkit"
order: 0
status: "en-desarrollo"
url_production: ""
url_repo: "https://github.com/ThejavaZ/Laranet"
urls:
  [
    "https://github.com/ThejavaZ/Laranet",
    "https://github.com/ThejavaZ/laranet-docs",
    "https://www.nuget.org/packages/Laranet.Data",
  ]
results:
  - { value: "10", label: "packages published on NuGet" }
  - { value: "488", label: "automated tests" }
  - { value: "68", label: "documentation pages" }
  - { value: "28 → 6", label: "registration lines per resource" }
---

**Laranet** is a modular toolkit for .NET inspired by Laravel. Its goal is not to make .NET look like Laravel, but to **make .NET feel better to work with**: expressive APIs, reusable abstractions and developer-minded patterns, without replacing or fighting the native ecosystem.

### System Architecture

- **Provider-neutral core (`Laranet`, `Laranet.Data`):** query utilities over any `IQueryable<T>` — search, ordering, filtering and pagination — that preserve provider composition without depending on EF Core, ASP.NET Core or a specific database engine. Before adding an abstraction, the toolkit checks whether .NET already solves the problem: no custom DI containers, no result wrappers, no default repository layer.
- **Optional integrations:** `Laranet.EntityFrameworkCore` (async pagination, auditing and soft delete with conventions), `Laranet.AspNetCore` (HTTP pagination headers and results for Minimal APIs), `Laranet.AspNetCore.Validation` (optional FluentValidation filter) and `Laranet.Http` (a typed `HttpClient` with safe retries and cancellation). Each package installs separately; the core never depends on them.
- **CLI (`Laranet.Cli`):** a global .NET tool for scaffolding (`laranet new`), config generation (`make:config`), CRUD (`make:crud`) and admin utilities (`admin:install`, `admin:resource`), emitting ordinary, editable C#.
- **Admin panel (experimental):** Razor Pages integration with listing, search, filters, pagination and conventional CRUD over provider-neutral contracts, using native ASP.NET Core authorization and antiforgery inherited from Razor Pages.
- **Documentation as code:** an Astro site with a Pagefind search, dark mode, table of contents and "Edit this page" links back to the source; synced from the repository and validated in CI (build, types and link checking).

### Quality Engineering and DX

- **16 ADRs** document the architecture decisions. The latest trio (ADR-0014, 0015 and 0016) turned panel registration into declarative code: `AddLaranetAdmin(options => …)` with attribute-based resource discovery, field inference from the model and DataAnnotations (`[Key]`, `[Required]`, `[Display]`, `[Range]`…), and operation policies synthesized on demand from a base policy — registration ceremony went from ~28 lines to ~6, and the cost of a new resource from 9 lines to zero.
- **488 automated tests** with xUnit (unit plus integration against Sqlite, SQL Server, PostgreSQL and MySQL), compilation with `TreatWarningsAsErrors` and mandatory XML documentation across the whole public API.
- **Automated publishing:** a release workflow using Trusted Publishing (OIDC) to NuGet that verifies synchronized versions, metadata and dependencies of all **10 packages** before publishing.

### Results

- **10 packages published on NuGet** (`Laranet.*` v0.4.6): installable with `dotnet add package`, plus a global CLI via `dotnet tool install --global Laranet.Cli`.
- **68 documentation pages** live with search, dark mode, previous/next navigation and CI validating build, types and links on every change.
- **Admin panel validated in a real application** in addition to the official sample, with its route surface and contracts documented.
