define([
	'dijit/_TemplatedMixin',
	'dijit/_WidgetBase',
	'dijit/_WidgetsInTemplateMixin',
	'dojo/i18n!./nls/common.js',
	'dojo/text!./Card.html',
	// for template
	'dijit/Calendar',
	'dijit/form/TextBox'
], function (_TemplatedMixin, _WidgetBase, _WidgetsInTemplateMixin, i18n, template) {
	return _WidgetBase.createSubclass([ _TemplatedMixin, _WidgetsInTemplateMixin ], {
		i18n: i18n,
		templateString: template,

		postCreate: function () {
			this.inherited(arguments);

			this.calendar.set('lang', this.lang);
		},

		_setValueAttr: function (newValue) {
			this._set('value', newValue);
			this.calendar.set('value', new Date(newValue.date));
			this.input.set('value', newValue.number);
			this.input.domNode.firstChild.style.backgroundColor = newValue.color;
		}
	});
});
