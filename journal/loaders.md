
_Webpack pretende usar javascript como la base de operaciones de tu App_

- Los loaders nos permiten transpilar css a js.
- Css loader es quien transpila mi css al js.
- Style loader es quien lo carga a mi HTML.
- El orden de ejecución de los loaders es del último hacia el primero en el array. En este caso, primero se ejecuta css-loader y después se ejecuta style-loader.

Si tuviéramos 5 loaders en el array, webpack los ejecutará en el orden de 5, 4, 3, 2 y 1 😃


**Comandos usados:**

```

$ npm install --save-dev --save-exact style-loader

$ npm install --save-dev --save-exact css-loader

```


