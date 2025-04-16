# API de Autenticación y Consumo de Catálogos – Documentación Técnica

## Introducción

Este documento describe el funcionamiento del sistema de autenticación y consumo de catálogos a través de una API. El propósito del proyecto es obtener un token de autenticación y utilizarlo para realizar peticiones a diversos servicios de catálogos, garantizando un acceso seguro y controlado a la información.

A lo largo de esta documentación, se detallarán los siguientes aspectos:

1. Autenticación
2. Consumo de catálogos
   - Asesores de Servicio
   - Tipo de Orden
   - Tipo de Operación
   - Operaciones por tipo de Orden
   - Mantenimientos
3. Insertar la Orden de Servicio.
4. Manejo de respuestas y errores.
5. Ejemplos de implementación.

## Autenticación

El sistema requiere un proceso de autenticación para acceder a los catálogos. Para ello es necesario obtener un Token de acceso, el cual se incluirá en cada solicitud a la API. Este token se genera mediante una petición HTTP POST enviando las credenciales de acceso al servidor.

1. Ambientes
   - Ambiente de pruebas: http://grupopiomikron.ddns.net:8090/api/Hyundai/Token
   - Ambiente de producción: https://hyundaileon.homelinux.net:8091/api/Hyundai/Token
   
2. Request Body
   - La petición debe incluir un JSON con las credenciales.

![imagen](/autosystem/image/image4.png)

3. Response esperado
   
![imagen](/autosystem/image/image5.png)

## Catálogo Asesores de servicio

El propósito de este catálogo es proporcionar la lista de los asesores de servicio disponibles en el sistema.

1. Ambientes

   - Ambiente de pruebas: http://grupopiomikron.ddns.net:8090/api/Hyundai/ConsultaAS
   - Ambiente de producción: https://hyundaileon.homelinux.net:8091/api/Hyundai/ConsultaAS

2. Response esperado

![imagen](/autosystem/image/image6.png)

## Catálogo Tipo de Orden

El propósito de este catálogo define los distintos tipos de órdenes disponibles en el sistema.

1. Ambientes

   - Ambiente de pruebas: http://grupopiomikron.ddns.net:8090/api/Hyundai/ConsultaTO
   - Ambiente de producción: https://hyundaileon.homelinux.net:8091/api/Hyundai/ConsultaTO

2. Response esperado

![imagen](/autosystem/image/image7.png)

## Tipo de Operación

El propósito de este catálogo define el tipo de operaciones.

1. Ambientes

   - Ambiente de pruebas: http://grupopiomikron.ddns.net:8090/api/Hyundai/ConsultaTP
   - Ambiente de producción: https://hyundaileon.homelinux.net:8091/api/Hyundai/ConsultaTP

2. Response esperado
   
![imagen](/autosystem/image/image8.png)

## Catálogo de Operaciones por Tipo de Orden

El propósito de este catálogo define las operaciones permitidas según el tipo de orden. Cada tipo de orden tiene un conjunto especifico de operaciones que pueden ser realizadas.

1. Ambientes

   - Ambiente de pruebas: http://grupopiomikron.ddns.net:8090/api/Hyundai/ConsultaOP
   - Ambiente de producción: https://hyundaileon.homelinux.net:8091/ api/Hyundai/ConsultaOP

2. Request Body

| Etiqueta  | Descripción                 | Tipo    | Obligatorio | Nulo/Vacío                                                       | Ejemplo |
| --------- | --------------------------- | ------- | ----------- | ---------------------------------------------------------------- | ------- |
| DealerId  | Número de Agencia           | Int     | Sí          | No                                                               | 1,2,3   |
| TipoOrden | Tipo de Orden               | Varchar | Sí          | No                                                               | PU, EX  |
| Descr     | Descripción de la operación | Varchar | Sí          | Si no trae palabra clave = NULO, Si trae palabra clave = NO NULO | FRENOS  |

3. Payload de Ejemplo

![imagen](/autosystem/image/image9.png)

4. Response esperado

![imagen](/autosystem/image/image10.png)

## Catálogo de Mantenimientos

El propósito de este catálogo es proporcionar la lista de operaciones mantenimientos disponibles en el sistema.

1. Ambientes

   - Ambiente de pruebas: http://grupopiomikron.ddns.net:8090/api/Hyundai/ConsultaMT
   - Ambiente de producción: https://hyundaileon.homelinux.net:8091/ api/Hyundai/ConsultaMT

2. Request Body

| Etiqueta | Descripción                 | Tipo    | Obligatorio | Nulo/Vacío                                                       | Ejemplo |
| -------- | --------------------------- | ------- | ----------- | ---------------------------------------------------------------- | ------- |
| DealerId | Número de Agencia           | Int     | Sí          | No                                                               | 1,2,3   |
| Descr    | Descripción de la operación | Varchar | Sí          | Si no trae palabra clave = NULO, Si trae palabra clave = NO NULO | MTTO10K |

3. Payload Ejemplo

![imagen](/autosystem/image/image11.png) 

4. Response esperado

![imagen](/autosystem/image/image12.png)

## Crear Orden de Servicio

El propósito de este WebService es notificar que la orden se ha creado correctamente, para esto AutoSystem proporciona el siguiente servicio que se detalla a continuación:

1. Especificaciones
   Se debe de consumir el Web Services cuando se crea la orden, con la información del taller, vehículo, cliente y asesor de servicio, validando previamente los datos clave, asesores disponibles y tipos de ordenes permitidas.

2. Ambientes
   - Ambiente de pruebas: http://grupopiomikron.ddns.net:8090/api/Hyundai/InsertOS
   - Ambiente de producción: https://hyundaileon.homelinux.net:8091/api/Hyundai/InsertOS
3. Request Body

   - Campos Generales

| Etiqueta    | Descripción                | Tipo    | Obligatorio | Nulo/Vacío | Ejemplo           |
| ----------- | -------------------------- | ------- | ----------- | ---------- | ----------------- |
| DealerId    | Número de Agencia          | Int     | Sí          | No         | 1                 |
| TipoOrden   | Tipo de Orden              | Varchar | Sí          | No         | PU                |
| AsesClave   | Núm. de asesor de Servicio | Int     | Sí          | No         | 1                 |
| TipoOper    | Clave de Tipo Operación    | Varchar | Sí          | No         | MANT              |
| Vin         | Núm. de Serie del vehículo | Varchar | Sí          | No         | MB2C32AC7HM110674 |
| Motor       | Tipo de motor del vehículo | Varchar | Sí          | No         | G4FGGU811595      |
| Placas      | Número de placas           | Varchar | Sí          | No         | Placas, SP        |
| Marca       | Marca del vehículo         | Varchar | Sí          | No         | Hyundai           |
| Modelo      | Modelo del vehículo        | Varchar | Sí          | No         | Tucson            |
| AnioModelo  | Año modelo del vehículo    | Int     | Sí          | No         | 2025              |
| Kilometraje | Kilometraje                | Int     | Sí          | No         | 10000             |

- Mantenimiento

| Etiqueta | Descripción            | Tipo          | Obligatorio | Nulo/Vacío | Ejemplo        |
| -------- | ---------------------- | ------------- | ----------- | ---------- | -------------- |
| CveOper  | Clave de mantenimiento | Varchar       | Sí          | No         | ALIN1          |
| Descr    | Descripción            | Varchar       | Sí          | No         | MTTO 20,000 KM |
| Tiempo   | Unidades de tiempo     | Numeric(18,2) | Sí          | No         | 192            |
| Precio   | Precio por hora        | Numeric(18,2) | Sí          | No         | 1393           |

    - Operaciones Por Tipo De Orden

| Etiqueta | Descripción                | Tipo          | Obligatorio | Nulo/Vacío | Ejemplo           |
| -------- | -------------------------- | ------------- | ----------- | ---------- | ----------------- |
| CveOper  | Clave de la operación      | Varchar       | Sí          | No         | 03LIMP01          |
| Descr    | Descripción de Operaciones | Varchar       | Sí          | No         | CAMBIO DE BALATAS |
| Tiempo   | Unidades de tiempo         | Numeric(18,2) | Sí          | No         | 50                |
| Precio   | Precio por hora de MO      | Numeric(18,2) | Sí          | No         | 600               |

    - Refacciones

| Etiqueta | Descripción              | Tipo          | Obligatorio | Nulo/Vacío | Ejemplo |
| -------- | ------------------------ | ------------- | ----------- | ---------- | ------- |
| CveOper  | Clave del producto       | Varchar       | Sí          | No         | 940559  |
| Descr    | Descripción de Refacción | Varchar       | Sí          | No         | -       |
| Tiempo   | Cantidad de Piezas       | Numeric(18,2) | Sí          | No         | 50      |

4. Payload de Ejemplo

![imagen](/autosystem/image/image13.png)

5. Response esperado

![imagen](/autosystem/image/image14.png)

## Advisor Inspection.postman_collection.json

<details>
<summary>Ver JSON: Advisor Inspection.postman_collection</summary>

```json
{
  "info": {
    "_postman_id": "eeeedcfc-3d92-4396-9208-c97da0d2e349",
    "name": "Advisor Inspection",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "_exporter_id": "9987438",
    "_collection_link": "https://winter-robot-428891.postman.co/workspace/APIs-Capnet-Eliu-Hepher-G.~cf4f6726-022b-4f30-815e-c3b2c0de2a1f/collection/9987438-eeeedcfc-3d92-4396-9208-c97da0d2e349?action=share&source=collection_link&creator=9987438"
  },
  "item": [
    {
      "name": "Create Bulk Items",
      "request": {
        "auth": {
          "type": "noauth"
        },
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "[\n    {\n        \"allow_attachments\": true,\n        \"max_attachments\": 5,\n        \"dealer_id\": \"1\",\n        \"category\": \"1\",\n        \"options\": [\n            {\n                \"icon\": \"fa-circle-check\",\n                \"description\": \"Si\",\n                \"default\": true,\n                \"style\": \"success\",\n                \"id\": \"1\",\n                \"actions\": [\n                    \"showComment\"\n                ]\n            },\n            {\n                \"icon\": \"fa-circle-exclamation\",\n                \"description\": \"No\",\n                \"default\": false,\n                \"style\": \"danger\",\n                \"id\": \"2\",\n                \"actions\": [\n                    \"showComment\"\n                ]\n            }\n        ],\n        \"is_active\": true,\n        \"allow_comments\": true,\n        \"description\": \"Primer item\",\n        \"id\": \"1\",\n        \"helper\": \"\",\n        \"is_elegible_for_quote\":true\n    },\n    {\n        \"allow_attachments\": true,\n        \"max_attachments\": 20,\n        \"dealer_id\": \"1\",\n        \"category\": \"1\",\n        \"options\": [\n            {\n                \"icon\": \"fa-circle-check\",\n                \"description\": \"Si\",\n                \"default\": true,\n                \"style\": \"success\",\n                \"id\": \"1\",\n                \"actions\": [\n                    \"showComment\"\n                ]\n            },\n            {\n                \"icon\": \"fa-circle-exclamation\",\n                \"description\": \"No\",\n                \"default\": false,\n                \"style\": \"danger\",\n                \"id\": \"3\",\n                \"actions\": [\n                    \"showComment\"\n                ]\n            }\n        ],\n        \"is_active\": true,\n        \"allow_comments\": true,\n        \"description\": \"Segundo Item\",\n        \"id\": \"2\",\n        \"helper\": \"Test\",\n        \"is_elegible_for_quote\":false\n    }\n]",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "{{base_url}}api/listado_items_recepcion",
          "host": ["{{base_url}}api"],
          "path": ["listado_items_recepcion"]
        }
      },
      "response": []
    },
    {
      "name": "Delete Item",
      "request": {
        "auth": {
          "type": "noauth"
        },
        "method": "DELETE",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"dealer_id\": \"1\",\n    \"id\": \"2\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "{{base_url}}api/listado_items_recepcion",
          "host": ["{{base_url}}api"],
          "path": ["listado_items_recepcion"]
        }
      },
      "response": []
    },
    {
      "name": "Update Item",
      "request": {
        "auth": {
          "type": "noauth"
        },
        "method": "PUT",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n        \"allow_attachments\": true,\n        \"max_attachments\": 20,\n        \"dealer_id\": \"1\",\n        \"category\": \"1\",\n        \"options\": [\n            {\n                \"icon\": \"fa-circle-check\",\n                \"description\": \"Si\",\n                \"default\": true,\n                \"style\": \"success\",\n                \"id\": \"1\",\n                \"actions\": [\n                    \"showComment\"\n                ]\n            },\n            {\n                \"icon\": \"fa-circle-exclamation\",\n                \"description\": \"No\",\n                \"default\": false,\n                \"style\": \"danger\",\n                \"id\": \"3\",\n                \"actions\": [\n                    \"showComment\"\n                ]\n            }\n        ],\n        \"is_active\": true,\n        \"allow_comments\": true,\n        \"description\": \"Segundo Item\",\n        \"id\": \"2\",\n        \"helper\": \"Test\",\n        \"is_elegible_for_quote\":false\n    }",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "{{base_url}}api/listado_items_recepcion",
          "host": ["{{base_url}}api"],
          "path": ["listado_items_recepcion"]
        }
      },
      "response": []
    },
    {
      "name": "Get All items",
      "protocolProfileBehavior": {
        "disableBodyPruning": true
      },
      "request": {
        "auth": {
          "type": "noauth"
        },
        "method": "GET",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "{{base_url}}api/listado_items_recepcion",
          "host": ["{{base_url}}api"],
          "path": ["listado_items_recepcion"]
        }
      },
      "response": []
    },
    {
      "name": "Get Inspection By Id Hd",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "{{base_url}}api/listado_items_recepcion_detalle?id_hd=1",
          "host": ["{{base_url}}api"],
          "path": ["listado_items_recepcion_detalle"],
          "query": [
            {
              "key": "id_hd",
              "value": "1"
            }
          ]
        }
      },
      "response": []
    },
    {
      "name": "Create Inspection",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"id_hd\": \"1978723\",\n\t\"general_comment\": \"este es un comment\",\n    \"advisor\": \"Asesor 1\",\n    \"type\": \"asesor\",\n    \"items\": [\n        {\n            \"description\": \"Item 1\",\n            \"status\": \"Si\",\n            \"comment\": \"Comentario del item\",\n            \"is_elegible_for_quote\": true\n        },\n        {\n            \"description\": \"Item 2\",\n            \"status\": \"No\",\n            \"comment\": \"Comentario del item 2\",\n            \"is_elegible_for_quote\": false\n        }\n    ]\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "{{base_url}}api/listado_items_recepcion_detalle",
          "host": ["{{base_url}}api"],
          "path": ["listado_items_recepcion_detalle"]
        }
      },
      "response": []
    }
  ]
}
```

</details>

## APIs Autosystem.postman_environment.json
<details>
<summary>Ver JSON: APIs Autosystem.postman_environment</summary>

```json
{
  "id": "05e5baea-b72c-4e38-927f-3cca67af8478",
  "name": "APIs Autosystem",
  "values": [
    {
      "key": "base_uri",
      "value": "http://grupopiomikron.ddns.net:8090/api/",
      "type": "default",
      "enabled": true
    }
  ],
  "_postman_variable_scope": "environment",
  "_postman_exported_at": "2025-04-16T15:03:03.605Z",
  "_postman_exported_using": "Postman/11.36.2"
}
```
</details>

## APIs Autosystem.postman_collection.json
<details>
<summary>Ver JSON :Autosystem.postman_collection.json </summary>

```json
{
  "info": {
    "_collection_link": "https://winter-robot-428891.postman.co/workspace/APIs-Capnet-Eliu-Hepher-G.~cf4f6726-022b-4f30-815e-c3b2c0de2a1f/collection/9987438-87c51ea5-3b49-41cd-9ca8-6411f35c00e8?action=share&source=collection_link&creator=9987438",
    "_exporter_id": "9987438",
    "_postman_id": "87c51ea5-3b49-41cd-9ca8-6411f35c00e8",
    "name": "APIs Autosystem",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Get Order Types",
      "request": {
        "auth": {
          "bearer": [
            {
              "key": "token",
              "type": "string",
              "value": "{{bearerToken}}"
            }
          ],
          "type": "bearer"
        },
        "header": [
          {
            "key": "organizationId",
            "type": "text",
            "value": "{{organizationId_prd}}"
          },
          {
            "key": "organizationId",
            "type": "text",
            "value": "{{organizationId_dev}}"
          }
        ],
        "method": "POST",
        "url": {
          "host": ["grupopiomikron", "ddns", "net"],
          "path": ["api", "Hyundai", "ConsultaTO"],
          "port": "8090",
          "protocol": "http",
          "raw": "http://grupopiomikron.ddns.net:8090/api/Hyundai/ConsultaTO"
        }
      },
      "response": []
    },
    {
      "name": "Get Service Advisors",
      "request": {
        "auth": {
          "bearer": [
            {
              "key": "token",
              "type": "string",
              "value": "{{bearerToken}}"
            }
          ],
          "type": "bearer"
        },
        "header": [
          {
            "key": "organizationId",
            "type": "text",
            "value": "57-1"
          }
        ],
        "method": "POST",
        "url": {
          "host": ["grupopiomikron", "ddns", "net"],
          "path": ["api", "Hyundai", "ConsultaAS"],
          "port": "8090",
          "protocol": "http",
          "raw": "http://grupopiomikron.ddns.net:8090/api/Hyundai/ConsultaAS"
        }
      },
      "response": []
    },
    {
      "event": [
        {
          "listen": "prerequest",
          "script": {
            "exec": [
              "// Función para generar un VIN aleatorio",
              "function generateVIN() {",
              "    const chars = 'ABCDEFGHJKLMNPRSTUVWXYZ0123456789';",
              "    const vinLength = 17;",
              "    let vin = '';",
              "",
              "    for (let i = 0; i < vinLength; i++) {",
              "        vin += chars.charAt(Math.floor(Math.random() * chars.length));",
              "    }",
              "",
              "    return vin;",
              "}",
              "",
              "// Generar y almacenar el VIN en una variable de entorno",
              "let vinGenerated = generateVIN();",
              "pm.environment.set(\"vin\", vinGenerated);",
              "",
              "// Función para generar letras aleatorias",
              "function getRandomLetters(length) {",
              "    const letters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";",
              "    let result = \"\";",
              "    for (let i = 0; i < length; i++) {",
              "        result += letters.charAt(Math.floor(Math.random() * letters.length));",
              "    }",
              "    return result;",
              "}",
              "",
              "// Función para generar números aleatorios",
              "function getRandomNumbers(length) {",
              "    const numbers = \"0123456789\";",
              "    let result = \"\";",
              "    for (let i = 0; i < length; i++) {",
              "        result += numbers.charAt(Math.floor(Math.random() * numbers.length));",
              "    }",
              "    return result;",
              "}",
              "",
              "// Generar una placa en formato AAA000A",
              "let licensePlate = getRandomLetters(3) + getRandomNumbers(3) + getRandomLetters(1);",
              "",
              "// Almacenar la placa en una variable de entorno",
              "pm.environment.set(\"licensePlate\", licensePlate);",
              "",
              "// Lista de modelos Hyundai",
              "const hyundaiModels = [",
              "    \"Tucson\", \"Santa Fe\", \"Palisade\", \"Elantra\", \"Sonata\",",
              "    \"Accent\", \"Kona\", \"Creta\", \"Venue\",",
              "    \"Ioniq\", \"Staria\", \"Grand i10\", \"Bayon\"",
              "];",
              "",
              "// Seleccionar un modelo aleatorio",
              "let selectedModel = hyundaiModels[Math.floor(Math.random() * hyundaiModels.length)];",
              "",
              "// Almacenar el modelo en una variable de entorno",
              "pm.environment.set(\"model\", selectedModel);",
              "",
              "// Lista de colores",
              "const colors = [",
              "    \"Blanco\", \"Negro\", \"Gris\", \"Plata\", \"Azul\", \"Rojo\",",
              "    \"Verde\", \"Naranja\", \"Marrón\", \"Beige\", \"Vino\", \"Grafito\"",
              "];",
              "",
              "// Seleccionar un color aleatorio",
              "let selectedColor = colors[Math.floor(Math.random() * colors.length)];",
              "",
              "// Almacenar el color en una variable de entorno",
              "pm.environment.set(\"color\", selectedColor);",
              ""
            ],
            "packages": {},
            "type": "text/javascript"
          }
        }
      ],
      "name": "Create Order",
      "request": {
        "auth": {
          "bearer": [
            {
              "key": "token",
              "type": "string",
              "value": "{{bearerToken}}"
            }
          ],
          "type": "bearer"
        },
        "body": {
          "mode": "raw",
          "options": {
            "raw": {
              "language": "json"
            }
          },
          "raw": "{\n    \"DealerId\": \"1\",\n    \"Vin\": \"{{vin}}\",\n    \"Modelo\": \"{{model}}\",\n    \"Kilometraje\": \"15000\",\n    \"Torre\": \"1 ROJO\",\n    \"TipoOrden\": \"PU\",\n    \"AsesorServ\": \"15\",\n    \"AsesClave\":\"15\", // no incluido en la documentacion\n    \"Telefono\": \"5591665652\",\n    \"Email\": \"ejemplo@ejemplo.com\", // en la documentacion viene en minusculas\n    \"Comentarios\": \"Comentarios de la orden\",\n    \"TipoOper\": \"MANT| MANTENIMIENTO\",\n    \"Motor\": \"{{vin}}\",\n    \"Placas\": \"{{licensePlate}}\",\n    \"Marca\": \"Hyundai\",\n    \"AnioModelo\": \"2020\",\n    \"Identificador\": \"i10\",\n    \"TipoVehiculo\": \"1\", // duda si es una constante\n    \"NomContacto\": \"Test\", // duda si es el nombre del cliente\n    \"ApCont\": \"Test\", // ?? \n    \"AmCont\": \"test\",\n    \"RazonSocial\":\"\",\n    \"NomCte\":\"Test\",\n    \"ApCte\":\"Test\",\n    \"AmCte\":\"Test\",\n    \"RFC\": \"GUHE951012KS0\",\n    \"RegFiscal\": \"601\", // duda debe ser un valor fijo ?\n    \"UsoCfdi\": \"S01\", // Debe ser valor fijo con fines solo de crear la orden ? \n    \"Calle\": \"Calz Mexico Tacuba\",\n    \"NumExt\": \"324\",\n    \"NumInt\": \"1\",\n    \"Sexo\": \"\", // ???\n    \"Estado\": \"Ciudad de Mexico\",\n    \"Ciudad\": \"Miguel Hidalgo\",\n    \"Colonia\": \"Argentina Antigua\",\n    \"Cp\": \"11270\",\n    \"Operaciones\": [\n        {\n            \"TipoOper\": \"M\",\n            \"CveOper\": \"ELANT-2\",\n            \"Descr\": \"MTTO 20, 000KM\",\n            \"Tiempo\": \"192\",\n            \"Precio\": \"1393\"\n        },\n        {\n            \"TipoOper\": \"O\",\n            \"CveOper\": \"04LIMP01\",\n            \"Descr\": \"CAMBIO DE BALATAS\",\n            \"Tiempo\": \"150\",\n            \"Precio\": \"350\"\n        },\n        {\n            \"TipoOper\": \"O\",\n            \"CveOper\": \"43622R00\",\n            \"Descr\": \"CAMBIO SENSOR DE VELOCIDAD\",\n            \"Tiempo\": \"100\",\n            \"Precio\": \"400\"\n        }\n    ]\n}"
        },
        "header": [
          {
            "key": "organizationId",
            "type": "text",
            "value": "{{organizationId_dev}}"
          }
        ],
        "method": "POST",
        "url": {
          "host": ["grupopiomikron", "ddns", "net"],
          "path": ["api", "Hyundai", "InsertOS"],
          "port": "8090",
          "protocol": "http",
          "raw": "http://grupopiomikron.ddns.net:8090/api/Hyundai/InsertOS"
        }
      },
      "response": []
    },
    {
      "name": "Create Operations to Order",
      "request": {
        "body": {
          "mode": "raw",
          "options": {
            "raw": {
              "language": "json"
            }
          },
          "raw": "{\n    \"customerId\": \"\",\n    \"orderNumber\": \"O49369\",\n    \"date\": \"2025-02-20\",\n    \"orderNotes\": null,\n    \"firstName\": \"Victor\",\n    \"lastName\": \"Gutierrez\",\n    \"email\": \"vicgfoster@gmail.com\",\n    \"vin\": \"4A3AK44T37E013720\",\n    \"brand\": \"Hyundai\",\n    \"model\": \"Elantra\",\n    \"year\": 2025,\n    \"licensePlates\": \"CAP394\",\n    \"businessName\": \"\",\n    \"identificationDocumentType\": null,\n    \"identificationDocumentNumber\": null,\n    \"paymentMethod\": \"NA\",\n    \"phase\": \"noPhase\",\n    \"tower\": \"16 azul\",\n    \"orderType\": \"PUBLICA\",\n    \"userInCharge\": \"Antonio Garcia\",\n    \"assignedUser\": null,\n    \"estimateNotes\": null,\n    \"discounts\": 0,\n    \"subtotal\": 0,\n    \"taxes\": 0,\n    \"approved\": 0,\n    \"declined\": 0,\n    \"pending\": 0,\n    \"totalEstimated\": 0,\n    \"inspectionLink\": \"\",\n    \"items\": [\n        {\n            \"priority\": \"Urgent\",\n            \"itemName\": \"S MANTENIMIENTO   20000KM\",\n            \"itemId\": \"M20\",\n            \"quantity\": 0,\n            \"unitPrice\": 0,\n            \"availability\": 0,\n            \"unitCost\": 0,\n            \"hours\": 1,\n            \"hourPrice\": 0,\n            \"subtotal\": 0,\n            \"status\": \"Pending\",\n            \"warehouseId\": \"Warehouse 1\"\n        }\n    ],\n    \"invoiceParameters\": {},\n    \"kilometers\": 2500\n}"
        },
        "header": [
          {
            "key": "organizationId",
            "type": "text",
            "value": "{{organizationId_dev}}"
          }
        ],
        "method": "POST",
        "url": {
          "host": ["{{base_uri_dev}}"],
          "path": ["api", "quotes"],
          "raw": "{{base_uri_dev}}/api/quotes"
        }
      },
      "response": []
    },
    {
      "event": [
        {
          "listen": "test",
          "script": {
            "exec": [
              "// Extrae el token de la respuesta JSON ",
              "const response = pm.response.json();",
              "const token = response.token;",
              "",
              "// Almacena el token en una variable de entorno",
              "pm.environment.set(\"bearerToken\", token);",
              ""
            ],
            "packages": {},
            "type": "text/javascript"
          }
        }
      ],
      "name": "Get Token",
      "request": {
        "body": {
          "mode": "raw",
          "options": {
            "raw": {
              "language": "json"
            }
          },
          "raw": "{\n    \"Username\":\"pruebatoken@hyundai.com\",\n    \"Password\":\"hYundai2025\"\n}"
        },
        "header": [],
        "method": "POST",
        "url": {
          "host": ["grupopiomikron", "ddns", "net"],
          "path": ["api", "Hyundai", "Token"],
          "port": "8090",
          "protocol": "http",
          "raw": "http://grupopiomikron.ddns.net:8090/api/Hyundai/Token"
        }
      },
      "response": []
    },
    {
      "name": "GET Type Operation",
      "request": {
        "auth": {
          "bearer": [
            {
              "key": "token",
              "type": "string",
              "value": "{{bearerToken}}"
            }
          ],
          "type": "bearer"
        },
        "header": [],
        "method": "POST",
        "url": {
          "host": ["grupopiomikron", "ddns", "net"],
          "path": ["api", "Hyundai", "ConsultaTP"],
          "port": "8090",
          "protocol": "http",
          "raw": "http://grupopiomikron.ddns.net:8090/api/Hyundai/ConsultaTP"
        }
      },
      "response": []
    },
    {
      "name": "Get Maintenence Cat",
      "request": {
        "auth": {
          "bearer": [
            {
              "key": "token",
              "type": "string",
              "value": "{{bearerToken}}"
            }
          ],
          "type": "bearer"
        },
        "body": {
          "mode": "raw",
          "options": {
            "raw": {
              "language": "json"
            }
          },
          "raw": "{\n    \"DealerId\":\"1\",\n    \"Descr\":\"20\"\n}"
        },
        "header": [],
        "method": "POST",
        "url": {
          "host": ["grupopiomikron", "ddns", "net"],
          "path": ["api", "Hyundai", "ConsultaMT"],
          "port": "8090",
          "protocol": "http",
          "raw": "http://grupopiomikron.ddns.net:8090/api/Hyundai/ConsultaMT"
        }
      },
      "response": []
    },
    {
      "name": "Get Operations By Order Type",
      "request": {
        "auth": {
          "bearer": [
            {
              "key": "token",
              "type": "string",
              "value": "{{bearerToken}}"
            }
          ],
          "type": "bearer"
        },
        "body": {
          "mode": "raw",
          "options": {
            "raw": {
              "language": "json"
            }
          },
          "raw": "{\n    \"DealerId\":\"1\",\n    \"TipoOrden\":\"PU\",\n    \"Descr\":\"FRENOS\"\n}"
        },
        "header": [],
        "method": "POST",
        "url": {
          "host": ["grupopiomikron", "ddns", "net"],
          "path": ["api", "Hyundai", "ConsultaOP"],
          "port": "8090",
          "protocol": "http",
          "raw": "http://grupopiomikron.ddns.net:8090/api/Hyundai/ConsultaOP"
        }
      },
      "response": []
    }
  ]
}
```
</details>
