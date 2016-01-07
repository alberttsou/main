(function(angular){

var app = angular.module('emuSearch', [])



app.controller('searchCtrl', ['$scope', '$http', function($scope, $http){
        $scope.data = {}
        $scope.poop = 'kjhkkjh'
        $scope.jobz =[{

        }]

        $scope.submit = function(){
          $http.get({


            params:
              {
                distance: $scope.data.distance,
                maxPrice: $scope.data.price,
              }
          }).success(function(resp){
            $scope.jobz = resp.jobz
          })

        }

      }]);

// app.config(function($routeProvider, $httpProvider){
//   $routeProvider
//     .when('/', function(){
//       templateUrl: '/pages/splash/index.html'
//     })
//     .when('/search', {
//       templateUrl: '/pages/search/index.html',
//       controller: 'searchCtrl',
//       controllerAs: search
//     })
//     .otherwise({
//       redirectTo: '/'
//     })
// })
})(window.angular)