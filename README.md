# Generador de tablas para Node.JS

## Descripción

Esto es la documentacion de el Generador de tablas para Node.JS, es una pequeña aplicación de consola, capaz de crear tablas de multiplicar que pueden mostarse en la pantalla de la consola o almacenarse en un archivo.

Para escribir este programa he seguido el tutorial de Fernando Herrera, en el cual hemos hecho uso de **promesas**, lo cual hace que nuestro código se vea mas limpio, y tambien hemos usado el estandar de EcmaScript 7 **EC2017**, de forma que nuestro código se ve bastante moderno y se entiende a simple vista tal y como podemos ver en el fragmento de abajo

~~~

let crearTabla = (base, limite) =>{

    multiplicar.crearTabla(base, limite)
        .then(res => console.log(res)) //Si todo va bien
        .catch(err => console.error('Error: ' + err)) //Si salta una excepción

}

~~~

Finalmente voy a subir este archivo a github con las siguientes instrucciones:

~~~

git add README.md

git commit -m "Subida de la documentación al repositorio"

git push origin master

~~~