'use strict';

angular.module('jeun', [
	'ui.router',
	'ngMaterial',
	'welcome',
	'users'
])
.run(function(){
	console.log('app started ' + new Date().getTime())
});