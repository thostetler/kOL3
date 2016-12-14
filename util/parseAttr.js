define({
	parse: function (options, element) {
		var opts = {};
		options.forEach(function (o) {
			var attr = element.getAttribute(o);
			try {
				opts[o] = JSON.parse(attr);
			} catch (e) {
				opts[o] = attr;
			}
		});
		return opts;
	}
});