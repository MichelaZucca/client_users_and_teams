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
		.module('profile')
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

			vm.profile = {"id":2,
				username:"micky",
				firstName:"lolo",
				lastName:"chchca",
				email:"michela.zucca@lala.ch"
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
					size: 5,
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

			vm.update = function(){
				vm.showUpdate = true;
			}

		}

})();
