angular.module('emuSearch', []).config(function($routeProvider, $httpProvider){
  $routeProvider
    .when('/', function(){
      templateUrl: '/pages/splash/index.html'
    })
    .when('/search', function(){
      templateUrl: '/pages/search/index.html',
      controller: ['$scope', '$http' function($scope, $http){
        $scope.data = {}

        $scope.submit = function(){
          $http.get({


            params:
              {
                distance: $scope.data.distance,
                maxPrice: $scope.data.price,
              }
          })

        }

      }],
      controllerAs: search
    })
    .otherwise({
      redirectTo: '/'
    })
})
