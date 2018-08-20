# Ejemplo de automatización con nightwatch.js

## Requisitos

Tener nodejs instalado lo podemos probar mediante:

```
node -v
``` 

Java instalado mínimo v7

```
java -version
```

## Instalación

Si lo necesitamos generamos un package.json de ejemplo mediante:

```
npm init -y
```

Instalamos nightwatch.js

```
npm install nightwatch
```

### Dependencias

Necesitamos tener selenium lo podemos obtener de [aquí](http://selenium-release.storage.googleapis.com/index.html). Buscamos una versión y nos bajamos el fichero `selenium-server-standalone-{VERSION}.jar`

Como indican en el site de nigthwatch.org es buena práctica tener el .jar en un subdirectio bin.

Para este ejemplo usaremos [está versión](http://selenium-release.storage.googleapis.com/3.9/selenium-server-standalone-3.9.1.jar)

Generamos un fichero de configuración para el nightwatch.json como el que tenemos en el propio tutorial:

[http://nightwatchjs.org/gettingstarted/#settings-file](http://nightwatchjs.org/gettingstarted/#settings-file)

Modificamos de la sección de selenium el `start_process: true` y el `server_path` con la ruta que tengamos el selenium server que hemos descargado.

En mi caso será poner un `server_path: bin/selenium-server-standalone-3.9.1.jar`

Descargamos también el chromedriver hay otros drivers pero de momento nos centraremos en chrome. Dependiendo del sistema operativo que lanzará los tests elegimos la descarga.

https://chromedriver.storage.googleapis.com/index.html?path=2.41/

Copiamos el binario en bin/ del proyecto

y hacemos referencia en el fichero nightwatch.json





