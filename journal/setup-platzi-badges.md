Recuerda detenerte y reflexionar, esforzarte en comprender lo que estás haciendo, pensar por ti mismo y llegar a la conclusión a la que llegó Leonidas.

¿Qué aprendí, recorde, profundice durante esta clase?	


Esta clase fue basicamente de limpieza para dejar nuestra React App de Platzi badges lista para trabajar por nosotros.

Recuerda que create-react-app te preconfigura Webpack, la misión de este curso es que lo hagamos nosotros.

¿Qué hicimos? 

Eliminar las dependencias que no vamos a usar en package.json para dejarlo de la siguiente manera:

```
{
  "name": "platzi-badges",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "server": "json-server --port 3001 --watch server/db.json",
    "seed": "node server/seed.js"
  },
  "dependencies": {

    "boostrap": "^2.0.0",
    "md5": "^2.2.1",
    "react": "16.8.3",
    "react-dom": "16.8.3",
    "react-router-dom": "^5.0.1"
  },
  "devDependencies": {
    "faker": "^4.1.0",
    "json-server": "^0.14.2"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
```