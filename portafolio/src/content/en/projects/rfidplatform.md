---
title: "RFID Platform - IoT Inventory System"
image: "../../../assets/projects/rfiddemo.png"
description: "Industrial platform with an Android mobile app (Kotlin/Jetpack Compose) and a .NET 8 backend built with hexagonal architecture."
frameworks: ["Kotlin", "Jetpack Compose", ".NET 8", "PostgreSQL", "Docker", "Room"]
type: "IoT & Mobile Full-Stack"
order: 1
status: "funcional"
url_production: ""
urls: ["https://github.com/ThejavaZ"]
---

A complete inventory and industrial traceability management platform powered by **RFID** technology. Designed to connect reading hardware with centralized enterprise systems.

### Main Components

- **Android mobile application:** built in **Kotlin** and **Jetpack Compose** (MVVM + Hilt). Integrates support for the Zebra RFID SDK, barcode scanning with CameraX/ML Kit and a robust offline synchronization system using **Room** and **WorkManager** so no data is lost in areas without coverage.
- **High-concurrency backend (.NET 8):** built on a strict **Hexagonal Architecture** (Domain, Application, Infrastructure, Api) with Entity Framework Core, PostgreSQL, JWT authentication via Sanctum/Bearer and secure BCrypt hashing. Everything containerized and production-ready with **Docker Compose**.
