---
sidebar_position: 1
---

# INTRODUCCION A SOPORTE 

## PATRÓN MVC(MODELO-VISTA-CONTROLADOR).
- *Modelo (Datos).*
- *Vistas (UI).*
- *Controlador (Cerebro).*

  ![Descripción de la imagen](/presentacion_CapNet/MVC3.png)

- **MODELOS (DATOS)**

Es la capa donde se trabaja con los datos, por tanto contendrá mecanismos para acceder a la información y también para actualizar su estado, los datos los tendremos habitualmente en una base de datos.

- **VISTAS (UI)**

Las vistas, como su nombre nos hace entender, contienen el código de nuestra aplicación que va a producir la visualización de las interfaces de usuario. Las vistas requerirán los datos a los modelos y ellas se generará la salida, tal como nuestra aplicación requiera.

- **CONTROLADOR (CEREBRO)**

Contiene el código necesario para responder a las acciones que se solicitan en la aplicación, como visualizar un elemento, realizar una compra, una búsqueda de información, etc.En realidad es una capa que sirve de enlace entre las vistas y los modelos, respondiendo a los mecanismos que puedan requerirse para implementar las necesidades de nuestra aplicación.




## NIVELES DE SOPORTE.

Los niveles de soporte TI son las divisiones que se aplican al soporte que se realiza desde el departamento de TI o una empresa especializada en asistencia técnica, y que permite resolver problemas e incidencias en un menor tiempo y con un mayor grado de eficacia.

- Soporte de nivel 1 (N1) 
- Soporte de nivel 2 (N2) 
- Soporte de nivel 3 (N3) 
- Soporte de nivel 4 (N4) 


## Soporte de nivel 1 (N1).

Se trata de la asistencia en primera línea donde el técnico tendrá que reunir toda la información relativa al problema. El objetivo es determinar exactamente qué es lo que ocurre y definir cuál es la causa que lo produce. 

Este tipo de soporte suele tratar con problemas de fácil solución y que están principalmente relacionados con: 
Problemas de comunicación y redes (como problemas de cableado). 
Resolución de incidencias relativas a usuarios y contraseñas. 
Instalación o reinstalación de software. 
Configuraciones de software y hardware. 
Solución a consultas o incidencias de forma remota.

 *El soporte nivel 1 también es conocido como asistencia de primera línea o soporte front-end.*

 ## Soporte de nivel 2 (N2).

En este nivel de soporte TI se cuenta con técnicos con mayor experiencia y conocimientos, que suelen estar especializados en áreas de help desk, contando con conocimientos en redes, sistemas microinformáticos, bases de datos, etc.
 Lo habitual es que el soporte de nivel 2 se encargue de problemas que no han podido ser resueltos por los técnicos del nivel 1 al requerir tareas más complejas, como:

- Recuperación de datos. 
- Configuración de redes inalámbricas. 
- Formateo de equipos informáticos. 
- Actualización de firmwares. 
- Supervisar herramientas para solución de incidencias. 
- Recopilar información para pasarla a N3.
## Soporte de nivel 3 (N3).
Los técnicos que actúan en el nivel 3 de soporte TI disponen de profundos conocimientos y experiencia en la resolución de problemas informáticos, y cuentan con conocimientos técnicos de productos y servicios informáticos, con habilidades avanzadas de análisis y resolución de problemas, y con excelentes habilidades de comunicación. 
las principales funciones de este nivel de soporte se encuentran: 

- Prestar soporte a los técnicos de nivel 1 y nivel 2 si es necesario. 
- Administrar, actualizar y desarrollar bases de datos. 
- Administración de la estructura y configuración de la red. 
- Realizar configuraciones de sistemas y reparaciones en servidores. 
- Solucionar problemas de configuración de los equipos. 
- Desarrollar soluciones a nuevos problemas. 

*El soporte de nivel 3 también es conocido como soporte de alto nivel o soporte de back-end.*

## Soporte de nivel 4 (N4)

El soporte de nivel 4 de TI hace referencia a aquellas incidencias especializadas que no pueden ser atendidas por la empresa y que suelen ser resueltas por empresas externas asociados a fabricantes.
La mayoría de las empresas no disponen de técnicos que presten soporte TI de nivel 4 por lo que contratan empresas especializadas para resolver incidencias de ese nivel. 
 
## ACUERDO DE NIVEL DE SERVICIO (ANS) / SERVICE LEVEL AGREEMENT(SLA). 

Un acuerdo de nivel de servicio (SLA) es un contrato entre un proveedor de servicios y un cliente que define el servicio que se proporcionará y el nivel de rendimiento que se esperará. Un SLA también describe cómo se medirá y aprobará el rendimiento, y qué sucede si no se cumplen los niveles de rendimiento.
Los SLA son una parte importante de los contratos de subcontratación y proveedores de tecnología de la información (TI), ya que brindan una visión de extremo a extremo de la relación laboral. Ayudan a garantizar que todos los stakeholders tengan una comprensión precisa del acuerdo de servicio.


## TIPOS DE SLA

Hay 3 tipos principales de acuerdos de nivel de servicio: a nivel de cliente (a veces, llamados SLA basados en el cliente), a nivel de servicio y SLA multinivel.

- *SLA a nivel de cliente:* 
Un SLA basado en el cliente es un acuerdo entre un proveedor de servicios y un cliente, ya sea externo o interno.Un SLA interno es un acuerdo entre dos departamentos, equipos o sitios diferentes dentro de la misma organización.
- *SLA de nivel de servicio:*
Un SLA de nivel de servicio es un contrato que detalla un servicio definido que se proporciona a varios clientes. 
- *SLA multinivel:*
Un SLA multinivel es un acuerdo dividido en distintos niveles para incorporar a más de dos partes, o diferentes niveles de servicio, en el mismo acuerdo. Se podría emplear un SLA multinivel entre una organización y varios proveedores externos, como en un modelo multi-nube con numerosos proveedores de nube pública.
## OPERACIONES BASICAS DE MANIPULACION DE DATOS EN SQL.

El lenguaje de manipulación de datos (Data Manipulation Language, o DML) es un lenguaje que se utiliza para la definición del nivel externo y las operaciones de manipulación de la información. 
La manipulación de los datos consiste en la realización de operaciones de inserción, borrado, modificación y consulta de la información almacenada en la base de datos.

## OPERACIONES CRUD.

Hay cuatro instrucciones para realizar estas tareas:

 - **INSERT:** Inserta filas en una tabla. Se corresponde con la “C” de CRUD.
 - **SELECT:** muestra información sobre los datos almacenados en la base de datos. Dicha información puede - pertenecer a una o varias tablas. Es la “R”.
 - **UPDATE:** Actualiza información de una tabla. Es, obviamente, la “U”.
 - **DELETE:** Borra filas de una tabla. Se corresponde con la “D”.

## INSERTAR DATOS: SENTENCIA INSERT.

Es posible escribir la sentencia INSERT INTO de dos formas:
1. Especifique los nombres de las columnas y los valores que se insertarán: 
- INSERT INTO nombre_tabla (column1, column2, column3, ...) 
VALUES (value1, value2, value3, ...);

 Si agrega valores para todas las columnas de la tabla, no es necesario que especifique los nombres de las columnas en la consulta SQL. Sin embargo, asegúrese de que el orden de los valores esté en el mismo orden que las columnas de la tabla
sintaxis

INSERT INTO sería la siguiente:

 - INSERT INTO nombre_tabla
 VALUES (value1, value2, value3, ...);

## INSERTAR DATOS SOLO EN COLUMNAS ESPECIFICADAS.

También es posible insertar solo datos en columnas específicas.

- INSERT INTO Clientes (CustomerName, City, Country) VALUES ('Cardinal', 'Stavanger', 'Norway'); 

## ACTUALIZAR DATOS: SENTENCIA UPDATE.

La sentencia UPDATE se utiliza para modificar los registros existentes en una tabla. 

Sintaxis UPDATE INTO 
- UPDATE nombre_tabla 
- SET column1 = value1, column2 = value2, ... 
 - WHERE condition;

**Nota: ¡Tenga cuidado al actualizar registros en una tabla! Note la cláusula WHERE en la sentencia UPDATE. La cláusula WHERE especifica qué registros deben actualizarse. Si omite la cláusula WHERE, se actualizarán todos los registros de la tabla**

## BORRAR DATOS: SENTENCIA DELETE.

La sentencia DELETE se utiliza para eliminar los registros existentes en una tabla.

 Sintaxis DELETE 

- DELETE FROM nombre_tabla WHERE condition;

**Nota: ¡Tenga cuidado al eliminar registros en una tabla! Note la cláusula WHERE en la sentencia DELETE. La cláusula WHERE especifica qué registros deben eliminarse. Si omite la cláusula WHERE, se eliminarán todos los registros de la tabla.**

## ELIMINAR TODOS LOS REGISTROS.

Es posible eliminar todas las filas de una tabla sin eliminar la tabla. Esto significa que la estructura de la tabla, los atributos y los índices estarán intactos:

- DELETE FROM nombre_tabla; 

La siguiente instrucción SQL elimina todas las filas de la tabla "Clientes", sin eliminar la tabla: 

- DELETE FROM Clientes;

## SENTENCIA TRUNCATE TABLE.

Quita todas las filas de una tabla o las particiones especificadas de una tabla, sin registrar las eliminaciones individuales de filas.

 TRUNCATE TABLE es similar a la instrucción DELETE sin una cláusula WHERE;
 no obstante, TRUNCATE TABLE es más rápida y utiliza menos recursos de registros de transacciones y de sistema. 

- TRUNCATE TABLE nombre_tabla;


## CONSULTAR DATOS: SENTENCIA SELECT.

La sentencia SELECT se utiliza para seleccionar datos de una base de datos. Los datos devueltos se almacenan en una tabla de resultados, denominada conjunto de resultados.

Sintaxis SELECT 

- SELECT campos FROM nombre_tabla WHERE condition

La siguiente instrucción SQL selecciona las columnas "CustomerName" y "City" de la tabla "Clientes":

- SELECT CustomerName, City FROM Clientes; 

Para seleccionar todos los registros de una tabla en lugar de colocar los nombres de los campos, digitamos el símbolo *. Por ejemplo, si deseamos obtener todos los registros de la tabla Clientes, usamos la siguiente instrucción: 

- SELECT * FROM Clientes; 


##  ¿Que es Python y para que se utiliza?

Python es un lenguaje de programación informático,es un lenguaje de propósito general, lo que significa que se puede utilizar para crear una variedad de programas diferentes y no está especializado en ningún problema específico.Esta versatilidad, junto con su facilidad para los principiantes, lo ha convertido en uno de los lenguajes de programación más utilizados en la actualidad.

Python se utiliza habitualmente para el desarrollo de sitios web y software, la automatización de tareas, el análisis de datos y la visualización de datos.

- Análisis de datos y aprendizaje automático
- Desarrollo web
- Automatización o scripting
- Pruebas y prototipos de software
- Tareas cotidianas



## ¿Cuales son las ventajas y desventajas de usar Python?

 |  VENTAJAS                        | DESVENTAJAS   |
|--------------                       |--------------|
|  Sintaxis clara y legible.  | Velocidad de ejecución. |
|Gran comunidad y soporte.    | Gestión de memoria automática. |
|  Amplia biblioteca estándar.| No es ideal para el desarrollo móvil. |
|Versatilidad y portabilidad. | Problemas de comprensión asíncrona.  |
| Desarrollo rápido de prototipos. | Interpretacion y ejecucion.  |
| Desarrollo rápido de prototipos. | Problemas de ejecución con C/C++. |



## ¿Que significa que Python sea un lenguaje interpretado?

Python es un lenguaje de programación interpretado, lo que significa que el código es ejecutado directamente por el intérprete sin necesidad de compilarlo previamente. Es de alto nivel, lo que significa que se preocupa más por la abstracción del problema que por los detalles internos de la máquina en la que se está ejecutando.

## ¿Cual es la diferencia entre un lenguaje compilado a uno interpretado?

**Lenguajes compilados**
Los lenguajes compilados son convertidos directamente a código máquina que el procesador puede ejecutar. Como resultado, suelen ser más rápidos y más eficientes al ejecutarse en comparación con los lenguajes interpretados.También le dan al desarrollador más control sobre aspectos del hardware, como la gestión de memoria y el uso del CPU.

**Lenguajes interpretados**
Utiliza un intérprete para ejecutar el código fuente. A diferencia de los lenguajes compilados, que traducen el código fuente a lenguaje de máquina antes de su ejecución, los lenguajes de programación interpretados ejecutan el código directamente.




## ¿Que otros lenguajes interpretados existen? 

- PHP
- JavaScript
- Ruby
- Perl
- Python

## ¿Que es un framework?

Un framework de software es una estructura de código predefinida que puede usarse como base para desarrollar una aplicación. En otras palabras, proporciona un entorno estandarizado para el desarrollo de una aplicación, incluyendo un conjunto de reglas y herramientas que deben seguirse.

## ¿Qué frameworks Web existen para Python?

- Django.     

- Flask. 

- Falcon.

- FastAPI.

- PyTorch.
 
- TensorFlow. 

- Pygame. 

- Scrapy. 

- Dash (Plotly).

## ¿Cual es el patrón de diseño que sugiere el framework Django?

Django es un framework de desarrollo web de código abierto que se utiliza principalmente para crear aplicaciones web eficientes y seguras. Este framework está escrito en Python y sigue el patrón de diseño MVC (Modelo-Vista-Controlador), lo que permite una división clara de la lógica de la aplicación.

## Que servidores web existen para desplegar una aplicación desarrollada en Django ?

- Gunicorn (Green Unicorn)

- uWSGI

- Daphne

- Apache con mod_wsgi

- Nginx

- Microsoft IIS con FastCGI

- Tornado




## ¿Que es nginx y para que se utiliza? 

Diseñado para manejar solicitudes HTTP y HTTPS, Nginx es un servidor web y proxy inverso de código abierto eficiente y utilizado en Internet que se destaca por su capacidad para servir contenido web de manera rápida y eficiente, así que puede funcionar como servidor web principal o como intermediario entre los clientes y los servidores de aplicación.

- Servidor Web.
- Proxy Inverso.
- Balanceador de Carga.
- Servidor de Proxy de Correo.
- Manejo de SSL/TLS.
- Caché.

##  ¿Que se entiende por configuración de proxy inverso ?

Una configuración de proxy inverso es un tipo de configuración en una red donde un servidor, conocido como proxy inverso, actúa como intermediario entre los clientes (navegadores web, aplicaciones, etc.) y uno o más servidores backend (servidores de aplicaciones, bases de datos, etc.). A diferencia de un proxy directo, que está del lado del cliente, el proxy inverso se coloca del lado del servidor.



## ¿Que es un certificado de seguridad y para qué sirve en una plataforma web?

Un certificado de seguridad, también conocido como certificado SSL/TLS (Secure Sockets Layer/Transport Layer Security), es un archivo digital que autentica la identidad de un sitio web y permite una conexión cifrada entre el servidor web y el navegador del usuario. Los certificados de seguridad son fundamentales para asegurar las comunicaciones en internet, especialmente en plataformas web que manejan datos sensibles, como información personal, contraseñas, o transacciones financieras.

- Protección de Datos Sensibles.
- Confianza del Usuario.
- Autenticación del Sitio Web.
- Mejora del Posicionamiento en Buscadores (SEO).
- Cumplimiento Normativo.


## ¿Como se puede validar un certificado de seguridad? 

Validar un certificado de seguridad es un proceso que asegura que el certificado SSL/TLS de un sitio web es auténtico, confiable y válido. Existen varios métodos para validar un certificado de seguridad, tanto manualmente a través del navegador como mediante herramientas especializadas.

1. Validación a través del Navegador
- Verificar la URL y el Candado
- Inspeccionar el Certificado en el Navegador
2. Uso de Herramientas Online
- SSL Labs
- Why No Padlock?
- SSL Checker
3. Comprobación de la Cadena de Certificados
- Certificados Intermedios y Raíz
4. Verificación de Revocación del Certificado
- Listas de Revocación de Certificados (CRL)
- Online Certificate Status Protocol (OCSP)



## En el contexto de una aplicación de Django que es una migración y para qué sirve? 

Una migración es un archivo generado por Django que contiene los cambios que se deben realizar en la base de datos para reflejar las modificaciones hechas en los modelos de la aplicación. Estos cambios pueden incluir la creación de tablas, la modificación de columnas, la eliminación de tablas, entre otros.

- Sincronización entre Modelos y Base de Datos.
- Control de Versiones de Esquema.
- Facilidad en el Despliegue.
- Reversibilidad.

## Para qué sirve el modo debug en una aplicación de Django ?

El modo debug en una aplicación Django es una configuración especial que se utiliza principalmente durante la fase de desarrollo. Su propósito es proporcionar un entorno más informativo y útil para los desarrolladores, facilitando la identificación y corrección de errores en la aplicación. 

*Este modo está controlado por la variable DEBUG en el archivo de configuración de Django (settings.py).*

## ¿Que es Redmine?

Redmine es una herramienta para la gestión de proyectos, que con sus diversas funcionalidades permite a los usuarios de diferentes proyectos realizar el seguimiento y organización de los mismos. Además es posible optimizar su funcionamiento agregando funcionalidades. Incluye un sistema de seguimiento de incidentes con seguimiento de errores.

## Para que se usa Redmine

- Gestión de los proyectos de clientes (consultoras, ingenierías, agencias de publicidad, etc.)
- Coordinación del desarrollo de producto (bien sea informático o de cualquier otro tipo)
- Proyectos internos de I+D.
- Órdenes de compra a proveedores.
- Gestión comercial (mediante la instalación de algún plugin-módulo “CRM”)
- Comunicación con agentes/distribuidores.
- Sistema de ticketing (soporte técnico interno o externo).
- Base de datos de conocimiento.
- Autorización notas de gasto internas.
- Autorización vacaciones/ausencias del personal.
- Flujo de trabajo de operaciones administrativas y contables.

## Otras herramientas utilizadas en la industria del software.

- Holded
- Monday.com
- Wrike
- Asana
- Smartsheet
- Clarizen
- Trello
- Jira
- Notion
- Basecamp

## Instalacion  de Docusaurus.
Instala lo siguiente en tu portatil:
- Node.js [Visita Node.js](https://nodejs.org/en)
- Gitbash [Visita Git](https://git-scm.com/download/win)
- Nssm  [Visita Nssm](https://nssm.cc/download)


**NOTA: DESCARGA LAS VERSIONES MAS RECIENTES PARA EVITAR POSIBLES FALLAS, REVISAR NODE.JS SI EJECUTA SIN INSTALARLO EN EL PATH, EN CASO DE QUE NO, INSTALA NODE EN EL PATH (ADD PATH)**

- Abre tu terminal y ejecuta el siguiente comando :
npx create-docusaurus@latest nombre_website classic

**Nota: cambia npx por npm en caso de error, nombre_website es un ejemplo y utiliza el nombre que desees,classic usalo por defecto**

- Navega hasta el directorio del proyecto.
- Inicia el servidor de desarrollo con *npm run start*, esto abrira tu sitio en el navegador en *http://localhost:3000.* para que funcione es necesario tener node_modules, donde se encuentra el resto de los archivos de docusaurus.
- Instala las dependencias que hagan falta, en caso de que no inicie.
-Abre visual studio code y haz las modificaciones del sitio con Markdown y Javascript.
## NSSM
Una vez descargado *nssm*, el ejecutable pasalo a C:\Windows\System32.
Abre el cmd con permisos de administrador y ejecuta el siguiente comando:nssm install nombre-del-servicio.
Abrira una venta como esta:

 ![Descripción de la imagen](/presentacion_Capnet/nssm.png)
 - Path: buscas la direccion del ejecutable de node.js (node.exe).
 - Startup-directory: copias y pegas la direccion de donde esta la carpeta de Docusaurus.
 - Argument: puedes dejarlo vacio si lo requieres.

![Descripción de la imagen](/presentacion_Capnet/I-O.png)

Creas una carpeta en el docusaurus, como log y dentro de ella le colocas 2 .txt, una como error y la otra como output.Despues las buscas e insertas en su lugar especificado.

 *Nota: esto sirve para mostrar los errores, ya que cuando quieres ejecutar el servicio y la ejecucion no es satisfactoria solo aparece como pausado o te muestra una advertencia en SERVICIOS, hasta que te direccionas al error.txt ahi encontraras los errores.*

Presiona "windows + R" luego te diriges a  *services.msc*, buscas tu servicio y checas que este en ejecucion, y en el cmd escribes el siguiente comando *nssm status nombre-del-servicio*, tiene que que estar en *"SERVICE-RUNNING"*.
## Subir repositorio a GIT. 
Sigue estos pequeños pasos:
- Barra lateral izquierda busca *Source control* 
- *Changes* btn(+) stage all changes
- Pestaña *Source Control* btn(O) *conventional commits*
- *features* (depende el proyecto)
- *NONE* (depende el proyecto)
- *:sparkless* (depende el proyecto)  
- *Añade una pequeña descripción* (depende la proyecto)
- *Añade descripción* (depende la proyecto)
- *Enter* para confirmar y *Scape* para cancelar

##