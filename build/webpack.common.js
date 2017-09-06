const webpack = require('webpack'),
	path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	bootstraoEntryPoints = require('./webpack.bootstrap.config'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');


var isProd = process.env.NODE_ENV === 'production';
var bootstrapConfig = isProd ? bootstraoEntryPoints.prod : bootstraoEntryPoints.dev;

module.exports = {
	entry: {
		'main': './client/main.ts',
		'bootstrap': bootstrapConfig
	},
	resolve: {
		extensions: ['.js', '.ts', '.html', '.css', 'scss']
	},
	module: {
		rules: [
			{ test: /\.ts$/, exclude: [/\.(spec|e2e)\.ts$/], use: ['awesome-typescript-loader', 'angular2-template-loader'] },
			{ test: /\.html$/, use: 'raw-loader' },
			{
				test: /\.(jpe?g|png|gif|ico|svg)$/i,
				use: ['file-loader?name=images/[name].[ext]', 'image-webpack-loader']
			},
			{ test: /\.(woff2?)$/, use: 'url-loader?limit=10000&name=fonts/[name].[ext]' },
			{ test: /\.(ttf|eot)$/, use: 'file-loader?name=fonts/[name].[ext]' },
			{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			// Bootstrap 3
			{ test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, use: 'imports-loader?jQuery=jquery' }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './client/index.html',
		}),
		new ExtractTextPlugin({
			filename: '[name].css',
			disable: !isProd,
			allChunks: true,
		})
	]
}
