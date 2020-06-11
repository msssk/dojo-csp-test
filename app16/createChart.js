define([
	'dojox/charting/Chart',
	'dojox/charting/plot2d/Columns',
	'dojox/charting/themes/PlotKit/blue',
	'dojox/charting/axis2d/Default'
], function (Chart, Columns, blueTheme) {
	return function (node) {
		var chart = new Chart(node);

		chart.setTheme(blueTheme)
			.addAxis('x', {
				fixLower: 'major',
				fixUpper: 'major'
			})
			.addAxis('y', {
				fixLower: 'major',
				fixUpper: 'major',
				vertical: true
			})
			.addPlot('default', { type: Columns });

		return chart;
	};
});
