# Madre Cuenca

## Requirements

* Node.js 4+
* NPM / YARN
* Webpack / Browserify (optional)

## Installation

Install the package via NPM or YARN:

```shell
$ npm install --save webflow-api

$ yarn add webflow-api
```

## Links

[Docs Airetable-MadreCuenca](https://airtable.com/appwF7020jRFGCAly/api/docs#javascript/introduction)
[SDK Airetable](https://github.com/Airtable/airtable.js)

[Docs Webflow](https://developers.webflow.com/)
[SDK Webflow-API](https://github.com/webflow/js-webflow-api/issues)


## Notas para recordar

### Airtable
La solucion cuenta con 3 vistas.
Suscripcion -> Que solo va a tener CC activas.
Nuevo CC x8 -> De crear incorrectamente una card, y querer volver a traer la isntancia para esta table, hay que tener presente de colocar correctamente la cedula por default {20220} y los cuencos en {8}
 Nuevo CC x8 -> Lo mismo que la anterior seteando cuencos {16}


### Weblfow




# TODO

- [x] Setup Webflow API
- [x] Setup Airtable API
- [x] Filter Airtable CC by the last modified on TODAY()
- [x] Merge data
- [x] Host node     app
- [x] Cron 


Si no funciona cambiar el ejecutable de node en anacron por este:
/usr/bin/node


# Problemas

1. El script no funciona en cron ni en anacron. Si funciona correctamente si se ejecuta por cli. Creo que es un tema de async y/o tiempos
1.1 Capaz es el publicar?

Ahora el el archivo update.js hace log en /tmp/madrecuenca.log y en ~/Smallpotion/Webflow/madrecuenca/log/historial



```bash
#Commandos utiles para debuggear
cat /var/log/syslog


# set el cron
crontab -e edit
crontab -l list

# log
cat /tmp/logcli
cat /tmp/outputscript.log

# run
./scriptTest.sh
```


Lo solucione con estas dos cosas claves.
Usar la isntancia de node "larga" de usuario y poniendo full path al archivo log-cli.
- creo que tube problema porque uno de los archivos que estaba usando como prueba se llamaba script.sh y eso pudo generar probrlemas en alguna forma. 


05/07/22
## Fix descuenco problem.
La variable descuenco cambio de nombre, en airtable se llamaba de una forma. En webflow de otra. Y ademas en el codigo estaba estructurada con una clase, que tambien le faltaba este atributo.
Multiples errores. Tambien faltaba arreglar en wf que aparesca dinamicamente haciendo uso del cms.
WF parece tener problema para cambiar el nombre de una variable. Por lo que es recomendable elimnarla y volver a crear otra nueva.
Tambien vi que la documentacion de webflow se actualizó! capaz tenga que verla mas detenidamente porque parece que cambio la forma tratar con la api. Por mas que la solucion como esta se mantiene funcionando sin problemas.
COmo ultimo paso me faltaria dejar la solucion en linea, ahora mismo sigue desde mi computadora, corriendo una vez cada 30 min.


26/08/22

Veo que en airtable regista una URL erronea. Con una xal inicio 
cunado esta es la real `www.madrecuenca.uy/cc/16039
16039
