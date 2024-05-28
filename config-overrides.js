// config-overrides.js

const multipleEntry = require('react-app-rewire-multiple-entry')([
	{
		entry: 'src/index.js',
		template: 'public/index.html',
		outPath: '/index_ge.html'
	},
	{
		entry: 'src/index.js',
		template: 'public/index.html',
		outPath: '/index_ru.html'
	},
	{
		entry: 'src/index.js',
		template: 'public/index.html',
		outPath: '/index_en.html'
	}
]);


module.exports = {
	webpack: function(config, env) {
		
		// multipleEntry expects an "options" object but since cra v5 it is called "userOptions"
		// HACK -> copy userOptions reference and hope for the best
		const webpackPlugins = config.plugins.filter(p => p.constructor.name === 'HtmlWebpackPlugin');
		webpackPlugins.forEach(p => p.options = p.userOptions);
		
		// the original call
		multipleEntry.addMultiEntry(config);
		
		// now carry on with the options object
		webpackPlugins.forEach(p => { p.userOptions = p.options; delete p.options; });
		
		return config;
	}
};