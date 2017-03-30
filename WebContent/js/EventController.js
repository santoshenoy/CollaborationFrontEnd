app.controller('EventController', function($scope, $location, EventService) {
	console.log('Entered EventController')
	$scope.events;
	var self = this;
	$scope.event = {
		id : '',
		name : '',
		description : '',
		venue : '',
		date_time : '',
		date4 : ''
	};
	$scope.message;
	self.registerEvent = function() {
		console.log('Entered function to save in Event Controller')
		EventService.registerEvent($scope.event).then(function(response) {
			console.log("Event Registration success" + response.status)
			$location.path("/home");
		});
	}

	function getAllEvents() {
		console.log("Entered getAllEvents")
		EventService.getAllEvents().then(function(response) {
			console.log(response.status)
			console.log(response.data)
			$scope.events = response.data
		})
	}
	getAllEvents()
});