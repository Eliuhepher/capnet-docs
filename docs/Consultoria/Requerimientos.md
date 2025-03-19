# Formato De Solicitud De Requerimientos
## Descripción de la la solicitud.

Evidenciar el estado de un vehículo al ingresar a un taller (proceso de inventario) a través de: 
- Un listado de puntos a revisar (checklist) 
- Marcar el estado de los puntos
- Toma de fotografías y vídeos. 
- Captura de comentarios.

📌 Objetivo general: Permitir al usuario realizar el proceso de recepción del vehículo a través de una tableta o celular.

📌 Objetivos particulares:
- Consultar la información generada en el proceso de recepción por el usuario. 
- Recabar firma de conformidad del cliente al final del proceso.
- Generar PDF de la orden de servicio.
- Compartir la información generada al cliente en el proceso de inventario por medio de WhatsApp y/o correo
- Generar una galería de las fotografías y vídeos tomados en la recepción 

# Requerimientos funcionales

## Pantalla de Inicio.

✅Listado de vehículos a recibir: 

Se necesita un listado de vehículos que se esperan a recibir en el taller de servicio.
- El listado se necesita alimentar de las citas agendadas en el tablero de programación.
- El listado debe mostrar los siguientes datos: placas, número de cita, hora cita, modelo vehículo, nombre - cliente y servicio capturado por vehículo esperado a recibir.   
- Deberá señalizar al usuario si el vehículo ya fué recibido.Se recomienda esto sea a través de una pill.
- Las pilsl podrán ser de 4 colores:
- Verde si la recepción se realizó dentro del intervalo (antes de la hora cita hasta 20 minutos después de la hora de cita) y marcar la hora de ingreso/ recepción.
- Amarillo si se  recibió después del intervalo descrito en el primer color 
- Rojo si no se ha recibido después del intervalo descrito en el primer color.
- Gris en caso de no ser recibido pero aún no ha rebasado el intervalo  descrito en el primer color. 
- Los casos de rojo y gris siempre deberán mostrar no show.                                     
- Cada vehículo tendrá 2 botones  con nombre de recibir y expediente. 
- Poseer un buscador que filtre por placas, modelo o cliente.
- El botón de recibir deberá enviar al usuario al checklist del proceso de inventario. (Pantalla de inventario y fotografías). Adicional deberá guardar la fecha y hora de ingreso del vehículo. Este guardado solo será la primera vez. 
- El botón de expedientes deberá redirigir a la pantalla de detalle de asesor de SSL  (URL proporcionada por el arquitecto de TI). 


Anexo hipervínculo a imagen: 
[Recepcion Vehiculo](https://drive.google.com/file/d/1AwHyMp4Nb90Sl65SRthtbQoDnXlqYVUX/view?usp=sharing)


✅Header o encabezado

- Poseer el nombre de la pantalla.
- Poseer una descripción de la pantalla
- Poder configurar una imagen (se usarán logos de empresas en general)
- Poseer un botón que permite añadir vehículos al listado y recibirlos en el sistema. Para este punto revisar con Arquitecto de TI la API a consumir.  
- El botón deberá solicitar los datos de modelo vehículo, nombre del cliente y apellidos del cliente.

<img src="/consultoria/2_Recepción_Vehículo.png" alt="Descripción" width="400" height="250" />

<img src="/consultoria/2_1_Recepción_Vehículo_1.png" alt="Descripción" width="380" height="250" />

## Pantalla de Inventario y fotografías

✅Checklist  Inventario:

- Anexar comentarios generales sobre el inventario del vehículo.
- Tener un listado de los puntos a revisar organizado por familias (los puntos a revisar se les conoce como items). 
- El usuario podrá marcar un estado a cada ítem. 
- Los estados disponibles son buen estado (verde), recomendado (amarillo), urgente (rojo) y no aplica (gris).
- El usuario podrá cargar comentarios relacionados a un ítem. 
- El usuario podrá cargar fotografías y videos relacionados a un ítem. El usuario podrá cargar varias fotos desde la aplicación. 
- El estado predefinido de los items deberá ser buen estado (verde). 
- Los ítems en estado recomendado y urgente deberán seguir un proceso de cotización de adicionales. En caso de tener dudas revisarlo con el Arquitecto de TI.
- En caso de salir del inventario y ya estar guardado el usuario podrá modificarlo y volver a guardar la información. Siempre no se haya firmado la orden y contrato.  
- Si el usuario ya ha creado la orden al momento de guardar el inventario podrá ir a firmar la orden y su contrato en la pantalla de Firmas de Órden y Contrato. 
- Si el usuario no ha creado la orden, el sistema le pedirá crear la orden de servicio. 

✅ Header o encabezado

- Poseer el nombre de la pantalla.
- Poseer una descripción de la pantalla
- Poder configurar una imagen (se usarán logos de empresas en general)
- Poseer dos botones nombrados Orden de Servicio e Inventario que permitan transicionar entre el front diseñado para crear órdenes de servicio y la pantalla de inventario y fotografías.

Link de ejemplo para pantalla de órdenes (esta no se debe desarrollar):
[Pantalla De Ordenes]( https://capnet.ddns.net:3027/seguimiento/pantalla_ordenes)

Link de pantalla inventario y fotografías:
[Pantalla Inventario y Fotografias]( https://drive.google.com/file/d/1L3htyN1OB0zAdNv3ljw54IoxKIeEcjaC/view?usp=drive_link)

## Pantalla de Firmas de Órden y Contrato

✅ Firma de Órden y Contrato

- Proporcionar dos elementos en la pantalla al usuario donde puedan firmar su órden de servicio y su contrato de adhesión.
- El usuario podrá borrar el trazo de la firma de así desearlo (siempre y cuando no se haya guardado).
- El usuario podrá ver el PDF de la orden que se ha generado. 
- El usuario finalizará su proceso al guardar las firmas. 

✅ Header o encabezado

- Poseer el nombre de la pantalla.
- Poseer una descripción de la pantalla
- Poder configurar una imagen (se usarán logos de empresas en general)

Link de la pantalla de inventario y fotografías: 
[Pantalla Inventario Y Fotografias](https://drive.google.com/file/d/11V-qBF0e0OOBxNJMdwY9_7MAe0ykqdZa/view?usp=drive_link)

## Pantalla de Historial 

✅Listado de vehículos:

- Se necesita un listado de vehículos que se esperan a recibir en el taller de servicio.
- El listado se necesita alimentar de las citas agendadas en el tablero de programación.
- El listado debe mostrar los siguientes datos: placas, número de cita, hora cita, modelo vehículo, nombre cliente y servicio capturado por vehículo que se recibió.                                   
- Cada vehículo tendrá 1 botón con nombre de  expediente. 
- El botón de expedientes deberá redirigir a la pantalla de detalle de asesor de SSL  (URL proporcionada por el arquitecto de TI). 

✅ Header o encabezado
- Poseer el nombre de la pantalla.
- Poseer una descripción de la pantalla
- Poder configurar una imagen (se usarán logos de empresas en general)
- Poseer un buscador por placa y/u orden
- Poder filtrar por intervalo de fechas.

Link de la pantalla:(https://drive.google.com/file/d/1YTUCZJvB6JLIsGOs6k1i5vEjBGGhc5WU/view?usp=sharing) 

## Dictamen Técnico: 19/Feb/2025

- Es viable la toma de fotos y videos
- Es viable recabar la firma del cliente
- Se deberá consultar con soporte la API de Tablero que se esté usando en las instalaciones de Hyundai México
- Se tendrá que guardar dentro de la tabla de actividades_tecnico para que se cumpla con el proceso de cotizacion de los items que sean señalados en amarillo y rojo.
- Se deberá crear un campo adicional que sea un indicativo de si el item dentro de actividades_tecnico proviene de una revision técnica o proviene de un item de recepción. 
- Para las firmas se deberá crear un campo dentro de la tabla de firmas para identificar firma de orden y contrato.
- Definir el listado de familias e items, dentro de las revisiones técnicas se tendrán que omitir las revisiones que sean de recepción, para todos los casos.


