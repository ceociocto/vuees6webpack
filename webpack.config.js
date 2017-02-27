module.exports = {
	entry: './src/app/main',
	output: {
		filename: 'dist/js/bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		},{
			test: /\.html$/,
			loader: 'raw-loader'
		}]
	},
	resolve: {
	  alias: {
	    'vue$': 'vue/dist/vue.common.js'
	}
}
}