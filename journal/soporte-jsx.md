**¿Cómo instalar React.js con Webpack**

Genial, tu y yo ya tenemos la base de Webpack y ahora instalaremos React, esto es lo que haremos

1. Instalar las siguientes dependencias:

```

npm install --save-dev --save-exact @babel/preset-react

npm install --save --save-exact react

npm install react-dom --save --save-exact 

//Nota: El orden de los flags no importa

```

2. Actualizar el archivo de .babelrc (el archivo que tiene tu configuración de babel):

```

"presets": [
		"@babel/preset-env",
		"@babel/preset-react"
	]


```

React necesita un elemento container en el HTML, para ello modificaremos nuestro HTML hecho automaticamente con webpack

3. Actualizar en webpack.config.js el plugin de HTML

```
plugins: [

		new webpack.HotModuleReplacementPlugin(),

		new HtmlWebpackPlugin({
			title: "plugins",
			minify: {
				collapseWhitespace: true
			},
			template:  path.resolve( __dirname, "index.html" )	
		})
	]
```
4. Y añadiremos el elemento container que llamaremos en el index.js de React.

```

<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
</head>
<body>
	<div id="root"></div>
</body>
</html>

```

5. ¡Y voilá! _Haz que algo que marque la diferencia suceda con tu App en React.js_

Index.js

```

//Gracias a Webpack es que es posible hacer esto
import React from "react";
import {render} from "react-dom";
import App from "./components/App.js";
import "../css/index.css";

render(<App />, document.getElementById("root"))

```

App.js

```

import React from "react";

function App(props) {
	
	return(
		<section className="App">
			<h1>App Testing</h1>
		</section>
	)
}

export default App;

```








