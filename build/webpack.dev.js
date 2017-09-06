var webpack = require('webpack'),
	Merge = require('webpack-merge'),
	CommonConfig = require('./webpack.common.js'),
	LiveReloadPlugin = require('webpack-livereload-plugin'),
	OpenBrowserPlugin = require('open-browser-webpack-plugin'),
	path = require('path');

module.exports = Merge(CommonConfig, {
	output: {
		path: path.join(__dirname, '/../dist/client'),
		filename: '[name].js',
		sourceMapFilename: '[name].js.map'
	},
	devtool: 'cheap-module-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		}),
		new LiveReloadPlugin({
			protocol: 'http',
			port: 35729,
			hostname: 'localhost'
		}),
		new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
	]

})
