app.factory('UserService', function($http, $q, $rootScope) {
	console.log('Entered UserService')

	var BASE_URL = "http://localhost:8083/CollaborationRestController/"
	return {
		registerUser : function(user) {
			return $http.post(BASE_URL + "addUser/", user).then(
					function(response) {
						console.log(response.status)
						console.log(response.headers.location)
						return response.status
					}, function(response) {
						console.log(response.status)
						return response.status
					});

		},

		authenticate : function(user) {
			console.log("Entering Function Validate User")
			return $http.post(BASE_URL + "login", user).then(
					function(response) {
						if (response.data.errorMessage == "Success") {
							$rootScope.currentUser = {
								id : response.data.id,
								nam : response.data.nam,
								psswrd : response.data.psswrd,
								mail : response.data.mail,
								role : response.data.role,
								isOnline : response.data.isOnline,
								dob : response.data.dob,
								mobile : response.data.mobile,
								gender : response.data.gender,
								address : response.data.address,
								status : response.data.status,
								date4 : response.data.date4
							};
						}
						return response.data;
					}, function(errResponse) {
						$rootScope.userLoggedIn = false;
						console.error(errResponse.status);
						console.error("Error While Validating");
						return $q.reject(errResponse);
					});
		},

		logout : function() {
			console.log("Entering Logout")
			return $http.get(BASE_URL + "logout").then(function(response) {
				return response.data;
			}, function(errResponse) {
				console.log("Error Logging Out");
				return $q.reject(errResponse);
			});
		},

		getAllUsers : function() {
			console.log('Entering getAllUsers in User Service')
			return $http.get(BASE_URL + "listUser")
		}

	}
})