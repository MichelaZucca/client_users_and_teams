(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:connexionService
	 * @description
	 * # connexionService
	 * Service of the app
	 */

  	angular
		.module('users-and-teams')
		.factory('connexionService', connexionService);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		connexionService.$inject = ['$http', 'profileService'];

		function connexionService ($http, profileService) {

			function createAccount(user){
				console.log('call create');
				console.log(user);
				var req = {
					method: 'POST',
					url: 'http://192.168.99.100:8080/api/users',
					headers: {'Content-Type': 'application/json'},
					data: user
				};

				$http(req)
					.then(function (response) {
						console.log('created : ');
						console.log(response);
						return response;
					}, function (response) {
						console.log('error : ');
						console.log(response);
					}
				);
			};


				function connexion(credentials){
					var req = {
						method: 'POST',
						url: 'http://192.168.99.100:8080/api/auth',
						headers: {		 
    							'Accept': 'application/json, text/plain, */*'},
						data: credentials
					};
	
					$http(req).then(function (response) {
							profileService.setToken(response.data);
							profileService.setUsername(credentials.username);
							profileService.getUser(credentials.username);
							return response;
						}, function (response) {
							// called asynchronously if an error occurs
							// or server returns response with an error status.
							console.log('error : ');
							console.log(response);
						}
					);
				};

				return {
					connexion: connexion,
					createAccount: createAccount
				};
		}

})();
