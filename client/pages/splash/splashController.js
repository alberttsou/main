(function() {
  var app = angular.module('splash', []);

  app.controller("SplashController", function(){

    this.loginForm = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };

  });
})();



// angular.module('myApp', [])
// .controller('splashCtrl', function ($scope, $http) {
//     $scope.userName = "";
//     $scope.eMail = "";
//     $scope.passWord = "";

//     $scope.sendPost = function() {
//         var data = $.param({
//             json: JSON.stringify({
//                 userName: $scope.userName,
//                 email: $scope.eMail,
//                 password: $scope.password
//             })
//         });
//         $http.post("/echo/json/", data).success(function(data, status) {
//             $scope.hello = data;

//         })
//     }                   
// })