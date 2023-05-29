var relearn_search_index = [
  {
    "content": " vsFTP ou (Very secure FTP) pode ser o servidor FTP máis seguro para o mundo Linux/Unix, en canto a seguridade, rendemento e escalabilidade.\nSoporta o uso de certificados dixitais SSL, sempre e cando o cliente FTP os soporte (empregar o cliente FTP-SSL en lugar de FTP). Unha das peculiaridades que permite, e o uso de gaiolas chroot para os usuarios.\nUnha gaiola chroot, establece un directorio determinado como directorio raíz. Desde ese directorio, non se poderá acceder a ningún de nivel superior, pero si a todos os descendentes.\nPodemos atopar a súa web oficial no seguinte enlace: https://security.appspot.com/vsftpd.html\n",
    "description": "",
    "tags": null,
    "title": "VsFTPD",
    "uri": "/vsftpd/"
  },
  {
    "content": "Para instalalo, en Linux, temos que instalar o paquete vsftpd\nsudo apt update sudo apt install vsftpd En la carpeta /etc encontramos la configuración del servidor ftp en el fichero /etc/vsftpd.conf voy a hacer una copia de seguridad para que no haya problemas en caso de error\nsudo cp /etc/vsftpd.conf /etc/vsftpd.conf.bak En este punto ya tenemos el servidor instalado y lo podemos arrancar como cualquier otro A continuación vamos a crear una cuenta de usuario para utilizar como cliente y acceder al servidor ftp.\nsudo useradd -m nombre-usuario sudo passwd nombre-usuario ",
    "description": "",
    "tags": null,
    "title": "1. Instalación",
    "uri": "/vsftpd/instalacion/"
  },
  {
    "content": "Os ficheiros que temos que editar para configurar o servidor son /etc/vsftpd.conf ou /etc/vsftpd/vsftpd.conf.\nsystemctl restart vsftpd Por defecto, poden acceder ao servidor FTP todos os usuarios do sistema, en modo só lectura.\n1.1. Mensaxe de benvida Podemos establecer unha mensaxe de benvida para os usuarios que se conectan ao sistema:\nftpd_banner=Benvido ao servidor FTP Ou especificando un ficheiro de texto, onde se gardará a mensaxe a amosar como benvida (útil no caso de ocupar varias liñas):\nbanner_file=/etc/vsftpd/welcome.banner 1.2. Habilitación de escritura Por defecto, a escritura no sistema está deshabilitada. Para habilitala incluímos a seguinte directiva.\nwrite_enable=YES Para os usuarios locais, esta directiva habilita tanto a subida de ficheiros, coma a creación de directorios e o renomeado.\n1.3. Permisos dos ficheiros e directorios resultantes O umask para os usuarios locais está establecido a 077. Podemos configuralo a outro valor coa directiva\nlocal_umask=022 Estes permisos sempre se van a restar, do valor que teña a directiva file_open_mode que por defecto ten o valor 0666 (sempre elimina os permisos de execución).\n",
    "description": "",
    "tags": null,
    "title": "2. Configuración",
    "uri": "/vsftpd/configuracion/"
  },
  {
    "content": "Lorem Ipsum.\n",
    "description": "",
    "tags": null,
    "title": "3. Gailoas chroot",
    "uri": "/vsftpd/gailoas/"
  },
  {
    "content": "Lorem Ipsum.\n",
    "description": "",
    "tags": null,
    "title": "4. Acceso Anonimo",
    "uri": "/vsftpd/anonimo/"
  },
  {
    "content": "Lorem Ipsum.\n",
    "description": "",
    "tags": null,
    "title": "5.FTP Seguro",
    "uri": "/vsftpd/ftpseg/"
  },
  {
    "content": "Lorem Ipsum.\n",
    "description": "",
    "tags": null,
    "title": "6. Restriccións",
    "uri": "/vsftpd/restriccions/"
  },
  {
    "content": "Lorem Ipsum.\n",
    "description": "",
    "tags": null,
    "title": "7. Logs",
    "uri": "/vsftpd/logs/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/"
  },
  {
    "content": "No día de hoxe vamos a explicar o que o servicio FTP\nQue é o FTP? O FTP é un protocolo de transferencia de archivos, actualmente é o modelo estándar. Sobre este protocolo fóronse facendo sucesivas actualizacións para mellorar a súa funcionalidade. Estas actualizacións reciben outro nomes pero sempre conservando o FTP Actualizacions marcaraemos sobre que actaulizacion famos a tratar no dia de hoxe\nvsFTPd SFTP TFTP ",
    "description": "",
    "tags": null,
    "title": "UD5: Sistemas de ficheros web",
    "uri": "/"
  }
]
