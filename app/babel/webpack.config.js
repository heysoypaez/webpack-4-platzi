const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	entry: {
		home: path.resolve( __dirname, "src/js/index.js" )	
	},
	mode:"development",
	output: {
		path: path.resolve( __dirname , "dist/" ),
		filename: "js/[name].js"
	},
	/*
	devServer: {
		hot: true,
		port: 9000,
		clientLogLevel: 'silent',
		lazy: false,
		https: false,
		quiet: false

	},*/

	module: {

		rules: [
			{
				test: /\.css$/,
				use: [ 

					"style-loader"
					,"css-loader"]
			},
			{
				test: /\.js$/,
				use: "babel-loader",
				exclude: /node_modules/
			}
		]
	},
	plugins: [

		new webpack.HotModuleReplacementPlugin(),

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