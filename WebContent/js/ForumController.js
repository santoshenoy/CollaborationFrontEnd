app.controller('ForumController', function($scope, $location, ForumService) {
	console.log('Entered ForumController')
	$scope.forums;
	var self = this;
	$scope.forum = {
		id : '',
		name : '',
		description : '',
		u_id : '',
		status : '',
		f_date : '',
		date3 : ''
	};
	$scope.message;
	self.registerForum = function() {
		console.log('Entered function to save in Forum Controller')
		ForumService.registerForum($scope.forum).then(function(response) {
			console.log("Forum Registration success" + response.status)
			$location.path("/home");
		});
	}

	function getAllForums() {
		console.log("Entered getAllForums")
		ForumService.getAllForums().then(function(response) {
			console.log(response.status)
			console.log(response.data)
			$scope.forums = response.data
		})
	}
	getAllForums()
});