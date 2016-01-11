
app.controller('dashboardCtrl', function($scope, $http, $rootScope){
	$scope.message = "Welcome to the Dashboard";
	$scope.userId = "5691749973aa5549057a2269";
	$scope.bids;
	$scope.jobs;// = [
	// {
	// 	title: "My job title",
	// 	salary: 90,
	// 	bids : [
	// 		{
	// 			status: false,
	// 			bidId: 1
	// 		},
	// 		{
	// 			status: false,
	// 			bidId: 1
	// 		}
	// 	]
	// },
	// {
	// 	title: "My job title",
	// 	salary: 90,
	// 	bids : [
	// 		{
	// 			status: false,
	// 			bidId: 1
	// 		}
	// 	]
	// },
	// {
	// 	title: "My job title",
	// 	salary: 90,
	// 	bids : [
	// 		{
	// 			status: false,
	// 			bidId: 1
	// 		}
	// 	]
	// }
	// ];
	// var userId = window.localStorage.user.id;
	//$scope.userId = $rootScope.userId;//fake user

	$scope.getUserBids = function () {
		
		$http.get('/api/bids/' + $scope.userId,{
		}).
			success(function (data) {
				$scope.bids = data
			})
	};
	$scope.getUserJobs = function () {

		$http.get('/api/posts/', {// + $scope.userId,{
		}).
			success(function (data) {
				// filter jobs so that data._id === $scope.userId
				$scope.jobs = data
			})
	};
	$scope.selectBid = function(jobId, bidId){
		$http.put('/api/posts/' + jobId, 
			{
				data: {chose: bidId}
			}
		)
	}
})

