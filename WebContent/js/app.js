var app = angular.module('myApp', [ 'ngRoute' ]);
app.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : 'view/home.html',
		controller : 'HomeController'
	})

	.when('/blog', {
		templateUrl : 'view/blog.html',
		controller : 'BlogController'
	})

	.when('/friend', {
		templateUrl : 'view/friend.html',
		controller : 'FriendController'
	})

	.when('/job', {
		templateUrl : 'view/job.html',
		controller : 'JobController'
	})

	.otherwise({
		redirectTo : '/'
	});

});