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

	.when('/register', {
		templateUrl : 'view/register.html',
		controller : 'UserController'
	})

	.otherwise({
		redirectTo : '/'
	});

});