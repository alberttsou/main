var app = angular.module('emuAttack', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : '/views/pick.html',
			controller : 'pickCtrl'
		})
		.when('/post', {
			templateUrl : '/views/post.html',
			controller : 'postCtrl'
		})
		.when('/search', {
			templateUrl : '/views/search.html',
			controller : 'searchCtrl'
		})
		.when('/dashboard', {
			templateUrl : '/views/dashboard.html',
			controller : 'dashboardCtrl'
		})
		.otherwise({
			redirectTo : '/'
		})
});