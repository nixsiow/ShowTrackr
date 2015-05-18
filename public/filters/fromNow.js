angular.module('MyApp').
  filter('fromNow', function() {
    return function(data) {
      return moment(date).fromNow();
    }
  });
