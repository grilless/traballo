+++
archetype = "<kind>"
title = "1. Instalación"
weight = 2
+++

Para instalalo, en Linux, temos que instalar o paquete vsftpd

```vim
sudo apt update
sudo apt install vsftpd
```
En la carpeta /etc encontramos la configuración del servidor ftp en el fichero
/etc/vsftpd.conf voy a hacer una copia de seguridad para que no haya problemas
en caso de error

```vim
sudo cp /etc/vsftpd.conf /etc/vsftpd.conf.bak
```
En este punto ya tenemos el servidor instalado y lo podemos arrancar como
cualquier otro
A continuación vamos a crear una cuenta de usuario para utilizar como cliente y
acceder al servidor ftp.
```vim
sudo useradd -m nombre-usuario
sudo passwd nombre-usuario
```