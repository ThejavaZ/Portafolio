---
title: "Komi - Red Social Comunitaria y Multiplataforma"
image: "/images/projects/komi.png"
description: "Plataforma social completa con API REST en Laravel 13, panel de administración SPA en Vue 3 y cliente móvil multiplataforma en Flutter."
frameworks:
  ["Laravel 13", "PHP 8.3", "Vue 3", "Flutter", "Dart", "SQLite", "Sanctum"]
type: "Full-Stack & Mobile Ecosystem"
url_production: ""
urls: ["https://github.com/ThejavaZ"]
---

**Komi** es una plataforma social moderna y ligera diseñada para comunidades de nicho, construida con una arquitectura desacoplada que incluye un potente backend corporativo, un panel de control administrativo avanzado y un cliente móvil de alto rendimiento.

### Arquitectura del Ecosistema

- **Backend API & Admin Panel (Komi-Core):** API REST robusta desarrollada en **Laravel 13 (PHP 8.3)** con autenticación por tokens Sanctum, login social (OAuth2 vía Socialite), sistema de soft deletes, comentarios anidados en hilos, motor de votaciones estilo Reddit, colas automáticas de moderación, shadowban y un **Panel de Administración SPA completo construido con Vue 3.5**, protegido con autenticación 2FA (Google Authenticator) y auditoría de acciones.
- **Cliente Móvil y Escritorio (Flutter):** Aplicación multiplataforma (Android y Linux) construida con **Flutter y Dart 3.10**. Cuenta con gestión de estado reactiva mediante **Provider**, almacenamiento local cifrado (`FlutterSecureStorage`), soporte de Markdown integrado para feeds interactivos, autenticación por OTP, login nativo con Google y animaciones fluidas con transiciones personalizadas.
