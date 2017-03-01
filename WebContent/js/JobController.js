app.controller('JobController', function($scope, $location, JobService) {
	console.log('Entered JobController')
	$scope.jobs;
	$scope.job = {
		title : '',
		u_id : '',
		description : '',
		dateTime : '',
		qualification : '',
		status : '',
		date1 : ''
	};
	$scope.message;
	$scope.registerJob = function() {
		console.log('Entered function to save in Job Controller')
		JobService.registerJob($scope.job).then(function(response) {
			console.log("Job Registration success" + response.status)
			$location.path("/home");
		});
	}

	function getAllJobs() {
		console.log("Entered getAllJobs")
		JobService.getAllJobs().then(function(response) {
			console.log(response.status)
			console.log(response.data)
			$scope.jobs = response.data
		})
	}
	getAllJobs()
});