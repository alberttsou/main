
app.controller('dashboardCtrl', function($scope, $http, $rootScope){
	$scope.message = "Welcome to the Dashboard";
	$scope.bids;
	$scope.jobs = [
	{
		title: "My job title",
		salary: 90,
		bids : [
			{
				status: false,
				bidId: 1
			},
			{
				status: false,
				bidId: 1
			}
		]
	},
	{
		title: "My job title",
		salary: 90,
		bids : [
			{
				status: false,
				bidId: 1
			}
		]
	},
	{
		title: "My job title",
		salary: 90,
		bids : [
			{
				status: false,
				bidId: 1
			}
		]
	}
	];
	// var userId = window.localStorage.user.id;
	$scope.userId = $rootScope.userId;//fake user

	$scope.getUserBids = function () {
		
		$http.get('/api/bids/' + $scope.userId,{
		}).
			success(function (data) {
				$scope.bids = data
			})
	};
	$scope.getUserJobs = function () {

		$http.get('/api/posts/' + $scope.userId,{
		}).
			success(function (data) {
				$scope.jobs = data
			})
	};
	$scope.selectBid = function(bidId){
		$http.put('/api/bids/' + bidId, 
			{
				data: {status:'accepted'}
			}
		)
	}
})

