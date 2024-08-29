---
sidebar_position: 1
---
# INSTALACION DE CAPITAL-APPS
##  INSTALACIÓN DE DEPENDENCIAS					
**Notas: Tome en cuenta las consideraciones a tomar para la instalación de cada dependencia**					
## Microsoft Build Tools	
En la instalación marcar los siguientes componentes Windows 10 SDK, SDK de Windows Universal CRT, MSVC v140 - VS2015 C++ Build Tools (v14.00)
## Microsoft ODBC 17	
Ejecutar instalador como administrador. En caso de existir un servidor de base de datos por separado, instalarlo en el de base de datos, no en el de aplicaciones.
## Python
Marcar casilla de "Agregar al Path" al momento de la instalación. Ejecutar instalador como administrador. Si ya hay una versión previa de Python, favor de informar a desarrollo para saber como proceder, verificar con el comando "python --version" desde CMD
## Redis	
Ejecutar instalador como administrador. No cambiar el puerto de instalación por defecto
## Nginx	
Descomprimir el archivo .zip y moverlo a la raiz (Disco C:). Cuidar dejar solo un nivel de anidación en la carpeta.
