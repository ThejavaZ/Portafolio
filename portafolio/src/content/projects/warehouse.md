---
title: "Warehouse - Warehouse Management System"
image: "../../assets/projects/warehouse.png"
description: "Sistema de gestión de almacenes con API REST en ASP.NET Core, PostgreSQL y un cliente web en Vue 3 y TypeScript."
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

**Warehouse** es un sistema de gestión de almacenes e inventario desarrollado como una aplicación desacoplada, utilizando ASP.NET Core para el backend y Vue 3 para el cliente web. El proyecto busca implementar una solución modular para administrar usuarios, productos, almacenes y operaciones de inventario mediante una API REST.

### Arquitectura del Sistema

- **API REST (Backend ASP.NET Core):** Desarrollada con **C# y ASP.NET Core**, utilizando **Entity Framework Core** y **PostgreSQL** para la persistencia de datos. Implementa autenticación mediante JWT y refresh tokens rotativos, gestión de usuarios, productos y almacenes, además de operaciones de inventario con protección frente a condiciones de concurrencia. Incluye paginación, filtros, ordenamiento y manejo centralizado de errores mediante ProblemDetails.

- **Cliente Web (Frontend Vue 3):** Desarrollado con **Vue 3 y TypeScript**, utilizando **Pinia** para la gestión del estado global, **Vue Router** para la navegación y **Axios** para la comunicación con la API. Implementa autenticación, restauración de sesión, renovación de tokens y módulos de gestión para usuarios, productos y almacenes.

### Ingeniería y buenas prácticas

- **Separación de responsabilidades:** Organización del backend en controladores, servicios, repositorios y contexto de datos.
- **Autenticación y seguridad:** Gestión de sesiones mediante access tokens y refresh tokens rotativos, con almacenamiento de contraseñas mediante BCrypt.
- **Persistencia y concurrencia:** Operaciones de inventario con actualizaciones condicionales para proteger la integridad de las existencias.
- **Contratos tipados:** DTOs y modelos TypeScript para mantener consistencia en la comunicación entre frontend y backend.
- **Pruebas automatizadas:** El README de la API documenta una suite de 188 pruebas automatizadas.
- **Contenedorización:** Configuración con Docker para facilitar el entorno de ejecución del backend.
