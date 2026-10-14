---
title: "RFID Platform: diseñando una aplicación offline-first"
excerpt: "Room, estados de sincronización e idempotencia detrás de una app de inventario que no puede depender del Wi-Fi."
date: 2026-06-21
author: "Javier"
category: "IoT"
---

Una de las cosas que más me interesan del desarrollo de software es descubrir que una funcionalidad aparentemente sencilla puede esconder varios problemas de arquitectura.

Imaginemos una aplicación móvil que registra lecturas RFID dentro de un almacén. Si cada lectura necesita comunicarse inmediatamente con una API, ¿qué ocurre cuando la conexión Wi-Fi falla?

La aplicación podría dejar de funcionar justo cuando más se necesita.

Ese problema es una de las motivaciones de RFID Platform, un proyecto personal con el que estoy explorando una arquitectura offline-first.

## ¿Qué significa offline-first?

Una aplicación offline-first no trata la conexión a Internet como un requisito permanente para realizar todas sus operaciones.

En lugar de depender exclusivamente del servidor, utiliza almacenamiento local para conservar la información y define cómo sincronizarla cuando vuelve a existir conectividad.

Para RFID Platform estoy explorando una combinación de tecnologías:

- **Kotlin y Jetpack Compose** para la aplicación Android.
- **Room** para persistir información localmente.
- **WorkManager** para programar tareas de sincronización.
- **ASP.NET Core Web API** para el backend.
- **PostgreSQL** como base de datos del servidor.

Cada tecnología cumple un propósito diferente. La aplicación móvil administra la experiencia local, Room conserva los datos y la API centraliza las operaciones que deben persistir en el servidor.

## La importancia de los estados de sincronización

Guardar una lectura localmente no resuelve todo el problema. También necesitamos saber qué ocurrió con ella.

Por ejemplo, una lectura puede estar pendiente de sincronización, en proceso de envío o sincronizada correctamente.

Un modelo inicial podría utilizar estados como:

- `PENDING`: la operación está guardada y espera ser enviada.
- `SYNCING`: la operación está siendo procesada por el mecanismo de sincronización.
- `SYNCED`: el servidor confirmó que la operación se registró correctamente.

Estos estados ayudan a distinguir entre los datos que existen localmente y aquellos cuya persistencia remota ya fue confirmada.

También es necesario pensar en los errores. Si una petición falla, la operación no debería desaparecer simplemente porque hubo un problema de conexión.

## ¿Y si la operación se envía dos veces?

La sincronización puede encontrarse con situaciones difíciles: una petición llega al servidor, este guarda los datos, pero la respuesta nunca llega al dispositivo.

Desde el punto de vista del móvil, la operación podría parecer fallida, aunque el servidor ya la haya procesado.

Si volvemos a enviarla sin una estrategia adecuada, podemos terminar registrando la misma lectura dos veces.

Por eso, una implementación robusta necesita considerar identificadores de operación, reintentos controlados y mecanismos de idempotencia en el backend. El diseño concreto depende de las reglas del sistema y de cómo se identifiquen las lecturas.

## Separar el lector RFID de la lógica de negocio

Otra decisión importante es evitar que toda la aplicación dependa directamente del hardware.

Estoy explorando una abstracción que permita trabajar con un lector RFID real o con una implementación simulada. De esta manera, es posible desarrollar y probar parte del flujo sin necesitar el dispositivo físico durante cada prueba.

Esta separación también permite que la lógica de negocio se concentre en procesar lecturas y administrar operaciones, en lugar de depender de los detalles de un fabricante específico.

## Lo que quiero aprender con este proyecto

RFID Platform es una oportunidad para estudiar cómo se conectan el desarrollo móvil, las APIs, las bases de datos y la sincronización.

No se trata solamente de conseguir que una lectura aparezca en una pantalla. Quiero entender qué sucede cuando falla la conexión, cómo se recupera una operación y cómo diseñar componentes que puedan probarse de manera independiente.

Ese tipo de problemas es precisamente lo que me está haciendo interesarme cada vez más por la arquitectura de software.
