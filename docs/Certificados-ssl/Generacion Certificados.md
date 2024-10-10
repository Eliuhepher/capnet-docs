## Generación de Certificados SSL con Certificados Intermedios.

## Índice
> 1. Introducción
> 2. Requisitos Previos
> 3. Generación de Certificados en ZeroSSL
> 4. Combinación de Certificados (crt y ca_bundle)
> 5. Configuración en Servidores Windows
> 6. Verificación del Certificado
> 7. Referencias

## Introducción
Este documento describe el proceso para generar certificados SSL utilizando la plataforma ZeroSSL y cómo combinar el certificado y el certificado intermedio (ca_bundle.crt) para asegurar que el certificado sea reconocido por navegadores y herramientas de desarrollo como Postman.
Apegarse siempre en la medida de lo posible a esta referencia, cualquier particularidad que no se cubra aquí, consultarla a eliu.hepher@capnet.com.mx.

## Requisitos Previos.

Previo a iniciar la instalación será necesario contar con lo siguiente.
Antes de iniciar, asegúrese de tener lo siguiente:

Acceso a la plataforma ZeroSSL. Ya que esta es la única certificadora oficial utilizada para generación de certificados en Capital Network.
Un dominio registrado (por ejemplo, capnet.ddns.net)
Acceso administrativo a un servidor Windows donde se instalará el certificado
Herramientas básicas de línea de comandos en Windows (cmd o PowerShell)

## Generación de Certificados en ZeroSSL
> 1. Ingrese a ZeroSSL y siga el proceso para generar un nuevo certificado SSL para su dominio (capnet.ddns.net).
> 2. Complete el proceso de validación del dominio mediante correo electrónico, DNS o HTTP.
> 3. Una vez validado el dominio, descargue los archivos generados: private.key, certificate.crt y ca_bundle.crt.

![imagen](/img/certificate.png)

## Combinación de Certificados (crt y ca_bundle)
Para asegurar que el certificado sea reconocido correctamente, se debe combinar el certificado (certificate.crt) con el certificado intermedio (ca_bundle.crt):

> 1. Abra el Bloc de Notas o cualquier editor de texto en Windows.
> 2. Abra el archivo "certificate.crt”.
> 3. Debajo de este contenido, pegue el contenido del archivo "ca_bundle.crt".
> 4. Guarde este archivo combinado con el mismo nombre “certificate.crt”. Este es el archivo que contiene el certificado completo y el certificado intermedio.
> 5. Configure en NGINX o IIS según sea el caso los nuevos archivos crt y key.
> 6. Reinicie el servidor para aplicar los cambios.

## Verificación del Certificado
1. Abra un navegador web y acceda a su dominio (por ejemplo, https://capnet.ddns.net).
2. Verifique que el navegador muestre el certificado como válido y que la conexión esté asegurada.
3. En Postman o cualquier herramienta de desarrollo, realice una petición al dominio para verificar que no sea necesario desactivar la verificación de certificados.
4. Utilice la herramienta [SSL Shopper](https://www.sslshopper.com/ssl-checker.html#hostname=capnet.ddns.net:4450) para verificar el estado del certificado.

![sslShopper](/img/sslShopper.png)
Se observa que el servidor y la cadena están validadas correctamente, así como señala que los certificados intermedios están instalados.


## Referencias
[¿Qué es un certificado intermedio?](https://www.godaddy.com/es/help/que-es-un-certificado-intermedio-868)





