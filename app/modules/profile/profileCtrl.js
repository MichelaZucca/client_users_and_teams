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

		Profile.$inject = [];
		
		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Profile() {
			/*jshint validthis: true */
			var vm = this;

			vm.showUpdate = false;

			vm.profile = {
				"id":2,
				username:"micky",
				firstName:"lolo",
				lastName:"chchca",
				email:"michela.zucca@lala.ch",
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
					name:"shlgg",
					size: 2,
				},
				{
					name:"ajgajgaég",
					size: 3,
				},
				{
					name:"shllaljggg",
					size: 2,
				},
			];

			vm.listUsers = [
				{
					username:"micky",
					email:"michela.zucca@lala.ch"
				},
				{
					username:"lalalala",
					email:"lajlaglgag.zucca@lala.ch"
				},
				{
					username:"mialgakhgcky",
					email:"agajgpajggpaj.zucca@lala.ch"
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
					vm.showUpdate = false;
				}

			}

		}

})();
