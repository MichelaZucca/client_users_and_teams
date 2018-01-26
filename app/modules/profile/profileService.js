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

		profileService.$inject = ['$http'];

		function profileService ($http) {

			var token = '';
			var username = '';
			var userResponse = {
				username: '',
				firstName: '',
				id: '',
				lastName: '',
				email: '',
			};

			var myTeams = {};

			function getMyTeams(){
				return myTeams;
			};
			function setUsername(name){
				console.log('username have been saved');
				username = name;
			};
			function getUsername(){
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

			// Permet de récupérer les informations d'un utilisateur
			// Appel de GET api/users/{username}
			function getUser(username){
				// Préparation de la requête
				var req = {
					method: 'GET',
					url: 'http://localhost:8080/api/users/'+ username,
					headers: {
						'Authorization': 'Bearer ' + token,
						'Accept': 'application/json',
					},
				};
	
				// Objet de retour
				var state = {};

				$http(req)
					.then(function (response) {
						userResponse = response.data;
						// Mise à jour de l'état retourné
						status = { status: response.status, message: response.statusText};
					}, function (error) {
						// Mise à jour de l'état retourné
						status = {status: error.status, message: error.statusText};
					}
				);
				return status;
			}

			// Fonction pour mettre à jour un utilisateur
			// Appel de PUT api/users/{username}
			function updateUser(username, updateData){
				// Préparation de la requête
				var req = {
					method: 'PUT',
					url: 'http://localhost:8080/api/users/' + username,
					headers: {
						'Authorization': 'Bearer ' + token,
						'Accept': 'application/json',
					},
					data: updateData,
				};

				// Objet de retour
				var status ={};

				$http(req)
					.then(function (response) {
						// Mise à jour des données
						userResponse.email = updateData.email;
						userResponse.firstName = updateData.firstName;
						userResponse.lastName = updateData.lastName;
						// Mise à jour de l'état retourné
						status = { status: response.status, message: response.statusText};
					}, function (error) {
						// Mise à jour de l'état retourné
						status = {status: error.status, message: error.statusText};
					}
				);
				return status;
			};

			// Fonction pour mettre à jour un utilisateur
			// Appel de PUT api/users/{username}
			function getTeamsOfUser(username){
				// Préparation de la requête
				var req = {
					method: 'GET',
					url: 'http://localhost:8080/api/users/' + username+'/teams',
					headers: {
						'Authorization': 'Bearer ' + token,
						'Accept': 'application/json',
					},
				};

				// Objet de retour
				var status ={};

				$http(req)
					.then(function (response) {
						// Mise à jour de l'état retourné
						status = { status: response.status, message: response.statusText};
						myTeams = response.data;
					}, function (error) {
						// Mise à jour de l'état retourné
						status = {status: error.status, message: error.statusText};
					}
				);
				return status;
			};

			function getTeam(idTeam){
					// Préparation de la requête
					var req = {
						method: 'GET',
						url: 'http://localhost:8080/api/teams/' + idTeam,
						headers: {
							'Authorization': 'Bearer ' + token,
							'Accept': 'application/json',
						},
					};
	
					// Objet de retour
					var status ={};
	
					$http(req)
						.then(function (response) {
							// Mise à jour de l'état retourné
							status = {data:response, status: response.status, message: response.statusText};
						}, function (error) {
							// Mise à jour de l'état retourné
							status = {status: error.status, message: error.statusText};
						}
					);
					return status;
			};


				// Permet de récupérer les informations d'un utilisateur
			// Appel de GET api/users/{username}
			function createTeam(name){

				var datas = {
						members: [
						  {
							email: userResponse.email,
							firstName: userResponse.firstName,
							id: userResponse.id,
							lastName: userResponse.lastName,
							username: userResponse.username
						  }
						],
						name: name
					  };
				

				// Préparation de la requête
				var req = {
					method: 'POST',
					url: 'http://localhost:8080/teams',
					headers: {
						'Authorization': 'Bearer ' + token,
						'Accept': 'application/json',
					},
					data: datas
				};
	
				// Objet de retour
				var state = {};

				$http(req)
					.then(function (response) {
						userResponse = response.data;
						// Mise à jour de l'état retourné
						status = { status: response.status, message: response.statusText};
					}, function (error) {
						// Mise à jour de l'état retourné
						status = {status: error.status, message: error.statusText};
					}
				);
				return status;
			};

			// Fonctions exposées à l'utilisation
			return{
				setToken: setToken,
				getToken: getToken,
				setUsername: setUsername,
				getUsername: getUsername,
				getUser: getUser,
				getId: getId,
				getLastName: getLastName,
				getFirstName: getFirstName,
				getEmail: getEmail,
				updateUser: updateUser,
				getTeamsOfUser: getTeamsOfUser,
				getMyTeams: getMyTeams,
				getTeam: getTeam,
				createTeam: createTeam,
			};
		}

})();
