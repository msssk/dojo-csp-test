define([
	'dijit/_TemplatedMixin',
	'dijit/_WidgetBase',
	'dijit/form/TextBox',
	'dojo/i18n!./nls/common.js',
	'dojo/text!./Card.html'
], function (_TemplatedMixin, _WidgetBase, TextBox, i18n, template) {
	return _WidgetBase.createSubclass([ _TemplatedMixin ], {
		i18n: i18n,
		templateString: template,

		buildRendering: function () {
			this.inherited(arguments);

			this.input = new TextBox({ disabled: true }, this.inputNode);
		},

		_setValueAttr: function (newValue) {
			this._set('value', newValue);
			this.calendarNode.textContent = newValue.date;

			if (this.input) {
				this.input.set('value', newValue.number);
				this.input.domNode.firstChild.style.backgroundColor = newValue.color;
			}
		}
	});
});
