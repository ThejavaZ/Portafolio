---
title: "Komi - Multiplatform Community Social Network"
image: "../../../assets/projects/komi.png"
description: "Full social platform with a Laravel 13 REST API, a Vue 3 SPA admin panel and a cross-platform Flutter mobile client."
frameworks: ["Laravel 13", "PHP 8.3", "Vue 3", "Flutter", "Dart", "SQLite", "Sanctum"]
type: "Full-Stack & Mobile Ecosystem"
order: 2
status: "en-desarrollo"
url_production: ""
urls: ["https://github.com/ThejavaZ"]
---

**Komi** is a modern, lightweight social platform designed for niche communities, built on a decoupled architecture that combines a robust core API, an advanced administration panel and a high-performance mobile client.

### Ecosystem Architecture

- **Backend API & admin panel (Komi-Core):** a robust REST API built on **Laravel 13 (PHP 8.3)** with Sanctum token authentication, social login (OAuth2 via Socialite), soft deletes, threaded comments, a Reddit-style voting engine, automated moderation queues, shadowbanning and a **full SPA admin panel built with Vue 3.5**, protected by 2FA (Google Authenticator) and action auditing.
- **Mobile and desktop client (Flutter):** a cross-platform app (Android and Linux) built with **Flutter and Dart 3.10**. It features reactive state management with **Provider**, encrypted local storage (`FlutterSecureStorage`), built-in Markdown support for interactive feeds, OTP authentication, native Google sign-in and fluid animations with custom transitions.
