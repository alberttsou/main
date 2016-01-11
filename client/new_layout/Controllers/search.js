// var db = [
// 	{
// 		title: "My job title",
// 		salary: 90,
// 		bids : [
// 			{
// 				status: false,
// 				bidId: 1
// 			}
// 		]
// 	},
// 	{
// 		title: "My job title",
// 		salary: 90,
// 		bids : [
// 			{
// 				status: false,
// 				bidId: 1
// 			}
// 		]
// 	},
// 	{
// 		title: "My job title",
// 		salary: 90,
// 		bids : [
// 			{
// 				status: false,
// 				bidId: 1
// 			}
// 		]
// 	}
// 	];
app.controller('searchCtrl', function($scope, $http, $rootScope){

	$scope.data = {salary:0}
	$scope.jobs;
	$scope.bids = {};

	$scope.greaterThan = function(prop, val){
    	return function(item){
    	return item[prop] > val;
    	}
    };	

	$scope.makeBid = function(id){
		// var bid = [];
		var newBid = {bids: {
			price : $scope.bids[id],
			desc : "",
			user: $rootScope.userId

		}}
		console.log('new bid', newBid)

		$http.put('/api/posts/' + id, newBid).
			success(function (data) {
				$scope.processFilter();
			}).error(function(data) {
				console.log(":(")
			});
	};

	$scope.processFilter = function () {
		console.log("Hey i'm submitted!");
		console.log($scope.data);
		$http.get('/api/posts',{
			params: $scope.data
		}).
			success(function (data) {
				console.log(data)
				$scope.jobs = data
			}).error(function(data) {
				console.log(":(")
			});
	};


})
