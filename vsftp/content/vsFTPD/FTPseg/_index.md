+++
archetype = "<kind>"
title = "5.FTP Seguro"
weight = 2
+++

FTP é inseguro, porque transmite a informacion si emcriptar. Afortunadamente, pódese empregar facendo que o servidor FTP empregue autenticación de OpenSSL, facendo que o nome de usuario, o seu contrasinal e tamén os datos transferidos vaian encriptados.

Para conseguir isto, o primeiro paso é crear o certificado SSL,

```vim
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/vsftpd.pem -out /etc/ssl/certs/vsftpd.pem
```
A continuación editamos o ficheiro de configuración de vsftp e introducimos as seguintes directivas :
```vim
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
