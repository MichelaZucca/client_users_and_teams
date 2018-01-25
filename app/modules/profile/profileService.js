(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:profileService
	 * @description
	 * # profileService
	 * Service of the app
	 */

  	angular
		.module('users-and-teams')
		.factory('profileService', profileService);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		profileService.$inject = ['$http'];

		function profileService ($http) {

			var token = '';
			var username = '';
			var userResponse = {
				id: '',
				username: '',
				firstName: '',
				lastName: '',
				email: '',
			};

			function setUserName(name){
				console.log('username have been saved');
				username = name;
			};
			function getUserName(){
				return username;
			};
			function setToken(jwt){
				console.log('token have been saved');
				token = jwt;
			};
			function getToken(){
				return token;
			};
			function getId(){
				return userResponse.id;
			};
			function getEmail(){
				return userResponse.email;
			};
			function getFirstName(){
				return userResponse.firstName;
			};
			function getLastName(){
				return userResponse.lastName;
			};

			function getUser(username){
				var req = {
					method: 'GET',
					url: 'http://192.168.99.100:8080/api/users/'+ username,
					headers: {
						'Authorization': 'Bearer ' + token,
						'Accept': 'application/json',
					},
				};
			
				console.log('req : ');
				console.log(req);

				$http(req).then(function (response) {
						// this callback will be called asynchronously
						// when the response is available
						console.log('response : ');
						console.log(response);
						userResponse = response.data;
					}, function (response) {
						// called asynchronously if an error occurs
						// or server returns response with an error status.
						console.log('error : ');
						console.log(response);
					}
				);
				return userResponse;
			}

			return{
				setToken: setToken,
				getToken: getToken,
				setUserName: setUserName,
				getUserName: getUserName,
				getUser:getUser,
				getId:getId,
				getLastName:getLastName,
				getFirstName:getFirstName,
				getEmail:getEmail,
			};



		}

})();
