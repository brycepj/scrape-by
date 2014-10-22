var validUrl = require('valid-url');
var _ = require('lodash');
var vConfig = root_require('validation/config');

function indexConfig(obj) {
	var out = {};
	var pagination = obj['pagination'] ? obj['pagination'] : false;
	var sequence = obj['sequence'] ? obj['sequence'] : false;

	if (!pagination && !sequence){
		return out;
	}

	out.pagination = vConfig.pagination(pagination);
	out.sequence = vConfig.sequence(sequence);

	return out;
}

function url(str){

	var out = validUrl.isUri(str);
	if (!out){
		throw Error("Invalid URL: " + str);
	}
	return out;
}

function selector(str) {
	var out = _.isString(str) ? str : false;
	if (!out){
		throw Error("You have not passed in a selector.");
	}
	return out;
}

module.exports = {
	url: url,
	selector: selector,
	indexConfig: indexConfig,
};