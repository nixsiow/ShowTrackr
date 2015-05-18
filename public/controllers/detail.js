angular.module('MyApp')
  .controller('DetailCtrl', ['$scope', '$rootScope', '$routeParams', 'Show', 'Subscription', function(DetailCtrl, $scope, $rootScope, $routeParams, Show, Subscription) {
    Show.get({ _id: $routeParams.id }, function(show) {
      $scope.show = show;

      $scope.isSubscribed = function() {
        return $scope.show.subscribers.indexOf($rootScope.currentUser._id) !== -1;
      };

      $scope.subscribe = function() {
        Subscription.subscribe(show).success(function() {
          $scope.show.subscribers.push($rootScope.currentUser._id);
        });
      };

      $scope.unsubscribe = function() {
        Subscribtion.unsubscribe(show).success(function() {
          var index = $scope.show.subscribers.indexOf($rootScope.currentUser._id);
          $scope.show.subscribers.splice(index, 1);
        });
      };

      // an object of an upcoming episode
      // find the next episode from today.
      $scope.nextEpisode = show.episodes.filter(function(episode) {
        // goes through each and every episode and checks if it passes the following condition
        // if it passes, that episode will be added to a new Array
        return new Date(episode.firstAired) > new Date();
      })[0]; // get the first upcoming episode
    });
  }]);
