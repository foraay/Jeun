'use strict';

angular.module('jeun')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
      	abstract: true,
      	views:{
      		root: {
      			templateUrl: 'app/index.html',
      		}
      	}
      })
      .state('index', {
      	parent: 'root',
      	abstract: true,
      	views: {
      	  header: {
      	  	templateUrl: 'app/components/navbar/navbar.html',
      	  },
      	  content: {

      	  },
      	  footer: {
      	  	template: 'footer here'
      	  }
      	}
      })
      .state('welcome', {
				parent: 'index',
				url: '/',
				templateUrl: 'app/welcome/welcome.html'
			});

    $urlRouterProvider.otherwise('/');
  });
