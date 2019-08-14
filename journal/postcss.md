
#Mi resumen

**Tutorial: Cómo trabajar con POST CSS en Webpack**

1. Necesitas instalar el loader de PostCSS:

```

	npm install postcss-loader --save-dev --save-exact

```

2. Configura el loader de POST CSS en webpack.config.js

*Nota:*
- Los archivos de post css son .css
- Primero aplica css loader y despues postcss loader

```

				test: /\.css$/,
				use: [ 

					"style-loader",
					{
						loader:"css-loader",
						options: {
							importLoaders: 1
						}
					},
					"postcss-loader"
```

3. PostCSS trabaja con plugins, instala lo que usarás.


```


npm install --save-dev --save-exact postcss-nested

```

4. Añade los plugins usados en postcss.config.js

```
	module.exports = {
		plugins: {
			"postcss-nested": {
				
			}
		}
	}
```


5. ¡Y voilá! Pon a correr tu webpack config y crea unos diseños inspiradores para tu aplicación web.

En mi caso:
```

npm run build:precss

```
