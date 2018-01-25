(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:profileCtrl
	* @description
	* # profileCtrl
	* Controller of the app
	*/

  	angular
		.module('users-and-teams')
		.controller('ProfileCtrl', Profile);

		Profile.$inject = ['profileService'];
		
		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Profile(profileService) {
			/*jshint validthis: true */
			var vm = this;

			vm.showUpdate = false;
			vm.token = '';

			vm.setToken = function(token){
				vm.token = token;
			};

			vm.profile = {
				id: profileService.getId(),
				username: profileService.getUsername(),
				firstName: profileService.getFirstName(),
				lastName: profileService.getLastName(),
				email:profileService.getEmail(),
			};

			vm.profileUpdate = {
				username:'',
				firstName:'',
				lastName: '',
				email:'',
				password: '',
				profil_password:'',
			};

			vm.listTeams = { 
				teams:	profileService.getMyTeams(),
				select : null,
			};

			vm.isCreated = false;
		
			vm.nameTeamSelect = 'Not selected';

			vm.createTeamName = '';

			vm.showCreateTeam = function(){
				vm.isCreated = true;
			};

			vm.createTeam = function(){
				profileService.createTeam(vm.createTeamName);
				vm.isCreated = false;
			};

			vm.cheklogin = function(){
				var state = profileService.getToken();
				if(state === ''){
					return false;
				}
				return true;
			};

			vm.update = function(){
				vm.profileUpdate.firstName = vm.profile.firstName;
				vm.profileUpdate.lastName = vm.profile.lastName;
				vm.profileUpdate.email = vm.profile.email;
				vm.profileUpdate.username = vm.profile.username;

				vm.showUpdate = true;
			};

			vm.selectTeam = function(){
				var idTeam = 0;

				vm.listTeams.teams.forEach( (element) => {
					if(element.name === vm.nameTeamSelect){
						vm.listTeams.select = element;
					}
				});
				
			};

			vm.putUpdate = function(){
				if(vm.profileUpdate.username != '' && 
				vm.profileUpdate.password != '' &&
				vm.profileUpdate.email != '' && 
				vm.profileUpdate != '' &&
				vm.profileUpdate != '' &&
				vm.profileUpdate.confirm_password === vm.profileUpdate.password){
					
					var status = profileService.updateUser(vm.profile.username, {
						email: vm.profileUpdate.email,
						firstName: vm.profileUpdate.firstName,
						lastName: vm.profileUpdate.lastName,
						password: vm.profileUpdate.password,
					});

					if(status === 201){
						vm.profile = vm.profileUpdate;
					}
				}

			};

			vm.cancelUpdate = function(){
				vm.showUpdate = false;
				profileService.setToken('');
			};

		}

})();
