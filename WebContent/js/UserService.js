app.factory('UserService', function($http) {
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

		getAllUsers : function() {
			console.log('Entering getAllUsers in User Service')
			return $http.get(BASE_URL + "listUser")
		}

	}
})