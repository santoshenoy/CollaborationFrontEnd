app
		.controller(
				'UserController',
				function($scope, $location, UserService, $rootScope,
						$cookieStore, $http) {
					console.log('Entered the User Controller')
					var self = this;
					$scope.users;
					$scope.user = {
						id : '',
						nam : '',
						psswrd : '',
						mail : '',
						role : '',
						isOnline : '',
						dob : '',
						mobile : '',
						gender : '',
						address : '',
						status : '',
						date4 : ''
					};
					$scope.message;
					$scope.registerUser = function() {
						console
								.log('Entered function to save in User Controller')
						UserService.registerUser($scope.user).then(
								function(response) {
									console.log("Registration success"
											+ response.status)
									$location.path("/home");
								});
					}

					self.authenticate = function(user) {
						console.log("Authenticate Function")
						UserService
								.authenticate(user)
								.then(
										function(d) {
											$scope.user = d;
											console.log("User ErrorCode - "
													+ $scope.user.errorCode)
											if ($scope.user.status == 'R') {
												alert("Your Registration has been rejected. Please contact Admin");
												user.setErrorCode("404");
												user
														.setErrorMsg("Registration rejected")
											}
											if ($scope.user.status == 'N') {
												alert("Your registration is not approved");
												user.setErrorCode("404");
												user
														.setErrorMsg("Your registration is not approved");
											}
											if ($scope.user.id == null) {
												alert("Status is NULL");
												user.setErrorCode("404");
												user.setErrorMsg("NULL");
											} else {
												console
														.log("Valid Credentials, Navigating to Home Page")
												$rootScope.currentUser = {
													id : $scope.user.id,
													nam : $scope.user.nam,
													psswrd : $scope.user.psswrd,
													mail : $scope.user.mail,
													role : $scope.user.role,
													isOnline : $scope.user.isOnline,
													dob : $scope.user.dob,
													mobile : $scope.user.mobile,
													gender : $scope.user.gender,
													address : $scope.user.address,
													status : $scope.user.status,
													date4 : $scope.user.date4
												};
												$http.defaults.headers.common['Authorization'] = 'Basic'
														+ $rootScope.currentUser;
												$cookieStore.put('currentUser',
														$rootScope.currentUser)
												$location.path("/");
											}

										},
										function(errResponse) {
											console
													.error("Error Authenticating User")
										});
					};

					self.login = function() {
						console.log("Validating Login" + $scope.user);
						self.authenticate($scope.user);
					};

					self.logout = function() {
						console.log("Entering Logout Function");
						$rootScope.currentUser = {};
						$cookieStore.remove('currentUser');
						console.log("Calling session Logout");
						UserService.logout()
						$location.path('/login');
					}

					function getAllUsers() {
						console.log("Entered getAllUsers")
						UserService.getAllUsers().then(function(response) {
							console.log(response.status)
							console.log(response.data)
							$scope.users = response.data
						})
					}
					getAllUsers()
				})