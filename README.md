# Práctica IV - Formulario 🚀

## Autores ✒️

* **Paula Ruiz Jiménez** - (https://github.com/pruizj)
* **Álvaro Calderón Izquierdo** - (https://github.com/AlvaroCalderon10)

## Pre-requisitos 📋
* Formulario para intorducir los datos de usuario.Estos deben guardarse, a través de la API en una base de datos MongoDB.
* Listado de los usuarios presentes en la DDBB. Los usuarios deben poderse borrar y editar a través de la web.

## Ejecución ⚙️
Para runear tanto el back como el front dentro de google Chrome, en el mismo localHost, de distinto puerto. Necesitas instalar la siguiente extensión.

[Allow CORS on chrome](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
* Se necesita cambiar la configuración una vez instalado en [Open Options Page]:
 -> Access-Control-Allow-Credencials [Activado]
 -> Access-Control-Allow-Origin [*]
 -> Add (*) as the origin for all redirected URL´s

### Back (Puerto 3001)
Antes de runear la web, necesitas runear la API.
Para runearla hay que situarse en la carpeta ./API y runear los siguientes comandos:
```
npm install
```
* Para instalar las dependencias
```
npm run start
```
* Para Runear la API
* Con el mensaje de MongoDB Connected nos informará que todo ha sido runeado con éxito

### Front (Puerto 3000)

Este proyecto ha sido creado con [Create React App](https://github.com/facebook/create-react-app).

Para Runear la web hay que situarse en la carpeta ./Web
```
npm install
```
* Para instalar las dependencias
```
npm start
```
* Para Runear la WEB
* Abre [http://localhost:3000](http://localhost:3000) para visualizarla en tu navegador.