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

## 2.1. Mensaxe de benvida
Podemos establecer unha mensaxe de benvida para os usuarios que se conectan ao sistema:
```js
ftpd_banner=Benvido ao servidor FTP
```
Ou especificando un ficheiro de texto, onde se gardará a mensaxe a amosar como benvida (útil no caso de ocupar varias liñas):
```js
banner_file=/etc/vsftpd/welcome.banner
```