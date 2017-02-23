app.controller('BlogController', function($scope, $location, BlogService) {
	console.log('Entered BlogController')
	$scope.blogs;
	$scope.blog = {
		id : '',
		name : '',
		description : '',
		u_id : '',
		status : '',
		b_date : '',
	};
	$scope.message;
	$scope.registerBlog = function() {
		console.log('Entered function to save in Blog Controller')
		BlogService.registerBlog($scope.blog).then(function(response) {
			console.log("Blog Registration success" + response.status)
			$location.path("/home");
		});
	}
	
	function getAllBlogs() {
		console.log("Entered getAllBlogs")
		BlogService.getAllBlogs().then(function(response) {
			console.log(response.status)
			console.log(response.data)
			$scope.blogs = response.data
		})
	}
	getAllBlogs()
});