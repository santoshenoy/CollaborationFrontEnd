app.controller('FriendController', function($scope, $location, FriendService) {
	console.log('Entered FriendController')
	$scope.friends=[];
	$scope.friend = {
		id : '',
		f_id : '',
		isOnline : '',
		u_id : '',
		status : ''
	};
	$scope.message;
	$scope.registerFriend = function() {
		console.log('Entered function to save in Friend Controller')
		FriendService.registerFriend($scope.friend).then(function(response) {
			console.log("Friend Registration success" + response.status)
			$location.path("/home");
		});
	}

	$scope.pendingRequest = FriendService.getPendingRequest().then(
			function(response) {
				console.log("Entering Get Pending Request")
				console.log(response.status)
				$scope.pendingRequest = response.data;
			}, function(errResponse) {
				console.log("Error getting friend list")
				console.log(errResponse.data)
			})

	$scope.acceptRequest = function(u_id) {
		FriendService.acceptRequest(u_id).then(function(response) {
			console.log("Entering Accepting Request " + u_id)
			console.log(response.status)
			alert('Friend Accepted')
			$location.path("/myFriends")
		}, function(errResponse) {
			console.log("Error accepting friend")
			console.log(errResponse.data)
			$location.path("/")
		})
	}
	
	$scope.rejectRequest = function(u_id) {
		FriendService.rejectRequest(u_id).then(function(response) {
			console.log("Entering Rejectting Request " + u_id)
			console.log(response.status)
			alert('Friend Rejected')
			$location.path("/myFriends")
		}, function(errResponse) {
			console.log("Error accepting friend")
			console.log(errResponse.data)
			$location.path("/")
		})
	}

	$scope.friends = FriendService.getAllFriends().then(function(response) {
		console.log("Entered getAllFriends")
		console.log(response.status)
		console.log(response.data)
		$scope.friends = response.data
	}, function(response) {
		console.log(response.data)
	})
});