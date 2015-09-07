'use strict';

angular.module('jeun', [
	'ui.router',
	'ngMaterial',
	'welcome'
])
.run(function(){
	console.log('app started ' + new Date().getTime())
});