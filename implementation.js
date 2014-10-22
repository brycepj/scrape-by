var scraper = require('./index');
var config = {
	pagination : {
		max: 9,
		string: 'page/$',
	},
	sequence : {},
};

scraper.index('http://google.com', 'selector', config);