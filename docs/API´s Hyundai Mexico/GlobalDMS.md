# GlobalDMS

## APIs Surman.postman_collection.

<details>
<summary>Ver JSON: APIs Surman.postman_collection.json </summary>

```json
{
  "info": {
    "_postman_id": "57f8effb-43a3-49ac-b20e-e30dacaed3d5",
    "name": "APIs Surman",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "_exporter_id": "9987438",
    "_collection_link": "https://winter-robot-428891.postman.co/workspace/APIs-Capnet-Eliu-Hepher-G.~cf4f6726-022b-4f30-815e-c3b2c0de2a1f/collection/9987438-57f8effb-43a3-49ac-b20e-e30dacaed3d5?action=share&source=collection_link&creator=9987438"
  },
  "item": [
    {
      "name": "Get Order Types",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "organizationId",
            "value": "{{organizationId_prd}}",
            "type": "text"
          },
          {
            "key": "organizationId",
            "value": "{{organizationId_dev}}",
            "type": "text"
          }
        ],
        "url": {
          "raw": "{{base_uri_dev}}/api/orderTypes",
          "host": ["{{base_uri_dev}}"],
          "path": ["api", "orderTypes"]
        }
      },
      "response": []
    },
    {
      "name": "Get Service Advisors",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "organizationId",
            "value": "57-1",
            "type": "text"
          }
        ],
        "url": {
          "raw": "{{base_uri_dev}}/api/advisors",
          "host": ["{{base_uri_dev}}"],
          "path": ["api", "advisors"]
        }
      },
      "response": []
    },
    {
      "name": "Create Order",
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
            "type": "text/javascript",
            "packages": {}
          }
        }
      ],
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "organizationId",
            "value": "{{organizationId_dev}}",
            "type": "text"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"vin\": \"{{vin}}\",\n    \"organizationId\": \"{{organizationId_dev}}\",\n    \"promisedDate\": \"2025-02-14T18:00:00.000Z\",\n    \"kilometers\": \"29155\",\n    \"orderType\": \"PU\",\n    \"cone\": \"55\",\n    \"serviceAdvisorId\": \"72\",\n    \"appointmentId\": \"\",\n    \"firstName\": \"Prueba\",\n    \"lastName\": \"Orden Capital\",\n    \"mainPhone\": \"5591665652\",\n    \"mobile\": \"5591665652\",\n    \"email\": \"eliu.hepher@gmail.com\",\n    \"address\": \"Lago Valencia 75 Argentina Antigua\",\n    \"licensePlate\": \"{{licensePlate}}\",\n    \"brand\": \"Hyundai\",\n    \"model\": \"{{model}}\",\n    \"year\": 2023,\n    \"work\": \"\",\n    \"color\": \"BLANCO\",\n    \"notes\": \"Orden Creada desde Capnet\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "{{base_uri_dev}}/api/orders",
          "host": ["{{base_uri_dev}}"],
          "path": ["api", "orders"]
        }
      },
      "response": []
    },
    {
      "name": "Create Order Copy",
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
            "type": "text/javascript",
            "packages": {}
          }
        }
      ],
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "organizationId",
            "value": "{{organizationId_dev}}",
            "type": "text"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"vin\": \"{{vin}}\",\n    \"organizationId\": \"{{organizationId_dev}}\",\n    \"promisedDate\": \"2025-02-14T18:00:00.000Z\",\n    \"kilometers\": \"29155\",\n    \"orderType\": \"PU\",\n    \"cone\": \"55\",\n    \"serviceAdvisorId\": \"72\",\n    \"appointmentId\": \"\",\n    \"firstName\": \"Prueba\",\n    \"lastName\": \"Orden Capital\",\n    \"mainPhone\": \"5591665652\",\n    \"mobile\": \"5591665652\",\n    \"email\": \"eliu.hepher@gmail.com\",\n    \"address\": \"Lago Valencia 75 Argentina Antigua\",\n    \"licensePlate\": \"{{licensePlate}}\",\n    \"brand\": \"Hyundai\",\n    \"model\": \"{{model}}\",\n    \"year\": 2023,\n    \"work\": \"\",\n    \"color\": \"BLANCO\",\n    \"notes\": \"Orden Creada desde Capnet\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "{{base_uri_dev}}/api/orders",
          "host": ["{{base_uri_dev}}"],
          "path": ["api", "orders"]
        }
      },
      "response": []
    },
    {
      "name": "Get Inventory Items",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "organizationId",
            "value": "{{organizationId}}",
            "type": "text"
          }
        ],
        "url": {
          "raw": "{{base_uri_dev}}/api/inventoryItems?keyword=MTO",
          "host": ["{{base_uri_dev}}"],
          "path": ["api", "inventoryItems"],
          "query": [
            {
              "key": "keyword",
              "value": "MTO"
            }
          ]
        }
      },
      "response": []
    },
    {
      "name": "Get Orders",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "organizationId",
            "value": "57-1",
            "type": "text"
          }
        ],
        "url": {
          "raw": "{{base_uri_dev}}/api/orders?dateFrom=2025-02-11&dateTo=2025-02-14",
          "host": ["{{base_uri_dev}}"],
          "path": ["api", "orders"],
          "query": [
            {
              "key": "dateFrom",
              "value": "2025-02-11"
            },
            {
              "key": "dateTo",
              "value": "2025-02-14"
            }
          ]
        }
      },
      "response": []
    },
    {
      "name": "Get Orders Polanco",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "organizationId",
            "value": "57-1",
            "type": "text"
          }
        ],
        "url": {
          "raw": "{{base_uri_dev}}/api/orders?dateFrom=2025-02-11&dateTo=2025-02-14",
          "host": ["{{base_uri_dev}}"],
          "path": ["api", "orders"],
          "query": [
            {
              "key": "dateFrom",
              "value": "2025-02-11"
            },
            {
              "key": "dateTo",
              "value": "2025-02-14"
            }
          ]
        }
      },
      "response": []
    },
    {
      "name": "Create Operations to Order",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "organizationId",
            "value": "{{organizationId_dev}}",
            "type": "text"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"customerId\": \"\",\n    \"orderNumber\": \"O49369\",\n    \"date\": \"2025-02-20\",\n    \"orderNotes\": null,\n    \"firstName\": \"Victor\",\n    \"lastName\": \"Gutierrez\",\n    \"email\": \"vicgfoster@gmail.com\",\n    \"vin\": \"4A3AK44T37E013720\",\n    \"brand\": \"Hyundai\",\n    \"model\": \"Elantra\",\n    \"year\": 2025,\n    \"licensePlates\": \"CAP394\",\n    \"businessName\": \"\",\n    \"identificationDocumentType\": null,\n    \"identificationDocumentNumber\": null,\n    \"paymentMethod\": \"NA\",\n    \"phase\": \"noPhase\",\n    \"tower\": \"16 azul\",\n    \"orderType\": \"PUBLICA\",\n    \"userInCharge\": \"Antonio Garcia\",\n    \"assignedUser\": null,\n    \"estimateNotes\": null,\n    \"discounts\": 0,\n    \"subtotal\": 0,\n    \"taxes\": 0,\n    \"approved\": 0,\n    \"declined\": 0,\n    \"pending\": 0,\n    \"totalEstimated\": 0,\n    \"inspectionLink\": \"\",\n    \"items\": [\n        {\n            \"priority\": \"Urgent\",\n            \"itemName\": \"S MANTENIMIENTO   20000KM\",\n            \"itemId\": \"M20\",\n            \"quantity\": 0,\n            \"unitPrice\": 0,\n            \"availability\": 0,\n            \"unitCost\": 0,\n            \"hours\": 1,\n            \"hourPrice\": 0,\n            \"subtotal\": 0,\n            \"status\": \"Pending\",\n            \"warehouseId\": \"Warehouse 1\"\n        }\n    ],\n    \"invoiceParameters\": {},\n    \"kilometers\": 2500\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "{{base_uri_dev}}/api/quotes",
          "host": ["{{base_uri_dev}}"],
          "path": ["api", "quotes"]
        }
      },
      "response": []
    },
    {
      "name": "Create Appointment",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "organizationId",
            "value": "57-1",
            "type": "text"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"appointment_time\": \"07:45:00\",\n    \"customer\": \"Eglenelid\",\n    \"date\": \"2025-03-04\",\n    \"email\": \"victor.gutierrez@capnet.com.mx\",\n    \"model\": \"Elantra 2015-2016\",\n    \"number_plates\": \"NXM1556\",\n    \"phone\": \"5512345678\",\n    \"service_advisor_id\": \"418\",\n    \"service_advisor_name\": \"HERNANDEZ GALLEGOS MANUEL DE JESUS\",\n    \"dealer_name\": \"Hyundai Polanco\",\n    \"service\": \"10,000 km o 6 meses.\",\n    \"time\": 60,\n    \"vin\": \"11111111111111111\",\n    \"dealer_id\": \"B20ABMC005\",\n    \"dms_id\": 1,\n    \"dms_type\": \"global\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://201.163.119.221:8186/InsertaCitaServicio.aspx",
          "protocol": "http",
          "host": ["201", "163", "119", "221"],
          "port": "8186",
          "path": ["InsertaCitaServicio.aspx"]
        }
      },
      "response": []
    }
  ]
}
```

</details>

## APIs GlobalDMS-Surman.postman_environment.

<details>
<summary> Ver JSON: APIs GlobalDMS-Surman.postman_environment.json</summary>

```json
{
  "id": "42da4275-ddf2-4504-99d4-8c0ec38422fc",
  "name": "APIs GlobalDMS-Surman",
  "values": [
    {
      "key": "base_uri_dev",
      "value": "http://201.163.119.219:9193",
      "type": "default",
      "enabled": true
    },
    {
      "key": "organizationId_dev",
      "value": "57-1",
      "type": "default",
      "enabled": true
    },
    {
      "key": "organizationId_prd",
      "value": "43-1",
      "type": "default",
      "enabled": true
    },
    {
      "key": "vin",
      "value": "",
      "type": "any",
      "enabled": true
    },
    {
      "key": "licensePlate",
      "value": "",
      "type": "any",
      "enabled": true
    },
    {
      "key": "model",
      "value": "",
      "type": "any",
      "enabled": true
    },
    {
      "key": "color",
      "value": "",
      "type": "any",
      "enabled": true
    },
    {
      "key": "bearerToken",
      "value": "",
      "type": "any",
      "enabled": true
    }
  ],
  "_postman_variable_scope": "environment",
  "_postman_exported_at": "2025-04-16T15:56:48.440Z",
  "_postman_exported_using": "Postman/11.36.2"
}
```

 </details>
