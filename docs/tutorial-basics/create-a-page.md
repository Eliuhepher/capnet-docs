---
sidebar_position: 2
---
# Instalacion de CAPNET-APPS.
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
## Moverse a la carpeta recién creada.
	Ejecutar "cd capnet_apps_marca_sucursal"
## Crear entorno virtual
	Ejecutar "python -m venv venv"
## Activar el entorno virtual	
Ejecutar ".\venv\scripts\activate" hasta que al inicio de la ubicación actual aparezca "(venv)"
## Actualizar gestor de bibliotecas PIP 	
Ejecutar "pip install --upgrade pip"
## Instalar las bibliotecas necesarias para el funcionamiento del proyecto	
Observar que en la línea de comandos se encuentre entre paréntesis la palabra "(venv)". Si es así proceder a ejecutar el comando "pip install -r requirements.txt"
## Crear base de datos en SQL Server 	
Crear la base de datos de acuerdo a los estándares de nomeclatura.
## ESTANDAR DE NOMENCLATURA.

|  Elemento | Estándar de nomenclatura |	Ejemplo |	Comentarios |
|:----------|:-------:|--------:|--------:|
|Carpeta contenedora del proyecto	| Uso de Guión Alto|	capnet-apps-marca-sucursal |Clonar la carpeta en la ubicación típica "C:\inetpub\wwwroot\" , si por ejemplo llega a existir una sucursal con mas de una palabra, por ejemplo "Mazda Jorge Cortés" sería capnet-apps-mazda-jorge-cortes|
|Base de datos|	Uso de Guión Alto	| capnet-apps-marca-sucursal  | N/A |
|Servicio de Windows principal|	Tipo Nombre Propio|	Capnet Apps Marca Sucursal|	No usar guiones bajos ni altos para nombrar el servicio  |
|Servicio de Windows para NGINX|Tipo Nombre Propio|	Nginx |N/A|

## Llenar todo el archivo "settings.py" 	
El archivo se encuentra dentro de la carpeta "capnet_apps_marca_sucursal", llenar todas las propiedades necesarias según el documento anexo "Diccionario Archivo de Configuración"
## Crear migraciones	
Ejecutar "python manage.py makemigrations"
## Aplicar migraciones	
Ejecutar "python manage.py migrate"
## Generar los archivos estáticos
Ejecutar "python manage.py collectstatic"
## Prueba de instalación exitosa	
Ejecutar "python manage.py runserver localhost:puerto"
## INSTALACIÓN Y CONFIGURACIÓN DE SERVICIOS					
**Nota: Ejecutar la consola de comandos con permisos de administrador**					
## Modificación de archivo server_service.bat	
Tener identificada la dirección IP local del servidor. El puerto indicado en este archivo debe ser típicamente 1000 puertos menos que el puerto que se haya solicitado para exponer al público.
## Modificación de archivo de configuración de Nginx
Tener a la mano la dirección IP del archivo anterior. Se encontrará un ejemplo en la raiz del repositorio, el cual solo hay que modificar y mover a la ubicación del archivo de configuración de Nginx que de acuerdo con estos pasos debe localizarse en "C:\nginx-1.xx.x\conf\nginx.conf "
## Moverse nuevamente a la carpeta raiz del proyecto donde se encuentre el archivo nssm.exe	
Ejecutar "cd C:\inetpub\wwwroot\capnet_apps_marca_sucursal"
## Instalación de servicio de Nginx	
Ejecutar " .\nssm install "Nginx" "C:\nginx-1.xx.x\nginx.exe" ". Revisar los estándares de nomenclatura
## Instalación de servicio de la aplicación	
Ejecutar ".\nssm install "Capnet Apps" "C:\inetpub\wwwroot\capnet_apps\server_service.bat" ". Revisar los estándares de nomenclatura
## Modificación del link de tableros mini	
Modificar el link de tableros mini a uno con la siguiente estructura: http://dominio.com:5000/tecnico/id_tecnico/no_orden
##
##
##					