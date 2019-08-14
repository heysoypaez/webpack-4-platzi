const path = require("path");

module.exports = {
	entry: {
		home: path.resolve( __dirname, "src/js/index.js" ),
		prices: path.resolve( __dirname,"src/js/prices.js" ),
		contact: path.resolve( __dirname,"src/js/contact.js" ),
		about: path.resolve( __dirname,"src/js/about.js" )

	},
	mode:"production",
	output: {
		path: path.resolve( __dirname , "dist/" ),
		filename: "js/[name].js"
	}
}

//	npx  webpack --entry ./index.js --output ./bundle.js
// webpack por defecto cuando escribo nppc webpack ejecuta este archivo