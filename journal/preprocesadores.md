
#Mi resumen

Tutorial: Cómo trabajar con preprocesadores de CSS en Webpack


1. **Necesitas instalar los loaders de los preprocesadores:**

```

	npm install sass-loader
	npm install stylus-loader
	npm install less-loader
	npm install postcss-loader

--save-dev --save-exact

//Versión Corta

	npm install sass-loader stylus-loader less-loader postcss-loader --save-dev --save-exact
	
```

2. Antes de configurar los preprocesadores en webpack necesitas tenerlos previamente instalado en tu computador, tenerlos en tus `Peer dependencies`.

Instalando preprocesadores de CSS
```

	npm install sass
	npm install node-sass
	npm install stylus
	npm install less

--save-dev --save-exact

//Short version

	npm install sass stylus less --save-dev --save-exact
	
```


3. Necesitas añadir los loaders en tus archivo de webpack.config.js.


```
			{
				test: /\.scss$/,
				use: [ 

					"style-loader",
					"css-loader",
					"sass-loader"
					]
			},
			{
				test: /\.less$/,
				use: [ 

					"style-loader",
					"css-loader",
					"less-loader"
					]
			},
			{
				test: /\.styl$/,
				use: [ 

					"style-loader",
					"css-loader",
					"stylus-loader"
					]
			}
```

4. ¡Y voilá! Pon a correr tu webpack config y crea unos diseños inspiradores para tu aplicación web.

En mi caso:
```

npm run build:precss

```



