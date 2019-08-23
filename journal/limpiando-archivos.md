el navegador cuando ve dos archivos iguales muestra al usuario el anterior que tiene guardado en cache

para cambiar eso usaremos el  [hash]



		path: path.resolve( __dirname , "dist/" ),
		filename: "js/[name].[hash].js",
		publicPath: "http://localhost:3001/",
		chunkFilename: "js/[id].[chunkhash].js "
	},



name: "[hash].[ext]"


los hash es recomendado solo para produccion

 

 para limpiar usaremos clean webpack plugin

 