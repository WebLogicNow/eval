angular.module('evalApp', [
  'ui.router',
  'templates',
  'ngResource'
])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'HomeCtrl',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('home');

}])

.run(['$rootScope', 'ValueFactory', function($rootScope, ValueFactory) {

  $rootScope.ValueFactory = ValueFactory;

}]);