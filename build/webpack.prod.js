var Merge = require('webpack-merge'),
	webpack = require('webpack'),
	CommonConfig = require('./webpack.common.js'),
	path = require('path'),
	JavaScriptObfuscator = require('webpack-obfuscator'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	CompressionPlugin = require("compression-webpack-plugin");

module.exports = Merge(CommonConfig, {
	output: {
		path: path.join(__dirname, '/../dist/client'),
		filename: '[name].js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist/client', 'dist/server/**/*.*.map'], {
			root: path.join(__dirname, '../'),
			verbose: true,
			dry: false
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			mangle: {
				screw_ie8: true,
				keep_fnames: true
			},
			compress: {
				screw_ie8: true
			},
			comments: false
		}),
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0
		}),
		new JavaScriptObfuscator({
			rotateUnicodeArray: true
		}, ['[name].js'])
	]
})
