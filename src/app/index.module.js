'use strict';

angular.module('jeun', [
	'ui.router',
	'ngMaterial'
])
.run(function(){
	console.log('app started ' + new Date().getTime())
});