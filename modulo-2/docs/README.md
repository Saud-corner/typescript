Markdown
# Documentación Arquitectónica - Módulo 2

## 1. Justificación: Interface vs Type
Para modelar las entidades del dominio (`Estudiante` y `Asignatura`) he optado por usar **`interface`**. Las interfaces son ideales para definir contratos estructurales de objetos, además de permitir extenderse de forma sencilla.

Por el contrario, para definir `EstadoMatricula` he utilizado **`type`**. Al tratarse de una Unión Discriminada que evalúa múltiples posibles interfaces (`MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada`), el uso de `type` es obligatorio, ya que las interfaces no pueden definir uniones lógicas.

## 2. Abstracción con Genéricos (<T>)
El uso del genérico `<T>` abstrae por completo la lógica de las respuestas de red. Nos permite reutilizar el mismo código de la llamada simulada, y es TypeScript quien adapta dinámicamente el tipado de la respuesta garantizando la seguridad en tiempo de compilación.