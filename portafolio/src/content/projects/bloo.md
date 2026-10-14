---
title: "Bloo ERP - Plataforma SaaS Multi-tenant"
image: "/images/projects/bloo.png"
description: "Sistema ERP empresarial desacoplado con arquitectura multi-tenant en Laravel 13 (PHP 8.4), panel Landlord en Vue 3 y cliente web en Next.js 16."
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
url_production: ""
urls:
  [
    "https://github.com/ThejavaZ/erp-client",
    "https://github.com/ThejavaZ/erp-api",
  ]
---

**Bloo ERP** es una plataforma SaaS (Software as a Service) desacoplada y multi-tenant diseñada para la gestión integral de inventarios, facturación y operaciones comerciales para múltiples empresas de manera aislada y segura.

### Arquitectura del Sistema

- **Cliente Web (Frontend Next.js):** Desarrollado sobre **Next.js 16** (App Router y Turbopack) con **React 19**, proporcionando una interfaz ultrarrápida y reactiva. Configurado para despliegues optimizados en producción mediante imágenes multi-etapa en **Docker** (~280 MB).
- **API REST Multi-tenant (Backend Laravel):** Desarrollada con **Laravel 13 y PHP 8.4**. Implementa filtrado riguroso por `company_id` a nivel de base de datos, modo de mantenimiento independiente por tenant y control de acceso basado en roles con **Spatie Permission** (107+ permisos). Cuenta con una cobertura de **77 pruebas automatizadas** en PHPUnit.
- **Panel Landlord (Vue 3):** Panel de administración global construido como SPA en **Vue 3, TypeScript y Vite**, enfocado en la gestión de suscripciones, métricas globales, respaldos y auditoría de tenants.
