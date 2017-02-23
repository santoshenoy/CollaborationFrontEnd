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

	function getAllUsers() {
		console.log("Entered getAllUsers")
		UserService.getAllUsers().then(function(response) {
			console.log(response.status)
			console.log(response.data)
			$scope.users = response.data
		})
	}
	getAllUsers()
})