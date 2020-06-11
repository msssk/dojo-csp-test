var dojoConfig = {
	async: true,
	baseUrl: '../../',
	has: {
		'csp-restrictions': true,
		'dojo-v1x-i18n-Api': false
	},
	locale: 'en-us',
	extraLocale: [ 'es-es' ],
	packages: [
		'dgrid',
		'dijit',
		'dojo',
		'dojox',
		{
			name: 'app',
			location: 'dojo-csp-test/app'
		}
	],
	deps: [
		'app/main'
	]
};
