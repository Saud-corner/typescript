# Laboratorio 2: Modelado de Datos y Tipos Genéricos

## 1. Uniones Discriminadas
Es un patrón avanzado de TypeScript que utiliza una propiedad común literal (el "discriminante", en nuestro caso la propiedad `tipo`) para diferenciar entre varias interfaces. 
Al usar `EstadoMatricula`, el compilador es capaz de inferir dentro del bloque `switch` exactamente qué propiedades están disponibles ("asignaturas", "motivo" o "notaMedia") dependiendo del caso evaluado, eliminando la posibilidad de acceder a propiedades inexistentes.

## 2. Tipos Genéricos (<T>)
Los genéricos actúan como "variables para tipos". En lugar de definir que nuestra promesa del servicio simulado siempre devuelva un `Estudiante`, utilizamos `<T>`. 
De esta forma, la función `obtenerRecurso<T>` se vuelve reutilizable. Nos permite solicitar datos a la API de Estudiantes, Asignaturas o Profesores, y TypeScript adaptará dinámicamente el tipado de la respuesta según el tipo que le pasemos entre los corchetes angulares al ejecutar la función.