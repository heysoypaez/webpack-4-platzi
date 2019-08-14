const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {

	entry: {
		home: path.resolve( __dirname, "src/js/index.js" ),
		contact: path.resolve( __dirname, "src/js/contact.js" )	
	},
	mode:"production",

	output: {
		path: path.resolve( __dirname , "dist/" ),
		filename: "js/[name].js",
		publicPath: "dist/",
		chunkFilename: "js/[id].[chunkhash].js "
	},
	module: {

		rules: [

			/*Css Preprocessor
		------------------------*/

			{
				test: /\.less$/,
				use: [ 

					{
  				 loader: MiniCssExtractPlugin.loader 
					},
					"css-loader",
					"less-loader"
					]
			},

			{
				test: /\.scss$/,
				use: [ 

					{
  				 loader: MiniCssExtractPlugin.loader 
					},
					"css-loader",
					"sass-loader"
					]
			},

			{
				test: /\.styl$/,
				use: [ 

					{
					   loader: MiniCssExtractPlugin.loader 
					},
					"css-loader",
					"stylus-loader"
					]
			},

			{
				test: /\.css$/,
				use: [ 

					{
						loader: MiniCssExtractPlugin.loader 
					},
					{
						loader:"css-loader",
						options: {
							importLoaders: 1
						}
					},
					"postcss-loader"
				]
			},
				/*Css Preprocessor END
		------------------------*/
			{
				test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 90000, //limit bites of size
					}				
				}	
			},
			{
				test: /\.js$/,
				use: "babel-loader",
				exclude: /node_modules/
			}
		]
	},
	plugins: [


		new MiniCssExtractPlugin({
			filename: "css/[name].css",
			chunkFilename: "css/[id].css"
		})	,
		new webpack.HotModuleReplacementPlugin(),

		new HtmlWebpackPlugin({
			title: "plugins",
			minify: {
				collapseWhitespace: true
			},
			template:  path.resolve( __dirname, "index.html" )	
		}),
		new webpack.DllReferencePlugin({
			manifest: require("./modules-manifest.json")
		})
	]
}

//	npx  webpack --entry ./index.js --output ./bundle.js
// webpack por defecto cuando escribo nppc webpack ejecuta este archivo