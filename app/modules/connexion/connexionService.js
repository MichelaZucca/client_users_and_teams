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

				$http(req)
					.then(function (response) {
					// this callback will be called asynchronously
					// when the response is available
						console.log('response : ');
						console.log(response);
						return response;
					}, function (response) {
						// called asynchronously if an error occurs
						// or server returns response with an error status.
						console.log('error : ');
						console.log(response);
					}
				);
			};


				function connexion(credentials){
					console.log('Connexion enter credentials :');
					console.log(credentials);
					var req = {
						method: 'POST',
						url: 'http://192.168.99.100:8080/api/auth',
						headers: {		 
    							'Accept': 'application/json, text/plain, */*'},
						data: credentials
					};
				
					console.log('req : ');
					console.log(req);
	
					$http(req).then(function (response) {
							// this callback will be called asynchronously
							// when the response is available
							console.log('response : ');
							console.log(response);
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
