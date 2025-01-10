## ¿Qué son las pruebas de software?
Las pruebas de software son el proceso de evaluar y verificar que un producto o aplicación de software hace lo que se supone que debe. Los beneficios de unas buenas pruebas incluyen la prevención de errores y la mejora del rendimiento.

## Desarrollo en cascada
 Se denomina de este modo, ya que a cada salida de una etapa cae en la siguiente, es decir, las etapas se llevan a cabo una a continuación de la otra. Una de las peculiaridades de este proceso, es que no está previsto volver a una etapa anterior, es decir si se olvidó relevar algún requerimiento al comienzo, no tiene una alternativa para considerar este caso. Este proceso supone cada etapa independiente de las etapas anteriores.

## Desarrollo iterativo y creciente
 Se tiene las mismas etapas que en el Proceso de Desarrollo en Cascada, sin embargo, en este proceso, la etapa de relevamiento se divide en distintos subconjuntos y cada uno de estos sub conjuntos se construye de la misma forma que con el ciclo de vida en cascada. Se van desarrollando por partes que luego se integran, una vez finalizadas las mismas.

## Desarrollo iterativo
 En este tenemos las mismas etapas de desarrollo que los procesos anteriores, pero trabajamos sobre el todo, no necesariamente conocemos al comienzo todos los detalles del producto que queremos construir.

## Desarrollo ágil de software
 Este es un proceso iterativo e incremental, se caracteriza por contar con iteraciones cortas y por no tener fases lineales, tipo cascada en cada iteración. Existen distintas metodologías Ágiles, que entre las más conocidas y utilizadas encontramos "Scrum" y "XP: Extreme Programming".

 ## Pruebas estáticas
Son el tipo de pruebas que se realizan sin ejecutar el código de la aplicación.
Puede referirse a la revisión de documentos, ya que no se hace una ejecución de código. Esto se debe a que se pueden realizar "pruebas de escritorio" con el objetivo de seguir los flujos de la aplicación.

## Pruebas dinámicas
Todas aquellas pruebas que para su ejecución requieren la ejecución de la aplicación.
Las pruebas dinámicas permiten el uso de técnicas de caja negra y caja blanca con mayor amplitud. Debido a la naturaleza dinámica de la ejecución de pruebas es posible medir con mayor precisión el comportamiento de la aplicación desarrollada.

## Prueba manual 
 Es un tipo de prueba de software donde los probadores ejecutan manualmente los casos de prueba sin usar ninguna herramienta de automatización.

La prueba manual es la más primitiva de todos los tipos de prueba y ayuda a encontrar errores en el sistema de software. Cualquier aplicación nueva debe probarse manualmente antes de que esta pueda automatizarse. La prueba manual requiere más esfuerzo pero es necesaria para verificar la viabilidad de la automatización.

## Prueba automatica
En las pruebas de software, la automatización de pruebas consiste en el uso de software especial (casi siempre separado del software que se prueba) para controlar la ejecución de pruebas y la comparación entre los resultados obtenidos y los resultados esperados.1​ La automatización de pruebas permite incluir pruebas repetitivas y necesarias dentro de un proceso formal de pruebas ya existente o bien adicionar pruebas cuya ejecución manual resultaría difícil.

## Pruebas de caja blanca
En programación, se denomina cajas blancas a un tipo de pruebas de software que se realiza sobre las funciones internas de un módulo. Así como las pruebas de caja negra ejercitan los requisitos funcionales desde el exterior del módulo, las de caja blanca están dirigidas a las funciones internas. Entre las técnicas usadas se encuentran; la cobertura de caminos (pruebas que hagan que se recorran todos los posibles caminos de ejecución), pruebas sobre las expresiones lógico-aritméticas, pruebas de camino de datos (definición-uso de variables), comprobación de bucles (se verifican los bucles para 0,1 e interacciones, y luego para las interacciones máximas, máximas menos uno y más uno).

Las pruebas de caja blanca se llevan a cabo en primer lugar, sobre un módulo concreto, para luego realizar las de caja negra sobre varios subsistemas (integración).

## Pruebas de caja negra
La prueba de caja negra, test funcional o prueba comportamental, es un tipo de prueba de software directa, cuya finalidad es analizar la compatibilidad entre las interfaces de cada uno de los componentes del software. No tiene en consideración la lógica interna del sistema. Permite la revisión final de las especificaciones y codificación de un programa. La prueba es considerada aceptable cuando su ejecución conlleva una probabilidad elevada de encontrar un error y es satisfactoria cuando lo detecta.

El propósito es reducir el número de casos de prueba, pero manteniendo la efectividad de ésta, es decir, conseguir localizar el mayor número de errores posible. Esto se consigue mediante la exhaustiva elección de las condiciones de entrada y salida válidas y no válidas, que cubren todas las funcionalidades del sistema.


## Tipos de pruebas de software
Hay muchos tipos diferentes de pruebas de software, cada una con objetivos y estrategias específicos:

- Prueba de aceptación: verifica si todo el sistema funciona según lo previsto.

- Pruebas de integración: asegura que los componentes o funciones del software operen juntos.

- Pruebas de unidad: valida que cada unidad de software funcione según lo esperado. Una unidad es el componente de prueba más pequeño de una aplicación.

- Pruebas funcionales: verifica funciones mediante la emulación de escenarios de negocio, en función de los requisitos funcionales. La prueba de caja negra es una forma común de verificar funciones.

- Pruebas de rendimiento: prueba cómo funciona el software bajo diferentes cargas de trabajo. Las pruebas de carga, por ejemplo, se utilizan para evaluar el rendimiento en condiciones de carga reales.

- Pruebas de regresión: verifica si las nuevas características rompen o degradan la funcionalidad. Las pruebas de cordura se pueden utilizar para verificar menús, funciones y comandos a nivel superficial, cuando no hay tiempo para una prueba de regresión completa.

- Pruebas de estrés: prueba cuánta tensión puede soportar el sistema antes de que falle. Considerado como un tipo de prueba no funcional.

- Pruebas de usabilidad: valida qué tan bien un cliente puede usar un sistema o una aplicación web para completar una tarea.

## ¿Qué es un Plan de Pruebas?
Un plan de pruebas es un documento que describe la estrategia, el alcance, los recursos y el cronograma para realizar pruebas de software. Incluye detalles como:

- Qué se probará y qué no.
- Métodos de prueba.
- Herramientas necesarias.
- Roles y responsabilidades.
- Criterios de inicio y fin de pruebas.
- Estructura del Plan de Pruebas
- Introducción
- Objetivo de las pruebas.
- Contexto del proyecto.
- Alcance
- ¿Qué funcionalidad o componentes se probarán?
- ¿Qué se excluye?
- Enfoque

## Tipos de pruebas
- funcionales
- de contenido
- de APIs, 
- rendimiento

## Herramientas necesarias
- Postman, Selenium, JMeter, etc.

## Roles y Responsabilidades
- QA Engineer: Ejecución de pruebas.
- Desarrolladores: Resolución de errores.
- Planificación
- Cronograma de actividades.
- Iteraciones o sprints.
- Criterios de Éxito

# Matriz de Pruebas
Una matriz de pruebas relaciona los casos de prueba con los requisitos del sistema. Puedes usar herramientas como Excel, Google Sheets o Jira para crearla.

Columnas principales de la matriz:
- ID del Caso de Prueba: Identificador único.
- Requisito asociado: Número o descripción del requisito funcional.
- Descripción: Qué se prueba.
- Tipo de prueba: Funcional, contenido, API, etc.
- Criterios de aceptación: Condiciones que deben cumplirse.
-Resultado esperado: Lo que debe ocurrir.
- Estado: Pendiente, aprobado, fallido.
- Observaciones: Errores encontrados o notas relevantes.

| ID  | Requisito       | Descripción                  | Tipo     | Criterios de Aceptación            | Resultado Esperado   | Estado   | Observaciones        |
|-----|-----------------|------------------------------|----------|-------------------------------------|----------------------|----------|----------------------|
| TC1 | Login-R1        | Validar inicio de sesión     | API      | Respuesta HTTP 200 con token válido| Token válido recibido| Aprobado | -                    |
| TC2 | Content-R3      | Verificar formato de texto   | Contenido| Todos los títulos son H1 o H2      | Formato correcto     | Fallido  | H1 faltante en página|


## QA de Contenido
Aspectos a evaluar:
1. Estructura del contenido
- Uso correcto de encabezados (H1, H2, etc.).
- Consistencia en el formato (negritas, cursivas, listas).
2. Ortografía y gramática
- Revisar errores tipográficos o de gramática.
3. Alineación y diseño
- Verificar que los textos estén correctamente alineados y en su lugar.
4. Enlaces:
- Validar enlaces rotos y redirecciones.
5. Imágenes y multimedia:
- Revisar tamaños, formatos y carga correcta.
6. Herramientas:
- WAVE para accesibilidad.
- Broken Link Checker para validar enlaces.
- Lighthouse para revisar SEO y accesibilidad.
## QA de APIs
Aspectos a evaluar:
1. Validaciones funcionales:
- Verificar que las API respondan correctamente (HTTP status codes).
- Validar que los endpoints devuelvan los datos esperados.
2. Pruebas de seguridad:
- Validar autenticación y autorización.
- Revisar posibles inyecciones o exposición de datos sensibles.
3. Pruebas de rendimiento:
- Verificar tiempos de respuesta y carga.
4. Estructura de datos:
- Validar el esquema JSON o XML según la documentación.
5. Herramientas:
- Postman: Para pruebas funcionales y automatización básica.
- Swagger: Para documentación interactiva.
- JMeter: Para pruebas de carga y rendimiento.

| ID  | Endpoint       | Método  | Descripción                  | Status esperado | Respuesta esperada       | Estado   | Observaciones |
|-----|----------------|---------|------------------------------|-----------------|--------------------------|----------|---------------|
| TC1 | /login         | POST    | Validar inicio de sesión     | 200             | Token y mensaje "success"| Aprobado | -             |
| TC2 | /user/profile  | GET     | Obtener datos del usuario    | 200             | JSON con datos del perfil| Fallido  | Campos faltantes|

