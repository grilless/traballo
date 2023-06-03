+++
archetype = "<kind>"
title = "7. Logs"
weight = 2
+++

Por defecto vsftpd garda un log de todas as cargas/descargas no ficheiro `/var/log/vsftpd.log.` Se queremos cambiar esa configuración temos estas dúas directivas:
```js
xferlog_enable=YES
xferlog_std_format=YES
xferlog_file=/var/log/vsftpd.log
```