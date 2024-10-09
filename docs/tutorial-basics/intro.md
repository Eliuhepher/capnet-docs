---
sidebar_position: 1
---


# Introduccion a soporte 

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
- Inicia el servidor de desarrollo con *npm run start*, esto abrira tu sitio en el navegador en *http://localhost:3000.* para que funcione es necesario tener node_modules, donde se encuentra el resto de los archivos de docusaurus. En caso de no tenerlas ejecuta el siguiente comando en la terminal de git *nmp install*-
- Instala las dependencias que hagan falta, en caso de que no inicie.
-Abre visual studio code y haz las modificaciones del sitio con Markdown y Javascript.
## NSSM
Una vez descargado *nssm*, el ejecutable pasalo a C:\Windows\System32. o dirigite al directorio donde se encuentra.
Abre el cmd con permisos de administrador y ejecuta el siguiente comando:nssm install nombre-del-servicio.
Abrira una venta como esta:

 ![Descripción de la imagen](/presentacion_Capnet/nssm.png)
 - Path: buscas la direccion del ejecutable de node.js (node.exe).
 - Startup-directory: copias y pegas la direccion de donde esta la carpeta de Docusaurus.
 - Argument: puedes dejarlo vacio si lo requieres.

![Descripción de la imagen](/presentacion_Capnet/I-O.png)

Creas una carpeta en el docusaurus, como log y dentro de ella le colocas 2 .txt, una como error y la otra como output.Despues las buscas e insertas en su lugar especificado.

 *Nota: esto sirve para mostrar los errores, ya que cuando quieres ejecutar el servicio y la ejecucion no es satisfactoria solo aparece como pausado o te muestra una advertencia en SERVICIOS, hasta que te direccionas al error.txt ahi encontraras los errores.*

Presiona "windows + R" luego te diriges a  *services.msc*, buscas tu servicio y checas que este en ejecucion, y en el cmd escribes el siguiente comando *nssm status nombre-del-servicio*, tiene que estar en *"SERVICE-RUNNING"*.
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
- *git push* desde la terminal de vsCode

## Conectarte a un servidor por escritorio remoto
- Abre la conexión a escritorio remoto.
-Escribe en el buscador de Windows >Conexión a Escritorio remoto.
- En el campo Equipo (pestaña General), introduce la dirección IP del servidor.
- Introduce tu nombre de usuario en el campo correspondiente.
- Opcional: Para guardar los datos de acceso, activa la casilla Guardar información de inicio de sesión.
- Haz clic en Conectar.
- En la ventana que se abre, introduce la contraseña.
- Haz clic en Aceptar.
- Si te conectas al servidor a través de una conexión a escritorio remoto por primera vez o no has guardado tus datos de conexión, se te pedirá que confirmes tu conexión haciendo clic en Sí.

*Se establece la conexión con el servidor a través del escritorio remoto.*
## Ejecutar NSSM en el servidor.
- Abre la terminal con permisos de administrador 
- dirigete ala carpeta donde se encuentra nssm.exe 
Ingresa el siguiente comadando:
 nssm install "nombre_servicio" "direccion_del_service.bat"

## Protocolo TCP
El Protocolo de Control de Transmisión (Transmission Control Protocol en inglés o TCP) es el método de comunicación de datos por defecto entre distintos dispositivos, a través de una red. Este establece y mantiene una conexión entre el emisor y el receptor durante el proceso de transferencia.
![Descripción de la imagen](/presentacion_Capnet/tcp.jpg)

## ¿Como funciona el protocolo TCP?
El protocolo TCP descompone los datos en paquetes y los reenvía a la capa del protocolo de Internet (IP) para garantizar que cada mensaje llegue a su ordenador de destino. Esto ayuda a evitar problemas y a mantener la eficiencia durante el proceso. Los paquetes pueden viajar por varias rutas si la ruta actual está congestionada o no está disponible. Hacerlo así mejorará el rendimiento de la red.

## Protocolo UDP.
UDP (Protocolo de datagramas de usuario) es un protocolo de comunicaciones alternativo al Protocolo de Control de Transmisión (TCP) utilizado principalmente para establecer conexiones de baja latencia y tolerancia a pérdidas entre aplicaciones en Internet.
![Descripción de la imagen](/presentacion_Capnet/UDP.jpg)

## ¿Como funciona el protocolo UDP?
UDP usa el Protocolo de Internet para obtener un datagrama (unidad de datos) de una computadora a otra. UDP funciona encapsulando datos en un paquete UDP y agregando su propia información de encabezado al paquete. Estos datos consisten en los puertos de origen y destino para comunicarse, la longitud del paquete y una checksum. Después de que los paquetes UDP se encapsulan en un paquete de Protocolo de Internet, se envían a sus destinos.

**Nota: A diferencia de TCP, UDP no garantiza que los paquetes lleguen a los destinos correctos.**

## Diferencias entre UDP y TCP.
- TCP es un protocolo orientado a conexión, mientras que el UDP es un protocolo sin previa conexión.
- La velocidad del TCP es más lenta mientras que la del UDP es más rápida.
- TCP usa el protocolo de handshake como SYN, SYN-ACK, ACK mientras que UDP no usa protocolos de handshake.
- TCP hace la comprobación de errores y también hace la recuperación de errores, por otro lado, UDP hace la comprobación de errores, pero descarta los paquetes erróneos.
- TCP tiene segmentos de reconocimiento, pero UDP no tiene ningún segmento de reconocimiento.
- TCP es pesado, y UDP es ligero.

## Como abrir un puerto con firewall.
- Accede a la configuración del Firewall de Windows. 
- Abre el menú de inicio y escribe “Firewall de Windows“.
- Selecciona la opción “Firewall de Windows con seguridad avanzada“.
- En la ventana del Firewall de Windows, haz clic en “Reglas de entrada” en el panel izquierdo.
- Crea una nueva regla de entrada.
- En el Asistente para Nueva Regla de Entrada, selecciona la opción “Puerto” y haz clic en “Siguiente“.
- Especifica el número de puerto a abrir (TCP o UDP) y selecciona la opción “Siguiente“. (*En este caso se utilizo TCP*)
- Selecciona la acción que deseas tomar (permitir la conexión o permitir la conexión si está segura) y haz clic en “Siguiente“.
- Elige las opciones de perfil que se aplicarán a esta regla (dominio, privada o pública) y haz clic en “Siguiente“. (*En este caso se marcaron las 3 opciones*)
Ingresa un nombre y una descripción opcional para la regla y haz clic en “Finalizar“.

## Conexion de Docusaurus a Nginx.
- instalar el servicio en el Servidor.
- buscar en el explorador de archivos la carpeta de ngnix.
- Abrir la carpeta y buscar nginx.conf y abrirlo con vsCode
- Hacer las modificaciones necesarias. 

*Nota: Al hacer cambios en nginx tienes que buscar el servicio de nginx en servicios y reiniciar el servicio de nginx. cada que se efectue un cambio reinicarlo.*
## Migracion de datos en Django y python
La migración de datos es una parte esencial de cualquier proyecto de desarrollo web, especialmente cuando se trata de bases de datos complejas. En Django, un potente framework web de Python, las migraciones de datos permiten a los desarrolladores hacer cambios en su esquema de base de datos sin perder datos. Esto incluye la creación, modificación o eliminación de tablas o campos. El sistema de migración incorporado en Django maneja este proceso.


Las migraciones de datos en Django son scripts de Python que Django genera para hacer cambios en el esquema de su base de datos. Estas migraciones se almacenan en un directorio de migraciones dentro de cada aplicación. Cada archivo de migración corresponde a una operación específica que modifica el esquema de su base de datos.
## LISTADO DE PUERTOS POR DEFECTO
- HTTP: 80
- HTTPS: 443
- FTP: 21 (para el control); 20 (para datos)
- SSH: 22
- Telnet: 23
- SMTP (correo electrónico): 25
- DNS: 53
- POP3 (correo electrónico): 110
- IMAP (correo electrónico): 143
- MySQL: 3306
- PostgreSQL: 5432
- MongoDB: 27017
- Redis: 6379
- LDAP: 389
- LDAPS (LDAP sobre SSL): 636
- RDP (Remote Desktop Protocol): 3389
- VNC: 5900
- SNMP (Simple Network Management Protocol): 161
- NTP (Network Time Protocol): 123
- Kerberos: 88
- XMPP (Extensible Messaging and Presence Protocol): 5222
- SFTP (Secure File Transfer Protocol): 22 (usa el mismo puerto que SSH)
- HTTP/2: 443 (usualmente en el mismo puerto que HTTPS)
- Syslog: 514
- MSSQL (Microsoft SQL Server): 1433
- Oracle DB: 1521
- SIP (Session Initiation Protocol): 5060
- SIPS (SIP sobre TLS): 5061
- iSCSI: 3260
- NFS (Network File System): 2049
- DHCP (Dynamic Host Configuration Protocol): 67 (servidor), 68 (cliente)
- TFTP (Trivial File Transfer Protocol): 69
- HTTP/3: 443 (usualmente usa el mismo puerto que HTTPS)
- Postfix (correo electrónico): 25
- Dovecot (IMAP/POP3): 143 (IMAP), 110 (POP3)
- CUPS (Common Unix Printing System): 631
- Grafana: 3000
- Jenkins: 8080
- Docker: 2375 (HTTP), 2376 (HTTPS)
- Elasticsearch: 9200
- Kubernetes API: 6443
- Apache Tomcat: 8080
- WebSocket: 80 (o 443 para seguridad sobre HTTPS)
- JIRA: 8080
- RabbitMQ: 5672
- Elastic Beanstalk: 8080 (por defecto en algunas configuraciones)
- Nginx: 80 (HTTP), 443 (HTTPS), 8080 (configurable)
- Redis Sentinel: 26379
- Memcached: 11211
- MongoDB (Replica Set): 27017 (puede variar en configuraciones de replica set)
- Puppet: 8140
- SaltStack: 4505, 4506
- Vault: 8200
- Consul: 8500
- Zookeeper: 2181
- Kibana: 5601
- SonarQube: 9000
- Hadoop: 50070 (Nombre del Nodo), 50075 (Datos del Nodo)
- Elasticsearch (Transport): 9300
## ASGI.
(Asynchronous Server Gateway Interface)(Interfaz de puerta de enlace de servidor asíncrona)
Es un protocolo de comunicación asincrónico que se utiliza en aplicaciones web modernas en Python. Fue desarrollado para permitir la programación asincrónica en aplicaciones web y es compatible con frameworks web como Django y FastAPI. ASGI es una evolución de WSGI y permite el procesamiento simultáneo de múltiples solicitudes en un solo hilo, lo que lo hace ideal para aplicaciones web de alto rendimiento y en tiempo real.
## WSGI.
(Web Server Gateway Interface)(Interfaz de puerta de enlace del servidor web)
Es un estándar para la comunicación entre servidores web y aplicaciones web escritas en Python.Se ha convertido en la base de muchos frameworks web populares en Python, como Flask y Django. WSGI se basa en el modelo de un solo hilo y utiliza una arquitectura síncrona.
## ENTORNO VIRTUAL(Venv).
Los entornos virtuales se pueden describir como directorios de instalación aislados. Este aislamiento te permite localizar la instalación de las dependencias de tu proyecto, sin obligarte a instalarlas en todo el sistema.
- Puedes tener varios entornos, con varios conjuntos de paquetes, sin conflictos entre ellos. De esta manera, los requisitos de diferentes proyectos se pueden satisfacer al mismo tiempo.
- Puedes lanzar fácilmente tu proyecto con sus propios módulos dependientes.
## 
## 
## 
## 