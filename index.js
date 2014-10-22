global.root_require = function(name){
	return require(__dirname + '/lib/' + name);
};

module.exports = root_require('main');
