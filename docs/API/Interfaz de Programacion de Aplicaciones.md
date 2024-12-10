## ¿Que es una API?
Una interfaz de programación de aplicaciones (Application Programming Interface), 
comúnmente denominada como API, es una forma de comunicación entre dos sistemas de software.
Imaginamos que tenemos un sistema llamado **A** y otro llamado **B**. **B** necesita cierta información de **A**, así que **B** llama a la API de **A** para obtenerlos.

Para que esto funcione, **A** necesita exponer, de alguna manera, un interfaz público. 
Este interfaz normalmente está documentado para que **B** pueda entender cómo pedirle la información a **A**. 
A puede que también tenga un interfaz privado al que **B** no puede acceder, es decir, que no se expone y queda, por tanto, restringido a **B**.
Este último caso se denominaría una API privada.

## ¿Como funcionan?

A nivel fundamental, las APIs actúan como intermediarios entre dos componentes de software, definiendo reglas claras sobre cómo se envían y reciben datos, qué acciones se pueden realizar y cómo debe hacerse. A este conjunto de reglas se le denomina estándar, y ambas partes deben implementarlo para ser capaces de entenderse entre sí.

Hacer uso de las APIs facilita la comunicación entre sistemas, ya que no necesitan conocer todos los detalles internos de la implementación de cada uno. En su lugar, solo necesitan entender cómo interactuar con la API proporcionada.

En el caso específico de las APIs web, la comunicación ocurre entre un cliente y un servidor. El cliente inicia una petición (request) para obtener información del servidor, y el servidor recibe esta petición, realiza los cálculos necesarios y devuelve los resultados al cliente. Es decir, la comunicación entre el cliente y el servidor ocurre a través de peticiones.

## ¿Que es un API  endpoint?
Un API endpoint es un punto de acceso, que se representa como una URL, permitiendo que un cliente interactúe con un servidor. Cada endpoint en una API está asociado a una acción en el servidor, como por ejemplo, solicitar información, crear nuevos registros o actualizar datos existentes.

Cuando se ejecuta un endpoint se inicia una petición en el servidor y este, al recibirla, la procesa y devuelve el resultado al cliente. Este intercambio de ida y vuelta se realiza a través del protocolo HTTP mediante sockets TCP, y la información se transmite mediante mensajes HTTP.

Una petición HTTP contiene ciertos datos básicos, como el tipo de operación (por ejemplo GET, POST, PUT, DELETE), el endpoint específico de la API y cualquier parámetro adicional o datos requeridos para realizar la operación.

## Tipos de API´S

- ***API privada***

Este tipo de APIs son de uso interno y se utilizan para conectar sistemas y datos. Este tipo de API no puede ser accedido ni utilizado por usuarios externos porque está desarrollado únicamente con el propósito de optimizar la productividad dentro de una empresa.

- ***API pública***

A diferencia de las API privadas, este tipo de API está abierta al público, por lo que cualquier usuario o desarrollador puede usarla con restricciones mínimas. Incluso en algunos casos, son completamente accesibles para cualquier usuario.

- ***HTTP API***

Este tipo de API utiliza los protocolos HTTP para permitir la comunicación entre diferentes sistemas de software. Generalmente, estas APIs son diseñadas para facilitar la interacción entre los componentes del lado del cliente y del servidor a través de la web, utilizando métodos estándar como **GET, POST, PUT y DELETE** para realizar operaciones.

- ***SOAP API***

SOAP (Simple Object Access Protocol) es un protocolo basado en XML que se utiliza para intercambiar información entre sistemas en un entorno de red. Las APIs SOAP son altamente estructuradas y permiten una comunicación mucho más segura y robusta entre dispositivos y plataformas. Son comunes en ambientes empresariales debido a su riguroso conjunto de normas de comunicación.

- ***RESTful API***

Una RESTful API es otro tipo de API que se adhiere a los principios de la arquitectura REST (Representational State Transfer). Utiliza métodos HTTP de manera estándar para operaciones CRUD *(Crear, Leer, Actualizar, Eliminar).* Estas APIs estan diseñadas para ser eficientes, escalables y fáciles de integrar, utilizando formatos ligeros como JSON para el intercambio de datos.

## Tipo de metodo

- GET: Para obtener datos.
- POST: Para enviar datos.
- PUT: Para actualizar datos existentes.
- DELETE: Para eliminar datos.

## Response

Un response (respuesta) API se refiere a los datos recibidos de un servidor después de que un cliente ha realizado una llamada o solicitud API. Básicamente, las respuestas API abarcan los comentarios del servidor o las respuestas a las consultas de un cliente, lo que permite la comunicación y el intercambio de datos entre aplicaciones de software.

## Request

Un request (solicitud) es una petición que un cliente (como una aplicación web, móvil, o un servidor) hace a un servidor para obtener datos o realizar una acción específica. La solicitud se realiza mediante uno de los métodos del protocolo HTTP (como GET, POST, PUT, DELETE, etc.), y la respuesta (response) es la información que el servidor devuelve al cliente después de procesar esa solicitud.

## Body

El body (cuerpo) de una solicitud es la parte que contiene los datos que se envían al servidor como parte de la solicitud, y generalmente se usa en métodos HTTP como POST, PUT, y PATCH. El body es donde se incluyen los datos que el cliente quiere enviar al servidor, como información de un formulario, un archivo, o un objeto JSON.
