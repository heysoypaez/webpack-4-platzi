const path = require("path");

module.exports = {
	entry: path.resolve( __dirname,"index.js" ),
	mode:"development",
	output: {
		path: path.resolve( __dirname ),
		filename: "bundle.js"
	}
}

//	npx  webpack --entry ./index.js --output ./bundle.js
// webpack por defecto cuando escribo nppc webpack ejecuta este archivo