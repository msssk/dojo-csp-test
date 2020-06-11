define([
	'dijit/_TemplatedMixin',
	'dijit/_WidgetBase',
	'dijit/_WidgetsInTemplateMixin',
	'dgrid/Grid',
	'./Card',
	'./createChart',
	'dojo/text!./App.html'
], function (_TemplatedMixin, _WidgetBase, _WidgetsInTemplateMixin, Grid, Card, createChart, template) {
	return _WidgetBase.createSubclass([ _TemplatedMixin, _WidgetsInTemplateMixin ], {
		templateString: template,

		buildRendering: function () {
			this.inherited(arguments);

			this.grid = new Grid({
				columns: {
					date: 'Date',
					color: 'Color',
					number: 'Count'
				}
			}, this.gridNode);

			this.grid.on('.dgrid-content .dgrid-row:mouseover', function (event) {
				var row = this.grid.row(event.target);

				if (row) {
					this.card.set('value', row.data);
					this.cardEs.set('value', row.data);
				}
			}.bind(this));

			this.cardEs = new Card({ lang: 'es-es' }, this.cardEsNode);
		},

		startup: function () {
			this.inherited(arguments);

			this.chart = createChart(this.chartNode);
			this.chart.addSeries('days', this.data.map(function (item) {
				return item.number;
			}));
			this.chart.render();

			this.grid.renderArray(this.data);
			this.card.set('value', this.data[0]);
			this.cardEs.set('value', this.data[0]);
		}
	});
});
