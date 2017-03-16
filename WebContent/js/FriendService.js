app.factory('FriendService', function($http) {
	console.log('Entered the Friend Service')
	var BASE_URL = "http://localhost:8083/CollaborationRestController/"
	return {
		registerFriend : function(friend) {
			return $http.post(BASE_URL + "addFriend/", friend).then(
					function(response) {
						console.log(response.status)
						console.log(response.headers.location)
						return response.status
					}, function(response) {
						console.log(response.status)
						return response.status
					});
		},
		
		
		getPendingRequest : function()
		{
			console.log("Getting Pending Requests");
			return $http.get(BASE_URL + "viewPendingRequest");
		},

		
		acceptRequest : function(u_id)
		{
			console.log("Accepting Request");
			return $http.get(BASE_URL + "acceptRequest-"+u_id)
			.then
			(
				function(response)
				{
					return response.data;
				},
				function(errResponse)
				{
					console.log("Error Adding Friend");
					return $q.reject(errResponse);
				}
			);
		},
		
		
		rejectRequest : function(u_id)
		{
			console.log("Reject Request");
			return $http.get(BASE_URL + "rejectRequest-"+u_id)
			.then
			(
				function(response)
				{
					return response.data;
				},
				function(errResponse)
				{
					console.log("Error while rejecting Friend");
					return $q.reject(errResponse);
				}
			);
		},
		
		
		getAllFriends : function() {
			console.log('Entering getAllFriends in Friend Service')
			return $http.get(BASE_URL + "listFriend")
		}
	}
})