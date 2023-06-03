+++
archetype = "<kind>"
title = "3. Gailoas chroot"
weight = 2
+++

Os usuarios, por defecto, poden acceder a todos os directorios nos cales teña permiso de lectura e acceso. Pero podemos limitar esa característica ao seu directorio persoal. Isto é o que se coñece como establecer unha gaiola chroot. Configúrase coa directiva:
```js
chroot_local_user=YES
```
## Gaiolas chroot so para certos usuarios

Se queremos que só certos usuarios teñan activado chroot, establecemos a directiva:
```js
chroot_list_enable=YES
chroot_list_file=/etc/vsftpd/users.list
```
E no ficheiro `/etc/vsftpd/users.list` teremos unha lista dos usuarios afectados por chroot.

Se a directiva `chroot_local_user` aparece no ficheiro e ten o valor `YES`, a lista conten os usuarios que non teñen activado chroot.

Se a directiva `chroot_local_user` non aparece no ficheiro ou ten o valor `NO`. a lista conten os usuarios que teñen activado chroot.

O ficheiro `/etc/vsftpd/users.list` non ten porque existir. De non existir deberíase crear aínda que sexa sen contido.