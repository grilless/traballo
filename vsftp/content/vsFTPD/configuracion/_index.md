+++
archetype = "<kind>"
title = "2. Configuración"
weight = 2
+++

Os ficheiros que temos que editar para configurar o servidor son `/etc/vsftpd.conf` ou `/etc/vsftpd/vsftpd.conf.`
```vim
systemctl restart vsftpd
```
Por defecto, poden acceder ao servidor FTP todos os usuarios do sistema, en modo só lectura.

## 1.1. Mensaxe de benvida
Podemos establecer unha mensaxe de benvida para os usuarios que se conectan ao sistema:
```js
ftpd_banner=Benvido ao servidor FTP
```
Ou especificando un ficheiro de texto, onde se gardará a mensaxe a amosar como benvida (útil no caso de ocupar varias liñas):
```js
banner_file=/etc/vsftpd/welcome.banner
```
## 1.2. Habilitación de escritura
Por defecto, a escritura no sistema está deshabilitada. Para habilitala incluímos a seguinte directiva.
```js
write_enable=YES
```
Para os usuarios locais, esta directiva habilita tanto a subida de ficheiros, coma a creación de directorios e o renomeado.

## 1.3. Permisos dos ficheiros e directorios resultantes
O ``umask`` para os usuarios locais está establecido a 077. Podemos configuralo a outro valor coa directiva
```js
local_umask=022
```
Estes permisos sempre se van a restar, do valor que teña a directiva **file_open_mode** que por defecto ten o valor 0666 (sempre elimina os permisos de execución).