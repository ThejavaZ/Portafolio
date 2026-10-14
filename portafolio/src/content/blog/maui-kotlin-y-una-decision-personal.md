---
title: "Por qué elegí Kotlin para RFID Platform después de sufrir con MAUI"
excerpt: "La experiencia que me llevó a dejar MAUI por Kotlin y Jetpack Compose en RFID Platform, y qué aprendí de esa decisión."
date: 2026-05-31
author: "Javier"
category: "Mobile"
---

Hay decisiones técnicas que nacen de comparar documentación, rendimiento y características. Otras nacen de una experiencia mucho más sencilla: pasar suficiente tiempo peleándote con una herramienta hasta darte cuenta de que quieres probar algo diferente.

En mi caso, .NET MAUI me dejó una lección bastante clara: aunque una tecnología encaje con tu stack, eso no significa que sea necesariamente la mejor opción para todos tus proyectos.

## Mi experiencia con MAUI

Vengo de trabajar con tecnologías del ecosistema .NET, especialmente C# y aplicaciones backend. Por eso, la idea de utilizar MAUI para desarrollar aplicaciones multiplataforma me resultaba atractiva: podía aprovechar conocimientos existentes y trabajar con C# en la aplicación móvil.

Sin embargo, una de las partes que más frustración me generó fue la experiencia con las herramientas de compilación y el proceso de desarrollo.

Cuando estás intentando avanzar en una funcionalidad, encontrarte repetidamente con problemas del tooling puede romper tu ritmo de trabajo. En mi experiencia, esa fricción terminó pesando bastante.

Eso no significa que MAUI sea una mala tecnología ni que no existan proyectos donde resulte una buena elección. Significa que, para mi forma de trabajar y para los objetivos que tenía, quería explorar una alternativa.

## ¿Por qué Kotlin y Jetpack Compose?

Para RFID Platform decidí explorar Kotlin con Jetpack Compose para la aplicación Android.

La decisión tenía sentido por varios motivos:

- Quería aprender desarrollo Android con herramientas propias de su ecosistema.
- Me interesaba construir una interfaz declarativa con Jetpack Compose.
- Quería experimentar con funcionalidades móviles como almacenamiento local, sincronización y acceso a hardware.
- Buscaba separar el aprendizaje del backend .NET de las decisiones de implementación de la aplicación móvil.

Además, trabajar con Kotlin me permite ampliar mis conocimientos sin abandonar la tecnología que más me interesa profesionalmente: el backend.

## Una aplicación móvil no es solamente una interfaz

RFID Platform también me está llevando a estudiar problemas que no se resuelven diseñando pantallas.

¿Qué pasa si el dispositivo pierde conexión? ¿Cómo se guardan las lecturas mientras el servidor no está disponible? ¿Cómo evitamos enviar dos veces una operación? ¿Cómo podemos probar el flujo sin tener conectado un lector RFID físico?

Estas preguntas influyen en el diseño de la aplicación tanto como la elección del lenguaje.

Por eso, estoy explorando componentes como Room para persistencia local, WorkManager para tareas de sincronización y una abstracción que permita sustituir el lector físico por una implementación simulada durante las pruebas.

## La lección que me llevo

No quiero elegir tecnologías únicamente por moda, ni tampoco descartar una herramienta por una mala experiencia aislada.

Quiero entender qué problema resuelve cada tecnología, cuáles son sus costos y qué tan bien encaja con mis objetivos.

MAUI me permitió identificar una fricción que no quería seguir teniendo en ese proyecto. Kotlin me abrió una oportunidad para aprender algo nuevo y explorar el desarrollo Android desde otra perspectiva.

Y sí, a veces cambiar de tecnología también es una forma de recuperar las ganas de construir cosas.
