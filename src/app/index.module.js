'use strict';

angular.module('jeun', [
	'ui.router',
	'ngMaterial',
	'welcome',
	'users'
])
.run(function($rootScope, $state){

	var stateLifeSpan = 60 * 5;
	var togo = 0;
	
	$rootScope.Auth = {};
	
	function tick(){
		return $timeout(function(){
			togo--
		}, 1000);
	}
	function init(){
		togo = stateLifeSpan;
		return tick();
	}
	function checkSession(){
		return $rootScope.isLoggedIn = (togo > 0);
	}
	$rootScope.$on('$stateChangeStart', function(event, toState){
		checkSession();
		if(!$rootScope.isLoggedIn){
			if(toState.name !== 'login'){
				$state.go('welcome');
			}
		}
	});
	
});