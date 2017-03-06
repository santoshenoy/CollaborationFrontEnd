var app = angular.module('myApp', [ 'ngRoute', 'ngCookies' ]);
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

	.when('/listuser', {
		templateUrl : 'view/listuser.html',
		controller : 'UserController'
	})

	.when('/bloglist', {
		templateUrl : 'view/bloglist.html',
		controller : 'BlogController'
	})

	.when('/joblist', {
		templateUrl : 'view/joblist.html',
		controller : 'JobController'
	})

	.when('/forum', {
		templateUrl : 'view/forum.html',
		controller : 'ForumController'
	})

	.when('/forumlist', {
		templateUrl : 'view/forumlist.html',
		controller : 'ForumController'
	})

	.when('/login', {
		templateUrl : 'view/login.html',
		controller : 'UserController'
	})

	.when('/logout', {
		templateUrl : 'view/home.html',
		controller : 'UserController'
	})

	.otherwise({
		redirectTo : '/'
	});

});

app.run(function($rootScope, $location, $cookieStore, $http) {
	$rootScope.$on('$locationChangeStart', function(event, next, current) {
		console.log("$locationChangeStart")
		var userPages = [ '/listuser' ]
		var adminPages = [ "/bloglist", "/joblist" ]
		var currentPage = $location.path()
		var isUserPage = $.inArray(currentPage, userPages) == 1;
		var isAdminPage = $.inArray(currentPage, adminPages) == 1;
		var isLoggedIn = $rootScope.currentUser.id;
		console.log("isLoggedIn:" + isLoggedIn)
		console.log("isUserPage:" + isUserPage)
		console.log("isAdminPage:" + isAdminPage)
		if (!isLoggedIn) {
			if (isUserPage || isAdminPage) {
				console.log("Navigating to login page:")
				alert("You need to loggin to do this operation")
				$location.path('/');
			}
		} else {
			var role = $rootScope.currentUser.role;
			if (isAdminPage && role != 'ADMIN') {
				alert("You can not do this operation as you are logged as : "
						+ role)
				$location.path('/login');
			}
		}
	});

	$rootScope.currentUser = $cookieStore.get('currentUser') || {};
	if ($rootScope.currentUser) {
		$http.defaults.headers.common['Authorization'] = 'Basic'
				+ $rootScope.currentUser;
	}
});