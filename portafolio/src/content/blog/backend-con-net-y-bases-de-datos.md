---
title: "Lo que estoy aprendiendo sobre backend con .NET y bases de datos"
excerpt: "Controllers, servicios, ADO.NET y Dapper: lo que voy aprendiendo detrás de un endpoint."
date: 2026-07-12
author: "Javier"
category: "Backend"
---

Cuando empecé a interesarme por el backend, una API podía parecer relativamente sencilla: recibir una petición, consultar una base de datos y devolver una respuesta.

Pero trabajar con sistemas reales me ha ayudado a entender que un endpoint es solamente una pequeña parte de una aplicación.

Detrás de una petición hay decisiones sobre validaciones, acceso a datos, manejo de errores, seguridad y organización del código.

Por eso, he decidido enfocar cada vez más mi aprendizaje en C# y ASP.NET Core.

## Una API necesita algo más que controladores

En una Web API, los controladores deberían encargarse principalmente de recibir las peticiones HTTP y producir las respuestas correspondientes.

Las reglas de negocio necesitan un lugar donde puedan expresarse sin quedar mezcladas con los detalles del protocolo HTTP o de la base de datos.

Una separación sencilla puede verse así:

- **Controller:** recibe la petición y devuelve una respuesta HTTP.
- **Service:** coordina las operaciones y aplica las reglas de negocio que le corresponden.
- **Data Access:** ejecuta las operaciones necesarias contra la base de datos.

No todos los proyectos necesitan exactamente la misma estructura, pero separar responsabilidades ayuda a entender qué hace cada componente.

## SQL Server, Dapper y ADO.NET

Otra parte importante de mi aprendizaje ha sido trabajar con bases de datos y comprender mejor cómo se ejecutan las consultas.

ADO.NET permite trabajar directamente con conexiones, comandos y lectores de datos. Es una forma de entender con mayor claridad qué ocurre cuando una aplicación se comunica con SQL Server:

```csharp
using var conn = new SqlConnection(cadenaConexion);
await conn.OpenAsync();

using var cmd = new SqlCommand(
    "SELECT Id, Nombre FROM Productos WHERE Activo = 1", conn);

using var reader = await cmd.ExecuteReaderAsync();
while (await reader.ReadAsync())
{
    var producto = new Producto
    {
        Id = reader.GetInt32(0),
        Nombre = reader.GetString(1),
    };
}
```

Dapper, por otro lado, facilita el mapeo de resultados SQL hacia objetos de C# sin ocultar por completo el SQL que se ejecuta:

```csharp
using var conn = new SqlConnection(cadenaConexion);

var productos = await conn.QueryAsync<Producto>(
    "SELECT Id, Nombre FROM Productos WHERE Activo = 1");
```

Las dos piezas hacen esencialmente lo mismo, pero la segunda elimina el mapeo manual a cambio de depender de una librería extra.

Ambas herramientas tienen ventajas dependiendo del problema.

Si necesito comprender el flujo de una consulta o controlar de manera explícita cómo se ejecutan las operaciones, ADO.NET es una herramienta valiosa. Si quiero reducir el código repetitivo de mapeo y seguir escribiendo consultas SQL directamente, Dapper puede ser una alternativa práctica.

También me interesa conocer Entity Framework Core y entender en qué escenarios una abstracción de mayor nivel puede mejorar la productividad.

La idea no es declarar que una herramienta siempre es mejor que otra, sino aprender a elegir con fundamento.

## ¿Necesito una arquitectura compleja?

Es fácil encontrar proyectos con numerosas capas, interfaces y patrones de diseño. Sin embargo, añadir más componentes no garantiza que el software sea mejor.

En un servicio pequeño, una estructura con controladores, servicios y un mecanismo claro de acceso a datos puede ser suficiente.

En un sistema más complejo, una arquitectura hexagonal puede ayudar a aislar las reglas de negocio de la infraestructura y facilitar las pruebas.

La decisión debería depender de las necesidades reales del sistema, no de la cantidad de carpetas que podamos crear.

## Mi objetivo profesional

Quiero seguir creciendo como desarrollador backend, profundizando en ASP.NET Core, SQL, diseño de APIs y arquitectura de software.

Para conseguirlo, no quiero limitarme a producir funcionalidades que compilen. También quiero poder explicar por qué elegí una solución, cuáles son sus limitaciones y cómo podría evolucionar si los requisitos cambian.

Para mí, esa es una parte fundamental de convertirse en un mejor desarrollador: comprender no solamente cómo construir una solución, sino también por qué está construida de esa manera.
