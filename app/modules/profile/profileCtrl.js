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

			vm.listTeams = [
				{
					name:"Team un",
					size: 2,
				},
				{
					name:"Team deux",
					size: 3,
				},
				{
					name:"Team trois",
					size: 2,
				},
			];

			vm.listUsers = [
				{
					username:"user1",
					email:"user1a@mail.ch"
				},
				{
					username:"user2",
					email:"user2@mail.ch"
				},
				{
					username:"user3",
					email:"user3@mail.ch"
				},
			];

			vm.teamSelected = '';

			vm.update = function(){
				vm.profileUpdate.firstName = vm.profile.firstName;
				vm.profileUpdate.lastName = vm.profile.lastName;
				vm.profileUpdate.email = vm.profile.email;
				vm.profileUpdate.username = vm.profile.username;

				vm.showUpdate = true;
			}

			vm.selectTeam = function(){
				const team = vm.selectTeam;
				
			}

			vm.putUpdate = function(){
				console.log(vm.profileUpdate);
				if(vm.profileUpdate.username != '' && 
				vm.profileUpdate.password != '' &&
				vm.profileUpdate.email != '' && 
				vm.profileUpdate != '' &&
				vm.profileUpdate != '' &&
				vm.profileUpdate.confirm_password === vm.profileUpdate.password){
					console.log('update form');
					
				}

			}
			vm.cancelUpdate = function(){
				vm.showUpdate = false;
				console.log(profileService.getToken());
			}

		}

})();
