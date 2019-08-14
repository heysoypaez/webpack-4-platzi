
¿Cómo darle a Javascript moderno ?

En el frontend, el navegador somos dependientes a la actualizacion del navegador

En el backend, el servidor podemos elegir nosotros la version del servidor y de los lenguajes que estamos utilizando


Babel interpreta nuestro codigo moderno y lo transpila a una version no tan moderna


babel va a ser u


"@babel/core": "7.5.5",
"@babel/preset-env": "7.5.5",
"babel-loader": "8.0.6",


babel loader va a entender .js y se los pasa a babel con la dependencia babel-core

va a soportar las caracterisitcas de js que estan en la preconfiguracion en "@babel/preset-env"


preset significa preconfiguracion

--------



	npm install --save-dev --save-exact @babel/plugin-transform-runtime