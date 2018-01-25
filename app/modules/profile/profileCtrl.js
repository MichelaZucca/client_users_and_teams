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


			vm.profile = {"id":2,
				username:"micky",
				firstName:"lolo",
				lastName:"chchca",
				email:"michela.zucca@lala.ch"
			};

			vm.listTeams = [];

			vm.listUsers = [];


		}

})();
