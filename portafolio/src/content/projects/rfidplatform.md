---
title: "RFID Platform - Sistema de Inventario IoT"
image: "../../assets/projects/rfiddemo.png"
description: "Plataforma industrial con app móvil Android (Kotlin/Jetpack Compose) y backend .NET 8 con arquitectura hexagonal."
frameworks:
  ["Kotlin", "Jetpack Compose", ".NET 8", "PostgreSQL", "Docker", "Room"]
type: "IoT & Mobile Full-Stack"
url_production: ""
urls: ["https://github.com/ThejavaZ"]
---

Plataforma integral de gestión de inventarios y trazabilidad industrial impulsada por tecnología **RFID**. Diseñada para conectar hardware de lectura con sistemas empresariales centralizados.

### Componentes Principales

- **Aplicación Móvil Android:** Desarrollada en **Kotlin** y **Jetpack Compose** (MVVM + Hilt). Integra soporte para SDK de Zebra RFID, escaneo de códigos con CameraX/ML Kit, y un sistema robusto de sincronización offline utilizando **Room** y **WorkManager** para garantizar que ningún dato se pierda en zonas sin cobertura.
- **Backend de Alta Concurrencia (.NET 8):** Construido bajo una estricta **Arquitectura Hexagonal** (Domain, Application, Infrastructure, Api) con Entity Framework Core, PostgreSQL, autenticación JWT mediante Sanctum/Bearer y encriptación segura con BCrypt. Todo empaquetado y listo para producción mediante **Docker Compose**.
