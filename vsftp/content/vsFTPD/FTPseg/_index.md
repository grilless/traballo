+++
archetype = "<kind>"
title = "5.FTP Seguro"
weight = 2
+++

FTP é inseguro, porque transmite a informacion si emcriptar. Afortunadamente, pódese empregar facendo que o servidor FTP empregue autenticación de OpenSSL, facendo que o nome de usuario, o seu contrasinal e tamén os datos transferidos vaian encriptados.

Para conseguir isto, o primeiro paso é crear o certificado SSL,

```js
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/vsftpd.pem -out /etc/ssl/certs/vsftpd.pem
```
A continuación editamos o ficheiro de configuración de vsftp e introducimos as seguintes directivas :
```js
ssl_enable=YES
allow_anon_ssl=NO
force_local_data_ssl=NO
force_local_logins_ssl=NO
ssl_tlsv1=YES
ssl_sslv2=NO
ssl_sslv3=NO
rsa_cert_file=/etc/ssl/certs/vsftpd.pem
rsa_private_key_file=/etc/ssl/private/vsftpd.pem
```
Se queremos forzar a que os usuarios locais só se poidan conectar empregando SSL, cambiamos as seguintes directivas.
```js
force_local_data_ssl=YES
force_local_logins_ssl=YES
```
No caso de erro na conexión SSL desde Filezilla, engadir o seguinte parámetro:
```js
ssl_ciphers=AES128-SHA
```
Cando se realice a conexión, pode verse o algoritmo de encriptación empregado:
```js
220 Welcome to blah FTP service.
Name (192.168.56.253:bruno): adminlocal
234 Proceed with negotiation.
[SSL Cipher DES-CBC3-SHA]
331 Please specify the password.
Password:
```
Todo o que se transmita por esta canle, queda encriptado.   