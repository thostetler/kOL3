define([
	'knockout',
	'lodash',
	'viewmodel/Map',
	'text!template/Map.tmpl.html',
	'util/parseAttr'
], function (ko, _, MapViewModel, MapTemplate, parseAttr) {

	var DEFAULTS = [
		'zoom',
		'center'
	];

	// create the main component
	ko.components.register('ol3-map', {
		viewModel: {
			createViewModel: function (params, componentInfo) {
				var element = componentInfo.element;
				params = _.merge(params,
					parseAttr.parse(DEFAULTS, element));
				delete params.$raw;
				return new MapViewModel(params, element);
			}
		},
		template: MapTemplate
	});
});