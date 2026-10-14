---
title: "Liz-AI - Asistente de IA Personal para Linux"
image: "../../assets/projects/liz-ai.png"
description: "Asistente de IA modular para la terminal con soporte multi-proveedor, ejecución segura de herramientas y una sólida suite de pruebas."
frameworks:
  [
    "Python",
    "Gemini API",
    "OpenAI API",
    "Anthropic Claude",
    "DeepSeek",
    "Docker",
    "Pytest",
  ]
type: "AI CLI & Tooling"
url_production: ""
url_repo: "https://github.com/ThejavaZ/Liz-AI.git"
urls: ["https://github.com/ThejavaZ/Liz-AI.git"]
---

**Liz-AI** es un asistente personal inteligente diseñado específicamente para entornos Linux, enfocado en optimizar flujos de trabajo de desarrollo, tareas de sistema y la interacción directa mediante la terminal con un enfoque estricto en modularidad y seguridad.

### Arquitectura y Capacidades

- **Soporte Multi-Proveedor de LLMs:** Capacidad de alternar dinámicamente entre **Google Gemini, OpenAI, Anthropic Claude y DeepSeek** a través de una interfaz desacoplada basada en factoría de proveedores.
- **Sistema de Herramientas (_Tool Calling_) con Seguridad Integrada:** Permite al agente interactuar de forma segura con el sistema operativo (sistema de archivos, control de versiones Git, comandos de terminal) utilizando una capa intermedia de permisos (_PermissionLayer_ con control ALLOW/DENY/ASK).
- **Entorno CLI Personalizado:** Comandos internos rápidos en la terminal (`/help`, `/tools`, `/clear`, `/status`) para el control de la sesión e historial.
- **Calidad y Fiabilidad:** Respaldado por más de **121 pruebas automatizadas** con `pytest` que cubren desde la integración con los proveedores de IA hasta el comportamiento de los motores de ejecución de comandos.
