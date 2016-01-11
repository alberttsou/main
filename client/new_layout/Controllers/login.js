app.controller('loginCtrl', function($scope, $location, $rootScope){
	$scope.submit = function(){
		if ($scope.username === 'admin' && $scope.password === 'admin'){
			$rootScope.loggedIn = true;
			$location.path('/dashboard');
		}
	};
});

