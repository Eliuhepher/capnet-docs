---
sidebar_position: 3
---
# Actualizacion de CAPNET-APPS.

## Dentro de la carpeta de la aplicación. 
Con el entorno virtual activado (este comando "python -m venv venv" activa el entorno virtual)
## Para ejecutar la instalación de dependencias nuevamente y actualizarlas. 
Ejecutar "pip install -r requirements.txt"
## Reiniciar el servicio local.
Llamado "Capnet Apps XXXX XXXX" desde los servicios de Windows.
## Actualizacion de configuracion del repo global:
- *git stash:* Guardará momentáneamente los cambios que no están 
listos para ser confirmados. De esta manera, pudes volver al 
proyecto más tarde.
- *git pull:* Fusiona todos los cambios que se han hecho en el 
repositorio remoto con el directorio de trabajo local. 
- *git stash pop:* Se selecciona el último git stash y se muestra de nuevo. Sin embargo, si quieres volver a otro stash, puedes especificarlo "git stash pop stash@{1}"(el 1 tiene que estar entre llaves).
## Conglomerado 
|capnet-apps-xxxxxx-xxxxx| Versiones  |
|:----------------|----------------:|
| seguimientolite-xxxxxxx-xxxxxx | v1.0.25|
| seguimientolite-xxxxxxx-xxxxxx | v1.1.1|
| tracker-xxxxxxx-xxxxxx    |      v1.3.0 | 
| insight-xxxxxxx-xxxxxx   |       v1.19.0|

El proyecto maestro tiene como dependencias a las aplicaciones que lo contienen

Cada proyecto dentro de capnet apps tiene sus propias dependecias.

|capnet-apps-xxxxxx-xxxxx| Versiones  |
|:----------------|----------------:|
| seguimientolite-xxxxxxx-xxxxxx | v1.0.25|
| seguimientolite-xxxxxxx-xxxxxx | v1.1.1|
| tracker-xxxxxxx-xxxxxx    |      v1.3.0 | 
| insight-xxxxxxx-xxxxxx   |       v1.19.0|

## Se tienen dos tipos de cambios
# 1. Cambio en una versión de una dependencia del repo global
En este caso 
- Instalación de dependencias “pip install -r requirements.txt”
# 2. Cambio en algún elemento de la configuración del repo global
En este caso
- Actualización del repo global. “git stash”, “git pull”, “git stash pop”.
## Listar las dependencias del proyecto.
- Ejecutar "pip freeze > dependencias_actuales.txt" y se creacara un archivo de texto "dependencias_actuales.txt"
- Ejecutas "nano dependencias_actuales.txt" y veras una lista de dependencias actuales. 
## 
## 
## 