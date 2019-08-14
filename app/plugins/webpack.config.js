const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
				use: [ 

				{
					loader: MiniCSSExtractPlugin.loader
				}

					,"css-loader"]
			}
		]
	},
	plugins: [

		new MiniCSSExtractPlugin({
			filename: "css/[name].css"
		}),

		new HtmlWebpackPlugin({
			title: "plugins",
			minify: {
				collapseWhitespace: true
			}
		})
	]
	
}

//	npx  webpack --entry ./index.js --output ./bundle.js
// webpack por defecto cuando escribo nppc webpack ejecuta este archivo