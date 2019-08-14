const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {

	entry: {
		home: path.resolve( __dirname, "src/js/index.js" ),
		contact: path.resolve( __dirname, "src/js/contact.js" )	
	},
	mode:"production",

	output: {
		path: path.resolve( __dirname , "dist/" ),
		filename: "js/[name].js"
	},
	module: {

		rules: [

			/*Css Preprocessor
		------------------------*/

			{
				test: /\.less$/,
				use: [ 

					"style-loader",
					"css-loader",
					"less-loader"
					]
			},

			{
				test: /\.scss$/,
				use: [ 

					"style-loader",
					"css-loader",
					"sass-loader"
					]
			},

			{
				test: /\.styl$/,
				use: [ 

					"style-loader",
					"css-loader",
					"stylus-loader"
					]
			},

			{
				test: /\.css$/,
				use: [ 

					"style-loader",
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

		new webpack.HotModuleReplacementPlugin(),

		new HtmlWebpackPlugin({
			title: "plugins",
			minify: {
				collapseWhitespace: true
			},
			template:  path.resolve( __dirname, "index.html" )	
		})
	],
	optimization: {
		splitChunks: {
			chunks: "all",
			minSize: 0,
			name: "commons"
		}
	}

}

//	npx  webpack --entry ./index.js --output ./bundle.js
// webpack por defecto cuando escribo nppc webpack ejecuta este archivo