app.factory('JobService', function($http) {
	console.log('Entered the Job Service')
	var BASE_URL = "http://localhost:8081/CollaborationRestController/"
	return {
		registerJob : function(job) {
			return $http.post(BASE_URL + "addJob/", job).then(
					function(response) {
						console.log(response.status)
						console.log(response.headers.location)
						return response.status
					}, function(response) {
						console.log(response.status)
						return response.status
					});
		},
		getAllJobs : function() {
			console.log('Entering getAllJobs in Job Service')
			return $http.get(BASE_URL + "listJob")
		}

	}
})