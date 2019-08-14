#Principio subyacente de la clase. 

Hay información que no es necesario que el usuario lo descargue por defecto cuando entra a nuestro app.

#¿Que voy a aplicar?

Vamos a usar los Dynamic Imports para descargar información de nuestra aplicación solo cuando el usuario la requiera. Por ejemplo, cuando oprime un botón. 

#Tutorial.

1 
crear archivo

2
function superAlert(message) {
	alert(message)
}

export {superAlert}



3
	const handleClick = () => {
		setLoaderList(data.loaders);
		import("./alert.js")
	}

4.


	const handleClick = async () => {
		setLoaderList(data.loaders);
		const {superAlert} = await import("./alert.js");
	}

5.

```

	npm install dynam --save-dev --save-exact @babel/plugin-syntax-dynamic-import

```

6. babelrc

```
@babel/plugin-syntax-dynamic-import

#Casos de uso.