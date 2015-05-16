angular.module('MyApp')
  // to query all shows and an individual show by id.
  .factory('Show', ['$resource', function($resource) {
    return $resource('/api/shows/:id');
  }]);
