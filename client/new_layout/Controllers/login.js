app.controller('loginCtrl', function($scope, $location, $rootScope){
	$scope.data = {};
	$scope.data.username = $scope.username;
	$scope.data.password = $scope.password;
	$scope.submit = function(){
		if ($scope.username === 'admin' && $scope.password === 'admin'){
			$rootScope.userId = '5691b01119c93c650558ddec';
			$location.path('/dashboard');
		}
		// $http.post('api/users', $scope.data)
		// 	.success(function (data) {
		// 		$rootScope.userId = data._id;
		// 		$location.path('/dashboard');
		// 	}).error(function(data) {
		// 		console.log(":(")
		// 	});
	};
});

