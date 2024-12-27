## Pasos 
- Abrir VS Code
- File
- open Folder
- buscas la carpeta en inetpub/wwwroot y seleccionas capnet-video-compress
- Abres una nueva terminal en el VsCode 
- Activas el entorno Virtual 
```Python
.\venv\Scripts\activate
```
- ejecutas el seguimiento comando 
```Python
cd src/capnet_video_compress
```
- abres el comandos.txt y aparecera lo siguiente 
## Para video
```Python
python main.py --mode video --path C:\inetpub\wwwroot\capnet-apps-nissan-colombia-taller3norte\media --min 99 --max 170 --target-size 50
```
```Python
python main.py: Indica que se va a ejecutar el archivo main.py usando el intérprete de Python.

--mode video: Define el modo de operación del script como video. 

--path C:\inetpub\wwwroot\capnet-apps-nissan-colombia-taller3norte\media : Especifica la ruta donde se encuentran los archivos que el script procesará. 

--min 99: Define un valor mínimo 

--max 170: Define un valor máximo 

--target-size 50: Establece un tamaño objetivo de 50
```
## Para imágenes
```Python
python main.py --mode imagen --path C:\respaldos\inetpub-wwwroot-panama-fordcocdelmar-capnet_sdis-mc-adjuntos --min 1 --max 19
```
```Python
python main.py: Indica que se ejecutará el script main.py con Python.

--mode imagen: Configura el modo de operación del script como imagen, lo que indica que el script procesará imágenes en lugar de videos u otros formatos.

--path C:\respaldos\inetpub-wwwroot-panama-fordcocdelmar-capnet_sdis-mc-adjuntos: Especifica la ubicación en el sistema de archivos donde están almacenados los archivos que el script procesará. 

--min 1: Establece un valor mínimo.

--max 19: Define un valor máximo.
```