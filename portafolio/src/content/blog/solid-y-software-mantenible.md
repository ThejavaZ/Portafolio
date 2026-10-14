---
title: "SOLID: de memorizar principios a diseñar software mantenible"
excerpt: "Del 'que funcione' al diseño mantenible: cómo los principios SOLID cambiaron mi forma de pensar el código en proyectos backend."
date: 2026-05-10
author: "Javier"
category: "Backend"
---

Cuando empiezas a programar, es fácil medir tu progreso por una sola cosa: conseguir que el código funcione. Si una API responde, una consulta devuelve los datos esperados o una aplicación completa su tarea, parece que el problema está resuelto.

Pero a medida que trabajas en proyectos más grandes, aparece otra pregunta: ¿qué tan fácil será modificar ese código cuando cambien los requisitos?

Esa pregunta me ha llevado a interesarme cada vez más por los principios SOLID y por el diseño de software mantenible.

## ¿Qué es SOLID?

SOLID es un conjunto de cinco principios que ayudan a diseñar software orientado a objetos de manera que sus componentes sean más fáciles de comprender, extender y mantener.

- **S — Single Responsibility Principle:** una clase debería tener una responsabilidad bien definida y una razón principal para cambiar.
- **O — Open/Closed Principle:** el software debería permitir extender su comportamiento sin modificar constantemente el código existente.
- **L — Liskov Substitution Principle:** las implementaciones derivadas deben poder sustituir a sus abstracciones sin romper las expectativas del sistema.
- **I — Interface Segregation Principle:** es preferible tener interfaces pequeñas y específicas en lugar de obligar a los componentes a depender de operaciones que no necesitan.
- **D — Dependency Inversion Principle:** los componentes de alto nivel deberían depender de abstracciones, no directamente de detalles de implementación.

Aunque cada principio tiene su propia definición, todos apuntan a una idea: reducir el acoplamiento innecesario y facilitar los cambios.

## Un ejemplo sencillo en backend

Imaginemos un servicio que registra un inventario. Si una sola clase valida los datos, ejecuta consultas SQL, calcula cantidades y genera archivos CSV, cualquier cambio puede terminar afectando responsabilidades que no deberían estar relacionadas:

```csharp
// Una clase con demasiadas responsabilidades
public class InventarioService
{
    public void RegistrarLectura(string datos)
    {
        if (string.IsNullOrWhiteSpace(datos))
            throw new ArgumentException("Datos inválidos");

        using var conn = new SqlConnection(_cadenaConexion);
        conn.Execute("INSERT INTO Lecturas (Datos) VALUES (@datos)",
            new { datos });

        var total = CalcularStock();
        File.AppendAllLines("reporte.csv", new[] { $"{DateTime.Now},{total}" });
    }
}
```

Si mañana el reporte debe generar Excel, o la consulta debe cambiar de motor, tocamos una clase que ni siquiera tenía que ver con eso. Una alternativa es separar esas tareas según su propósito: una clase para las reglas del inventario, otra para el acceso a datos y otra para la generación de archivos:

```csharp
public class InventarioService
{
    private readonly ILecturaRepositorio _repositorio;
    private readonly IReporteGenerador _reporte;

    public InventarioService(ILecturaRepositorio repositorio,
                             IReporteGenerador reporte)
    {
        _repositorio = repositorio;
        _reporte = reporte;
    }

    public void RegistrarLectura(string datos)
    {
        if (string.IsNullOrWhiteSpace(datos))
            throw new ArgumentException("Datos inválidos");

        _repositorio.Guardar(datos);
        _reporte.Generar(RegistrarStock());
    }
}
```

Ahora cada pieza tiene una razón clara para cambiar, y las dependencias llegan por constructor inyectando abstracciones (Dependency Inversion) en lugar de apuntar directamente a `SqlConnection` o a un archivo del disco.

Eso no significa que cada método necesite su propia clase. La intención es que cada componente tenga una responsabilidad clara y que la separación aporte un beneficio real.

## Lo que estoy aprendiendo

Me interesa especialmente cómo estos principios se relacionan con el desarrollo backend en .NET. Al trabajar con servicios, APIs y bases de datos, las decisiones sobre dónde colocar una regla de negocio o cómo administrar una dependencia terminan influyendo en todo el proyecto.

También he aprendido que aplicar SOLID no significa crear interfaces para absolutamente todo ni construir una arquitectura enorme desde el primer día.

La abstracción tiene un costo. Si un componente es pequeño, estable y no necesita una separación adicional, agregar capas puede complicar más las cosas de lo que ayuda.

## SOLID no es una receta automática

Todavía estoy desarrollando mi criterio para saber cuándo una separación aporta valor y cuándo estoy agregando complejidad innecesaria.

Mi objetivo no es escribir la mayor cantidad de clases posibles, sino construir software que pueda entender hoy y modificar mañana sin miedo a romper todo lo demás.

Para mí, ese es uno de los cambios importantes al aprender desarrollo de software: dejar de pensar solamente en cómo resolver el problema actual y empezar a considerar cómo mantener la solución a largo plazo.
