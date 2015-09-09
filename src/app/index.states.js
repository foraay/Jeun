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
      	  	templateUrl: 'app/components/footer/footer.html'
      	  }
      	}
      })
      .state('overall', {
      	parent: 'root',
      	abstract: true,
      	templateUrl: 'app/overall.html'
      });
    $urlRouterProvider.otherwise('/');
  });
