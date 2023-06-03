+++
archetype = "<kind>"
title = "4. Acceso Anonimo"
weight = 2
+++

Habilitar o acceso a usuarios anónimos, que por defecto ven deshabilitado. Habilitámolo coa directiva:
```js
anonymous_enable=YES
```
O usuario anónimo, está engaiolado no directorio raíz (home) do usuario FTP do sistema. Tamén podemos facer que inicie sesión noutro directorio:
```js
anon_root=/ruta q desemos pa configuracion
```
O usuario `anonymous` ten os seguintes permisos:
- [x] lectura
- [ ] escritura
- [ ] creacion de directorios
- [x] ejecucion
 
 Para permitir a escritura ao usuario anónimo, temos que habilitar a directiva
```js
anon_upload_enable=YES
```
Se a maiores, queremos permitir que poida crear directorios, empregamos a directiva
```js
anon_mkdir_write_enable=YES
```
O usuario propietario dos ficheiros subidos será o usuario ftp. Tamén podemos facer que o usuario propietario dese arquivo sexa calquera outro dos presentes no sistema. Iso conséguese coa directiva:
```js
chown_uploads=YES
chown_username=whoever
```