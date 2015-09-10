'use strict';

angular.module('users')
	.config(function($stateProvider){
		$stateProvider
			.state('users', {
				abstract: true,
				template: '<ui-view></ui-view>'
			})
			.state('login', {
				parent: 'overall',
				url: '/login',
				templateUrl: 'app/users/login.html',
			})
	});