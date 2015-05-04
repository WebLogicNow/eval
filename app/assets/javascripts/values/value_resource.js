'use strict';

angular.module('evalApp')

.factory('ValueResource', ['$resource', function($resource) {

  return $resource('/values.json/:id/:action', {}, {
    query: {
      method: 'GET',
      isArray: true
    }
  });

}]);