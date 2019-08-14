
Principio subyacente de la clase.

1. Mientras más dependencias más lento será tu build de production.

¿Qué acciones clave extraigo de esta clase ?

_Para hacer el build más rápido vamos a aplicar la técnica de **dynamic link library**._

_"Una Dynamic Link Library (DLL) es un conjunto de librerías comunes que no cambian frecuentemente por lo que se hace un build por adelantado de las mismas para no re-empaquetar cada vez que hacemos build de nuestra aplicación."_.

_____________________________________________________________

#Tutorial: 
Cómo crear un Dynamic Link Library para acortar el tiempo de carga de librerias. (Estamos creando un webpack config super optimizado para produccion).


1. Creamos los siguientes archivos:

- `webpack.config.js` (el webpack de toda la vida).
- `webpack.dll.config.js` (el webpack para las librerias).

2. Colocamos las dependencias core que se repite su uso en nuestra app en el entry de nuestro `webpack.dll.config.js`. para guardarla en cache del navegador y precargarlas.

`webpack.dll.config.js`
```	
entry: {
		modules: [
		"react",
		"react-dom"
		]
	},

```

3. Añadimos plugin de DLL en nuestro `webpack.dll.config.js`.

`webpack.dll.config.js`
```

plugins: [
		new webpack.DLLPlugin({
			name: "[name]",
			path: path.join(__dirname, "[name]-manifest.json")
		})
	]
```

3. Eliminamos lineas de código de developmente en nuestro `webpack.dll.config.js`.


4. Corres el dll wepack config y despues corres el otro webpack config con el script que creaste para `npm run` en tu package.json.

`package.json`
```
   
    "build:dll": "webpack --config ./dll/webpack.dll.config.js",
    "build:prevent-duplication-fast": "webpack --config ./dll/webpack.config.js"

```
`cli`
```

	$ npm run build:dll
	$ npm run build:prevent-duplication-fast

```

5. Añades el siguiente plugin en tu archivo `webpack.config.js`. El plugin optimizará tu CSS para producción, no está directamente relacionado con el DLL.

```

		new MiniCssExtractPlugin({
			filename: "css/[name].css",
			chunkFilename: "css/[id].css"
		})	,

```

Notas:
- library es quien enlaza los modulos que creamos al codigo que escribimos de la app
- Esta clase es dificil, practica, genera nuevas configuraciones.
