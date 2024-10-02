---
sidebar_position: 4
---
## Video MP4 a través de Nginx
```nginx
  mp4;
    mp4_buffer_size       32m;
    mp4_max_buffer_size   50m;
    limit_rate 10m;
    limit_rate_after  50M;
    gzip on;
    gzip_types video/mp4;
    gzip_proxied any;
```
> ***mp4;*** Activa el módulo mp4 de Nginx, lo cual permite la entrega progresiva de archivos MP4, permitiendo que los usuarios puedan reproducir videos sin necesidad de descargarlos completamente.

> ***mp4_buffer_size 32m;*** Define el tamaño del búfer utilizado para leer los datos de los archivos MP4. Un tamaño mayor permite cargar porciones más grandes del video de una sola vez.

> ***mp4_max_buffer_size 50m;*** Establece el tamaño máximo del búfer para la entrega de archivos MP4.

> ***limit_rate 10m;*** Limita la velocidad máxima de transferencia a 10 MB por segundo. Esto puede ser útil para evitar que un solo usuario consuma demasiado ancho de banda.

> ***limit_rate_after 50M;*** Aplica el límite de velocidad (definido por limit_rate) solo después de que el usuario haya descargado 50 MB del archivo. Esto permite una descarga más rápida inicial antes de aplicar el límite.

> ***gzip on;*** Activa la compresión gzip para reducir el tamaño de los archivos servidos.

> ***gzip_types video/mp4;*** Especifica que el tipo de archivo video/mp4 debe ser comprimido utilizando gzip. Sin embargo, ten en cuenta que los archivos de video ya están muy comprimidos, por lo que la compresión adicional podría no ser muy efectiva y en algunos casos podría generar sobrecarga en el servidor sin muchos beneficios.

> ***gzip_proxied any;*** Permite la compresión gzip cuando Nginx está actuando como proxy inverso, independientemente de las cabeceras enviadas por el cliente.

Esta configuración ayuda a que los videos MP4 se sirvan de manera más eficiente y rápida a los usuarios por varias razones:

1. Carga progresiva del video (mp4): Permite que los usuarios comiencen a ver el video antes de que esté completamente descargado, lo que mejora la experiencia de reproducción.

2. Control del ancho de banda (limit_rate y limit_rate_after): Evita que los usuarios consuman mucho ancho de banda, lo que protege los recursos del servidor y evita la sobrecarga.

3. Búfer optimizado (mp4_buffer_size y mp4_max_buffer_size): Configurar estos valores de manera adecuada permite que el servidor entregue partes más grandes del video, lo que reduce las interrupciones durante la reproducción.

4. Compresión con gzip: Aunque no es muy efectiva para archivos de video (ya que están comprimidos), la opción está ahí si deseas reducir otros tipos de contenido que sirvas junto con el video.

Todo esto en conjunto facilita que el contenido multimedia se entregue de forma más rápida y eficiente, reduciendo tiempos de carga y optimizando el uso de los recursos del servidor.
