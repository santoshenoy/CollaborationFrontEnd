app.factory('BlogService', function($http) {
	console.log('Entered the Blog Service')
	var BASE_URL = "http://localhost:8081/CollaborationRestController/"
	return {
		registerBlog : function(blog) {
			return $http.post(BASE_URL + "addBlog/", blog).then(
					function(response) {
						console.log(response.status)
						console.log(response.headers.location)
						return response.status
					}, function(response) {
						console.log(response.status)
						return response.status
					});
		},
	getAllBlogs : function() {
		console.log('Entering getAllblogs in Blog Service')
		return $http.get(BASE_URL + "listBlog")
	}


	}
})