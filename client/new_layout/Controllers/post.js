app.controller('postCtrl', function($scope, $http, $rootScope){

	$scope.proccesSubmit = function () {
		console.log("Hey i'm submitted!");
		$scope.data = {};
		$scope.data.author = $rootScope.userId;
		$scope.data.categories = ["5691b0c297ca337905bdf75e"];

		console.log($scope.data);
		$http.post('api/posts', $scope.data)
			.success(function (data) {
				console.log($scope.data.author);
			}).error(function(data) {
				console.log(":(")
			});
	};
})