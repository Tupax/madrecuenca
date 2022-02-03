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
- [ ] Cron 


Si no funciona cambiar el ejecutable de node en anacron por este:
/usr/bin/node


# Problemas

1. El script no funciona en cron ni en anacron. Si funciona correctamente si se ejecuta por cli. Creo que es un tema de async y/o tiempos
1.1 Capaz es el publicar?

Ahora el el archivo update.js hace log en /tmp/madrecuenca.log y en ~/Smallpotion/Webflow/madrecuenca/log/historial



```bash
#Commandos utiles para debuggear
cat /var/log/syslog

```



Lo solucione con estas dos cosas claves.
Usar la isntancia de node "larga" de usuario y poniendo full path al archivo log-cli.
- creo que tube problema porque uno de los archivos que estaba usando como prueba se llamaba script.sh y eso pudo generar probrlemas en alguna forma. 