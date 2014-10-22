var v = root_require('validation/public');

function index(url, selector, config) {
	// validate url
	// validate selector
	// validate config
	var urls = v.indexConfig(config);
}

function content(index, selectors, config) {
	console.log(arguments);
}

module.exports = {
	index: index,
	content: content,
};