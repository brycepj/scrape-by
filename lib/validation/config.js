var _ = require('lodash');

function pagination(obj) {
	var hasMax = _.isNumber(obj.max); 
	var hasStr = _.isString(obj.string);
	var out = {};
	
	if (!_.isObject(obj)){
		return 'undefined';
	}

	if (!hasMax || !hasStr) {
		throw Error("You have not passed in the requisite pagination values.");
	}

	out.string = _hasCash(obj.string);
	out.max = obj.max;

	return out;
}

function sequence(obj) {
	var possible = ['click', 'infinity']; /// YOU SORT OF LEFT OFF HERE.
	return out;
}

function _hasCash(str) {
	var hasSym = str.indexOf('$') > -1;
	if (!hasSym) {
		throw Error('Your paginator does not contain a $, which indicates the location of the page number.');
	}
	return str;
}

module.exports = {
	pagination: pagination,
	sequence: sequence,
};