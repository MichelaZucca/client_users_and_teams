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

		connexionService.$inject = ['$http'];

		function connexionService ($http) {

			function createAccount(user){
				console.log('call create');
				console.log(user);
				var req = {
					method: 'POST',
					url: 'http://192.168.99.100:8080/api/users',
					headers: {'Content-Type': 'application/json'},
					data: user
				};
			
				console.log('req : ');
				console.log(req);

				$http(req).then(function successCallback(response) {
					// this callback will be called asynchronously
					// when the response is available
					console.log('response : ');
					console.log(response);
					return response;
					}, function errorCallback(error) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
					console.log('error : ');
					console.log(error);
					});
				}


				function connexion(user){
					console.log('call create');
					console.log(user);
					var req = {
						method: 'POST',
						url: 'http://192.168.99.100:8080/api/auth',
						headers: {'Content-Type': 'application/json'},
						data: user
					};
				
					console.log('req : ');
					console.log(req);
	
					$http(req).then(function successCallback(response) {
						// this callback will be called asynchronously
						// when the response is available
						console.log('response : ');
						console.log(response);
						return response;
						}, function errorCallback(error) {
						// called asynchronously if an error occurs
						// or server returns response with an error status.
						console.log('error : ');
						console.log(error);
						});
					}

				return {
					connexion:connexion,
					createAccount: createAccount
				};
		}

})();
