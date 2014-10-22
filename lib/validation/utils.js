var _ = require('lodash');

function isDefined(val) {
	return _.isUndefined(val) ? false : true;
}

module.exports = {
	isDefined: isDefined
};