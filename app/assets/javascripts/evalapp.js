angular.module('evalApp', [
  'ui.router',
  'templates'
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

}]);