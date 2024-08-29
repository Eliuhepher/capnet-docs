---
sidebar_position: 1
---
# INSTALACION DE CAPITAL-APPS.
##  INSTALACIÓN DE DEPENDENCIAS.					
**Notas: Tome en cuenta las consideraciones a tomar para la instalación de cada dependencia**					
## Microsoft Build Tools.	
En la instalación marcar los siguientes componentes Windows 10 SDK, SDK de Windows Universal CRT, MSVC v140 - VS2015 C++ Build Tools (v14.00)
## Microsoft ODBC 17.	
Ejecutar instalador como administrador. En caso de existir un servidor de base de datos por separado, instalarlo en el de base de datos, no en el de aplicaciones.
## Python.
Marcar casilla de "Agregar al Path" al momento de la instalación. Ejecutar instalador como administrador. Si ya hay una versión previa de Python, favor de informar a desarrollo para saber como proceder, verificar con el comando "python --version" desde CMD
## Redis.	
Ejecutar instalador como administrador. No cambiar el puerto de instalación por defecto
## Nginx.	
Descomprimir el archivo .zip y moverlo a la raiz (Disco C:). Cuidar dejar solo un nivel de anidación en la carpeta.
## Git.	
Ejecutar instalador como administrador.
## INSTALACIÓN DE APLICACIÓN EN EL SERVIDOR.					
**Notas: Tener una cuenta de Github activa. Respetar los estándares de nomenclatura que se señalan en el readme del repositorio. Todos los comandos a ejecutar se encuentran entre comillas para su mejor entendimiento.**
## Abrir terminal CMD.	
Con permisos de administrador
## Moverse a la carpeta donde se pretende instalar la aplicación.	
Ejecutar "cd inetpub\wwwroot"

## Clonar repositorio
ejecutar "git clone https://link-del-repositorio.git"
##
##
##
##
##
##
##					