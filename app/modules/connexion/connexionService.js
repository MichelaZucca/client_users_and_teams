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

			// Créer un utilisateur
			// Appel de POST api/users
			function createAccount(user){
				// Préparation de la requête
				var req = {
					method: 'POST',
					url: 'http://192.168.99.100:8080/api/users',
					headers: {'Content-Type': 'application/json'},
					data: user
				};

				var status = {};
				$http(req)
					.then(function (response) {
							// Mise à jour de l'état retourné
							status = {status: response.status, message: response.statusText};
						return response;
					}, function (error) {
							// Mise à jour de l'état retourné
							status = {status: error.status, message: error.statusText};
					}
				);
				return status;
			};


			// Connexion d'un utilisateur déjà enregistré
			// Appel de POST sur api/auth
			function connexion(credentials){
				// Préparation de la requête
				var req = {
					method: 'POST',
					url: 'http://192.168.99.100:8080/api/auth',
					headers: {		 
							'Accept': 'application/json, text/plain, */*'},
					data: credentials
				};
				// objet de retour
				var status = {};

				$http(req).then(function (response) {
						// Mise à jour des informations pour initialisation du profile
						profileService.setToken(response.data);
						profileService.setUsername(credentials.username);
						profileService.getUser(credentials.username);
						profileService.getTeamsOfUser(credentials.username);
						// Mise à jour de l'état retourné
						status = {status: response.status, message: response.statusText};
					}, function (error) {
						// Mise à jour de l'état retourné
						status = {status: error.status, message: error.statusText};
					}
				);
				return status;
			};

			// Fonctions exposées à l'utilisation
			return {
				connexion: connexion,
				createAccount: createAccount
			};
		}

})();
