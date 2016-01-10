app.controller('postCtrl', function($scope, $http){

	$scope.proccesSubmit = function () {
		console.log("Hey i'm submitted!");

		$scope.data.author = "5691b01119c93c650558ddec";
		$scope.data.categories = ["5691b0c297ca337905bdf75e"];

		console.log($scope.data);
		$http.post('api/posts', $scope.data)
			.success(function (data) {
				console.log(data)
			}).error(function(data) {
				console.log(":(")
			});
	};
})