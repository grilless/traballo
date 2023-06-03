+++
archetype = "<kind>"
title = "6. Restriccións"
weight = 2
+++

No servidor vsftpd, podemos restrinxir o acceso por parte dos usuarios, coas seguintes directivas:

- Para restrinxir o número de clientes conectados de forma simultánea:
```js
max_clients=5
```
- Para limitar o número máximo de conexións que se poden realizar desde un mesmo enderezo IP. Hai que ter en conta que algunhas redes acceden a través dun servidor proxy ou porta de ligazón e debido a isto poderían quedar bloqueados innecesariamente algúns accesos:
```js
max_per_ip=4
```
- Para limitar o ancho de banda de descarga para os usuarios locais e o usuario anónimo (en bytes por segundo). Por defecto, o valor é 0, o cal significa que non hai límite:
```vim
local_max_rate=5120
anon_max_rate=4096
```
- Para establecer un tempo de espera para manter establecidas conexións inactivas.
```js
idle_session_timeout=600
```
- Para establecer un tempo de espera para manter establecidas conexións de datos inactivas.
```js
data_connection_timeout=120
```
- Para activar/desactivar conexións pasivas:
```js
pasv_enable=YES
```
