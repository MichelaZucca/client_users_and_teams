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
		.module('profile')
		.factory('ProfileService', Profile);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Profile.$inject = ['$http'];

		function Profile ($http) {

		}

})();
