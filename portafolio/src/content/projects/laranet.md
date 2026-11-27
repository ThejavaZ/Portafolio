---
title: "Laranet - Toolkit para .NET inspirado en Laravel"
image: "../../assets/projects/lanet.png"
description: "Toolkit modular para .NET 10 inspirado en Laravel con APIs expresivas, capa de datos provider-neutral, CLI de scaffolding y panel administrativo con inferencia de metadatos; publicado en NuGet como 10 paquetes."
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
urls:
  [
    "https://github.com/ThejavaZ/Laranet",
    "https://github.com/ThejavaZ/laranet-docs",
    "https://www.nuget.org/packages/Laranet.Data",
  ]
---

**Laranet** es un toolkit modular para .NET inspirado en Laravel cuyo objetivo no es hacer que .NET parezca Laravel, sino **hacer que .NET se sienta mejor para trabajar**: APIs expresivas, abstracciones reutilizables y patrones pensados para el desarrollador, sin reemplazar ni pelearse con el ecosistema nativo.

### Arquitectura del Sistema

- **Núcleo provider-neutral (`Laranet`, `Laranet.Data`):** utilidades de consulta sobre cualquier `IQueryable<T>` — búsqueda, ordenamiento, filtrado y paginación — que preservan la composición del proveedor sin depender de EF Core, ASP.NET Core ni de un motor de base de datos. Antes de agregar una abstracción, el toolkit verifica si .NET ya resuelve el problema: sin contenedores DI propios, sin wrappers de resultado ni capas de repositorio por defecto.
- **Integraciones opcionales:** `Laranet.EntityFrameworkCore` (paginación asíncrona, auditoría y borrado suave con convenciones), `Laranet.AspNetCore` (headers de paginación HTTP y resultados para Minimal APIs), `Laranet.AspNetCore.Validation` (filtro opcional de FluentValidation) y `Laranet.Http` (cliente `HttpClient` tipado con reintentos seguros y cancelación). Cada paquete se instala por separado; el core nunca depende de ellos.
- **CLI (`Laranet.Cli`):** herramienta global de .NET para scaffolding (`laranet new`), generación de configuración (`make:config`), CRUD (`make:crud`) y utilidades de panel (`admin:install`, `admin:resource`), que emite C# ordinario y editable.
- **Panel administrativo (experimental):** integración Razor Pages con lista, búsqueda, filtros, paginación y CRUD convencionales sobre contratos provider-neutral, con autorización nativa de ASP.NET Core y antiforgery heredado de Razor Pages.
- **Documentación como código:** sitio Astro con buscador Pagefind, modo oscuro, tabla de contenidos y enlaces "Edit this page" hacia la fuente; sincronizado desde el repositorio y validado en CI (build, tipos y verificación de enlaces).

### Ingeniería de Calidad y DX

- **16 ADRs** documentan las decisiones de arquitectura. El último trío (ADR-0014,0015 y0016) convirtió el registro del panel en código declarativo: `AddLaranetAdmin(options => …)` con descubrimiento de recursos por atributo, inferencia de campos desde el modelo y DataAnnotations (`[Key]`, `[Required]`, `[Display]`, `[Range]`…), y políticas de operación sintetizadas desde la política base bajo demanda — la ceremonia de registro pasó de ~28 líneas a ~6, y el costo por recurso nuevo de9 líneas a cero.
- **488 automatizadas** con xUnit (unit + integración contra Sqlite, SQL Server, PostgreSQL y MySQL), compilación con `TreatWarningsAsErrors` y documentación XML obligatoria en toda la API pública.
- **Publicación automatizada:** workflow de release con Trusted Publishing (OIDC) hacia NuGet que verifica versiones sincronizadas, metadatos y dependencias de los10 paquetes antes de publicar.

### Resultados

- **10 paquetes publicados en NuGet** (`Laranet.*` v0.4.6): instalables con `dotnet add package` y CLI global con `dotnet tool install --global Laranet.Cli`.
- **68 páginas de documentación** en vivo con buscador, modo oscuro, navegación anterior/siguiente y CI que valida build, tipos y enlaces en cada cambio.
- **Panel admin validado en una aplicación real** además de la muestra oficial, con su superficie de rutas y contratos documentados.
