const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports =  {
	entry: [
		// "webpack-hot-middleware/src",
		"./src/app.js"
	],
	output: {
		path: path.resolve(__dirname,"dist"),
		filename: 'app.bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/, 
				use: ['react-hot-loader','babel-loader'],
        		exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					loader: ["css-loader","sass-loader"],
					publicPath: "/dist"
				})
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		publicPath: '/',
		compress: true,
		hot: true,
		port: 3000,
		stats: "errors-only"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
	    	title: "Movie Diary",
	    	// minify: {
	    	// 	collapseWhitespace: true
	    	// },
	    	// hash: true,
	    	template: "./src/index.html", // Load a custom template (ejs by default see the FAQ for details)
	  	}),
		new ExtractTextPlugin({
			filename: "app.css",
			disable: false,
			allChunks: true
		})
	],
	// This lets us debug our react code in chrome dev tools. Errors will have lines and file names
	// Without this the console says all errors are coming from just coming from bundle.js
	devtool: "eval-source-map"
}
