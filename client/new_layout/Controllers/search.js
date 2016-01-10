var db = [
	{
		id:1,
		title: "Promotion Name",
		text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		salary: 50,
		author:"Dima",
		bids:[]		
	},
	{
		id:2,
		title: "Promotion Name",
		text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		salary: 50,
		author:"Dima",
		bids:[]		
	},	
	{
		id:3,
		title: "Promotion Name",
		text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		salary: 50,
		author:"Dima",
		bids:[]		
	}
]
app.controller('searchCtrl', function($scope, $http){

	$scope.data = {}
	$scope.jobs = {};
	$scope.bids = {};

	$scope.makeBid = function(id){
		// var bid = [];
		var newBid = {bids: {
			price : $scope.bids[id],
			desc : ""
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
