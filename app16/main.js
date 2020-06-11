require([
	'require',
	'dojo/request',
	'app/App'
], function (require, request, App) {
	request(require.toUrl('../data/events.json'), {
		handleAs: 'json'
	}).then(function (data) {
		var app = new App({
			data: data
		}, document.getElementById('app'));

		app.startup();
	});
});
