'use strict';

angular.module('evalApp')

.factory('ValueFactory', ['ValueResource', function(ValueResource) {

  var ValueFactory = {

    getValues: function(params) {

      return ValueResource.query(params).$promise.then(function(result) {

        ValueFactory.values = result;

      }, function(error) {
        console.warn(error);
      });

    }

  }

  return ValueFactory;

}]);