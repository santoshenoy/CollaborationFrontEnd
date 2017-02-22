app.controller('UserController', function($scope, $location, UserService) {
	console.log('Entered the User Controller')
	$scope.users;
	$scope.user = {
		id : '',
		nam : '',
		psswrd : '',
		mail : '',
		role : '',
		isOnline : '',
		dob : '',
		mobile : '',
		gender : '',
		address : '',
		role : '',
		status : '',
	};
	$scope.message;
	$scope.registerUser = function() {
		console.log('Entered function to save in User Controller')
		UserService.registerUser($scope.user).then(function(response) {
			console.log("Registration success" + response.status)
			$location.path("/home");
		});
	}
})