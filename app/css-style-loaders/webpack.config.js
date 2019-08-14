const path = require("path");

module.exports = {
	entry: {
		home: path.resolve( __dirname, "src/js/index.js" )	
	},
	mode:"production",
	output: {
		path: path.resolve( __dirname , "dist/" ),
		filename: "js/[name].js"
	},
	module: {

		rules: [
			{
				test: /\.css$/,
				use: [ "style-loader", "css-loader"]
			}
		]
	}
	
}

//	npx  webpack --entry ./index.js --output ./bundle.js
// webpack por defecto cuando escribo nppc webpack ejecuta este archivo