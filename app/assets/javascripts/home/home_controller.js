angular.module('evalApp')

.controller('HomeCtrl', ['$scope', 'ValueFactory', function($scope, ValueFactory) {

  var _this = this;

  $scope.test = 'Hello world!';

  this.posts = [
    'post 1',
    'post 2',
    'post 3',
    'post 4',
    'post 5'
  ];

}]);