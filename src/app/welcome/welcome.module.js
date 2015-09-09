'use strict';

angular.module('welcome', [])
	.config(function($stateProvider){
		$stateProvider
			.state('welcome', {
				templateUrl: 'app/welcome/welcome.html',
				parent: 'root',
				url: '/'
			});
	});
	