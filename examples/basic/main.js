requirejs({
	baseUrl: '../../',
	paths: {
		'knockout': 'bower_components/knockout/dist/knockout',
		'ol': 'bower_components/bower-ol3/build/ol',
		'text': 'bower_components/text/text',
		'jquery': 'bower_components/jquery/dist/jquery',
		'lodash': 'bower_components/lodash/dist/lodash'
	}
}, [
	'knockout',
	'ko-ol3-component'
], function (ko) {

	ko.applyBindings({});

});