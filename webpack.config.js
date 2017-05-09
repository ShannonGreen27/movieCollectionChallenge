const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports =  {
	entry: {
		bootstrap: "bootstrap-loader",
		app: "./src/index.js"
	},
	output: {
		path: path.resolve(__dirname,"dist"),
		filename: '[name].bundle.js',
		publicPath:"/"
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
					use: ["css-loader","sass-loader"],
					publicPath: "/dist"
				})
			},
		    { 
		    	test: /\.(woff2?|svg)$/,
				use: 'url-loader?limit=10000&name=fonts/[name].[ext]'
			},
		    { 
		    	test: /\.(ttf|eot)$/,
		    	use: 'file-loader?name=fonts/[name].[ext]'
		    }
		]
	},
	// devServer: {
	// 	contentBase: path.join(__dirname, "dist"),
	// 	compress: true,
	// 	hot: true,
	// 	stats: "errors-only"
	// },
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
		    filename:  (getPath) => {
		      return getPath('css/[name].css').replace('css/js', 'css');
		    },
			disable: false,
			allChunks: true
		})
	],
	// This lets us debug our react code in chrome dev tools. Errors will have lines and file names
	// Without this the console says all errors are coming from just coming from bundle.js
	devtool: "eval-source-map"
}
