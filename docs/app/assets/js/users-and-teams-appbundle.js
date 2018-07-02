/*!
* users-and-teams - v0.0.1 - MIT LICENSE 2018-07-02. 
* @author Lozzikit
*/
(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('users-and-teams', [
		'ngResource',
		'ngAria',
		'ui.bootstrap',
		'ngMaterial',
		'ngMdIcons',
		'ngCookies',
		'ngAnimate',
		'ngMessages',
		'ngTouch',
		'ngSanitize',
		'ui.router',
		'home',
		'profile',
		'connexion',
	]);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('users-and-teams')
		.config(configure)
		.run(runBlock);

		configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider','$mdThemingProvider'];

		function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider) {
	
			$locationProvider.hashPrefix('!');
	
			// This is required for Browser Sync to work poperly
			$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	
			
			$urlRouterProvider
				.otherwise('/dashboard');
			
			$mdThemingProvider
				.theme('input'); 
		}
	
		runBlock.$inject = ['$rootScope'];
	
		function runBlock($rootScope) {
			'use strict';
	
			console.log('AngularJS run() function...');
		}
	
	


})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:connexionModule
	 * @description
	 * # connexionModule
	 * Module of the app
	 */

  	angular.module('connexion', []);

})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.module:homeModule
	* @description
	* # homeModule
	* Module of the app
	*/

	angular.module('home', []);
})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:profileModule
	 * @description
	 * # profileModule
	 * Module of the app
	 */

  	angular.module('profile', []);

})();

'use strict';

/**
 * @ngdoc function
 * @name app.route:connexionRoute
 * @description
 * # connexionRoute
 * Route of the app
 */

angular.module('connexion')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.connexion', {
				url:'/connexion',
				templateUrl: 'app/modules/connexion/connexion.html',
				controller: 'ConnexionCtrl',
				controllerAs: 'vm'
			});

		
	}]);

'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('users-and-teams')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('home', {
				url: '',
				abstract: true,
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			})
			.state('home.dashboard', {
				url:'/dashboard',
				templateUrl: 'app/modules/home/dashboard.html'
			});
			
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:profileRoute
 * @description
 * # profileRoute
 * Route of the app
 */

angular.module('profile')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.profile', {
				url:'/profile',
				templateUrl: 'app/modules/profile/profile.html',
				controller: 'ProfileCtrl',
				controllerAs: 'vm'
			});

		
	}]);

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:connexionCtrl
	* @description
	* # connexionCtrl
	* Controller of the app
	*/

  	angular
		.module('users-and-teams')
		.controller('ConnexionCtrl', Connexion)
		.directive("compareTo", compareTo);

		Connexion.$inject = ['connexionService','homeService', 'profileService' ,'$scope','$mdToast', '$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/
		function compareTo () {
			return {
			  require: "ngModel",
			  scope: {
				  otherModelValue: "=compareTo"
			  },
			  link: function(scope, element, attributes, ngModel) {
		  
				  ngModel.$validators.compareTo = function(modelValue) {
					  return modelValue == scope.otherModelValue;
				  };
		  
				  scope.$watch("otherModelValue", function() {
					  ngModel.$validate();
				  });
			  }
			};
		  }

		function Connexion(connexionService, homeService, profileService, $scope, $mdToast, $timeout) {
			var vm = this;

			/**
			 *  switch the view
			 *  for create an account => true
			 *  for sign-in => false
			 */
			vm.showNewAccount = false;

			// Select input for switch the view
			vm.account = {
				type : [
					{id: '0', value: 'new account'},
					{id: '1', value: 'login'},
				],
				select : {id: '1', value: 'login'}
			}

			// Save the new user infos
			vm.newUser = {
				username:'',
				password:'',
				email:'',
				firstName:'',
				lastName:'',
			};
			// Confirm password input
			vm.confirmPassword = '';

			// Save info for sign-in
			vm.user = {
				password: '',
				username :'',
			};

			// call for switch view 
			vm.switchView = function(){
				if(vm.account.select === 'new account'){
					vm.showNewAccount = true;
				}else{
					vm.showNewAccount = false;
				}
			};

			// call for sign-in 
			vm.signIn = function(){
				if(vm.user.username != '' && vm.user.password!= ''){
					connexionService.signIn(vm.user);
					
					$timeout( function(){
					var status = homeService.getStatus();
					if(status.code == '200'){
						vm.toats('You are connected !');
						// Get inforamtions for profile
						profileService.getUser(vm.user.username);
						profileService.getTeamsOfUser(vm.user.username);
						profileService.getUsers();
					}else{
						vm.toats('Sorry, this user does not exist !');
					}
					},100);
				}
			}

			vm.createAccount = function(){
				if(vm.newUser.username != '' && 
					vm.newUser.password != '' &&
					vm.newUser.email != '' && 
					vm.firstName != '' &&
					vm.lastName != '' &&
					vm.confirmPassword === vm.newUser.password){
						connexionService.createAccount(vm.newUser);	

						$timeout( function(){
							var status = homeService.getStatus();
							if(status.code == '201'){
								vm.toats('account creates successfully !');
							}else{
								vm.toats('Sorry, creation failed !');
							}
						},300);
					}
			}
		
			vm.toats = function(message){
				var pos = {
					bottom:false,
					top: true,
					left:false,
					right:true,
				};
				
				$mdToast.show(
				$mdToast.simple()
					.textContent(message)
					.parent(document.querySelectorAll('#toaster'))
					.position('bottom')
					.hideDelay(3000)
				);
			}
		}
		 		
})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('users-and-teams')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService) {
		/*jshint validthis: true */
		var vm = this;

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:LayoutCtrl
	* @description
	* # LayoutCtrl
	* Controller of the app
	*/

	angular
		.module('users-and-teams')
		.controller('LayoutCtrl', Layout);

	Layout.$inject = ['$mdSidenav', '$cookies', '$state', '$mdToast', '$mdDialog'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Layout($mdSidenav, $cookies, $state, $mdToast, $mdDialog ) {
		/*jshint validthis: true */
		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.changePassword = function () {
			$mdToast.show(
				$mdToast.simple()
				.content('Password clicked!')
				.position('top right')
				.hideDelay(2000)
			);
		};

		vm.changeProfile = function (ev) {
			$mdDialog.show({
				controller: DialogController,
				templateUrl: 'tabDialog.tmpl.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true
			})
			.then(function(answer) {
				$mdToast.show(
					$mdToast.simple()
					.content('You said the information was "' + answer + '".')
					.position('top right')
					.hideDelay(2000)
				);

			}, function() {
				$mdToast.show(
					$mdToast.simple()
					.content('You cancelled the dialog.')
					.position('top right')
					.hideDelay(2000)
				);
			});

			function DialogController($scope, $mdDialog) {
				$scope.hide = function() {
					$mdDialog.hide();
				};

				$scope.cancel = function() {
					$mdDialog.cancel();
				};

				$scope.answer = function(answer) {
					$mdDialog.hide(answer);
				};
			}
		};


		vm.logOut = function () {

			alert('Implement your Function Here');
			// $cookies.put('dev_appserver_login', ' ');
			//$state.go('out', {}, {reload: true});

		};

		var originatorEv;
		vm.openMenu = function ($mdOpenMenu, ev) {
			originatorEv = ev;
			$mdOpenMenu(ev);
		};

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:SidenavCtrl
	* @description
	* # SidenavCtrl
	* Controller of the app
	*/
	angular
		.module('users-and-teams')
		.controller('SidenavCtrl', SidenavCtrl)
		.controller('SettingsCtrl', SettingsCtrl);

	// Injecting Denpendencies

	SidenavCtrl.$inject = ['$mdSidenav', '$state', '$mdBottomSheet', '$mdToast', 'MenuService', '$scope'];
	SettingsCtrl.$inject = ['$mdBottomSheet'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function SidenavCtrl($mdSidenav, $state, $mdBottomSheet, $mdToast, MenuService, $scope) {
		/*jshint validthis: true */
		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.closeSidenav = function() {
			$mdSidenav('left').close();
		};

		// Close menu on small screen after click on menu item.
		// Only use $scope in controllerAs when necessary; for example, publishing and subscribing events using $emit, $broadcast, $on or $watch.
		$scope.$on('$stateChangeSuccess', vm.closeSidenav);

		vm.menu = MenuService.listMenu();

		vm.admin = [
			{
				link: 'showListBottomSheet($event)',
				title: 'Settings',
				icon: 'settings'
			}
		];

		vm.navigateTo = function (target) {

			var page = target;

			$state.go(page);

		};

		vm.showSettingsBottom = function ($event) {
			vm.alert = '';
			$mdBottomSheet.show({
				template: '<md-bottom-sheet class="md-grid" layout="column" ng-cloak><div layout="row" layout-align="center center"><h4>With clickOutsideToClose option, drag down or press ESC to close</h4></div><md-list flex layout="row" layout-align="center center"><md-list-item ng-repeat="item in vm.items"><md-button class="md-grid-item-content" ng-click="vm.listItemClick($index)"><md-icon class="md-48">{{item.icon}}</md-icon><div class="md-grid-text"> {{ item.name }} </div></md-button></md-list-item></md-list></md-bottom-sheet>',
				controller: 'SettingsCtrl',
				controllerAs: 'vm',
				targetEvent: $event
			}).then(function (clickedItem) {
				$mdToast.show(
					$mdToast.simple()
					.content(clickedItem.name + ' clicked!')
					.position('top right')
					.hideDelay(2000)
				);
			});
		};

	}

	function SettingsCtrl($mdBottomSheet) {
		/*jshint validthis: true */
		var vm = this;

		vm.items = [
			{name: 'Roles', icon: 'assignment_ind'},
			{name: 'Notes', icon: 'speaker_notes'},
			{name: 'Tasks', icon: 'view_list'},
			{name: 'Inbox', icon: 'inbox'}
		];

		vm.listItemClick = function ($index) {
			var clickedItem = vm.items[$index];
			$mdBottomSheet.hide(clickedItem);
		};
	}

})();

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

		Profile.$inject = ['profileService', 'homeService', '$timeout'];
		
		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Profile(profileService,homeService, $timeout) {
			/*jshint validthis: true */
			var vm = this;

			// show/hide views
			vm.isUpdating = false;
			vm.isTeamCreating = false;

			vm.token = homeService.getToken();
			vm.profile = homeService.getUserInfos();
			vm.listTeams = { 
				teams: homeService.getListMyTeams(),
				select : null,
			};	
			vm.listUsers ={
				users: homeService.getListUsers(),
				select : null,
			}
			vm.profileUpdate = {
				username:'',
				firstName:'',
				lastName: '',
				email:'',
				password: '',
				profil_password:'',
			};

			vm.nameTeamSelect = '';
			vm.createTeamName = '';
			vm.selectUserOnList = '';

			vm.isUpdatingOrCreating = function(){
				if(vm.isTeamCreating || vm.isUpdating){
					return true;
				}
				return false;
			}

			


			// update a team
			vm.updateTeam = function(){
				if(vm.listUsers.select != null){
					var alreadyOnList = false;
					vm.listTeams.select.members.forEach((element)=> {
						if(element.username == vm.listUsers.select.username){
							alreadyOnList = true;
						}
					});
					if(alreadyOnList == false){
						profileService.updateTeam(vm.listTeams.select, vm.listUsers.select);
					}
				}
			};

			// update listViews of teams 
			vm.updateListTeams = function(){
				var list = homeService.getListMyTeams();
				vm.listTeams.teams = list;
			};

			// display creation of team
			vm.showCreateTeam = function(){
				vm.isTeamCreating = true;
			};
			// hide creation of team
			vm.hideCreateTeam = function(){
				vm.isTeamCreating = false;
			}

			// create a team
			vm.createTeam = function(){
				profileService.createTeam(vm.createTeamName);
				vm.isTeamCreating = false;
				// wait for the server to be updated 
				$timeout( function(){
					profileService.getTeamsOfUser(homeService.getUserName());	
				}, 500);
				$timeout( function(){
					vm.updateListTeams();
				}, 600);
				
			};

			// Check if the user is logging
			// display or hide the profil views
			vm.cheklogin = function(){
				var token = homeService.getToken();
				if(token === ''){
					return false;
				}
				return true;
			};

			// initialized infos of views update
			vm.update = function(){
				var infos = homeService.getUserInfos();
				vm.profileUpdate.firstName = infos.firstName;
				vm.profileUpdate.lastName = infos.lastName;
				vm.profileUpdate.email = infos.email;
				vm.profileUpdate.username = infos.username;

				vm.isUpdating = true;
			};

			// select the team corresponding to the select input
			vm.selectTeam = function(){
				vm.listTeams.teams.forEach( (element) => {
					if(element.name === vm.nameTeamSelect){
						vm.listTeams.select = element;
					}
				});
			};

			// Select the user for add on selected team
			vm.selectUser = function(){
				vm.listUsers.users.forEach((element) =>{
					if(element.username === vm.selectUserOnList){
						vm.listUsers.select = element;
					}
				});
			}

			// update account of user
			vm.putUpdate = function(){
				if(vm.profileUpdate.username != '' && 
				vm.profileUpdate.password != '' &&
				vm.profileUpdate.email != '' && 
				vm.profileUpdate != '' &&
				vm.profileUpdate != '' &&
				vm.profileUpdate.confirm_password === vm.profileUpdate.password){
					
					profileService.updateUser(
						homeService.getUserName(), {
						email: vm.profileUpdate.email,
						firstName: vm.profileUpdate.firstName,
						lastName: vm.profileUpdate.lastName,
						password: vm.profileUpdate.password,
						});
				}
				vm.isUpdating = false;
			};

			// hide the update view
			vm.cancelUpdate = function(){
				vm.isUpdating = false;
			};
	}

})();

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
	
		connexionService.$inject = ['$http', 'profileService', 'homeService'];

		function connexionService ($http, profileService, homeService) {

			// Create a new user
			// Call POST api/users
			function createAccount(user){
				var req = {
					method: 'POST',
					url: 'http://localhost:8080/api/users',
					headers: {'Content-Type': 'application/json'},
					data: user
				};
				
				$http(req)
					.then(function (response) {
						var status = {code: response.status, message: response.statusText, data:{}};
						homeService.setStatus(status);
					}, function (error) {
						var status = {code: error.status, message: error.statusText, data:{}};
						homeService.setStatus(status);
					}
				);	
			};


			// User Authentication
			// Call POST sur api/auth
			function signIn(credentials){
				var req = {
					method: 'POST',
					url: 'http://localhost:8080/api/auth',
					headers: {		 
							'Accept': 'application/json, text/plain, */*'},
					data: credentials
				};

				$http(req)
					.then(function (response) {
						var status = {code: response.status, message: response.statusText, data:{}};
						homeService.setStatus(status);
						// Save informations of users
						homeService.setToken(response.data);
						homeService.setUserName(response.data.username);
					}, function (error) {
						var status = {code: error.status, message: error.statusText, data:{}};
						homeService.setStatus(status);
						homeService.setToken('');
					}
				);
			};

			return {
				signIn: signIn,
				createAccount: createAccount,
			};
		}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	* Contains the information of the connected user.
	*/

	angular.module('users-and-teams')
		.factory('homeService', homeService);

	homeService.$inject = [];

	function homeService() {

		// token of the connected user
		var token = '';

		// informations of the connected user
		var userInfos = {
			username: '',
			firstName:'',
			lastName:'',
			id:'',
			email:'',
		};

		// Status of all request on API 
		// can be get
		var status = {
			code : '',
			message : '',
			data: {},
		};

		// List of teams of the connected user
		var listMyTeams = [];

		var listUsers = [];
	
		/** Getters / Setters */
		function setListMyTeams(newList){
			listMyTeams = [];
			for(var i= 0; i < newList.length; i++){
				listMyTeams.push(newList[i]);
			}
		}
		function getListMyTeams(){
			return listMyTeams;
		}
		function setToken(newToken){
			token = newToken;
		}
		function getToken(){
			return token;
		}
		function getUserName(){
			return userInfos.username;
		}
		function setUserName(newUsername){
			userInfos.username = newUsername;
		}
		function setStatus(newStatus){
			status.code = newStatus.code;
			status.message = newStatus.message;
			status.data = newStatus.data;
		}
		function getStatus(){
			return status;
		}
		function setUserInfos(infos){
			userInfos.username = infos.username;
			userInfos.firstName = infos.firstName;
			userInfos.lastName = infos.lastName;
			userInfos.id = infos.id;
			userInfos.email = infos.email;
		}
		function getUserInfos(){
			return userInfos;
		}
		function setListUsers(newList){
			listUsers = [];
			for(var i= 0; i < newList.length; i++){
				listUsers.push(newList[i]);
			}
		}
		function getListUsers(){
			return listUsers;
		}
		
		// Display to the console the status of request API
		function checkStatus(code){
			if(status.code == code){
				console.log('successfuly');
			}else{
				console.log('failed');
			}
		}

		return {
			setStatus: setStatus,
			getStatus: getStatus,
			checkStatus: checkStatus,
			setUserInfos: setUserInfos,	
			getUserInfos: getUserInfos,	
			setToken: setToken,	
			getToken: getToken,
			getUserName: getUserName,
			setUserName: setUserName,
			getListMyTeams: getListMyTeams,
			setListMyTeams: setListMyTeams,
			setListUsers: setListUsers,
			getListUsers: getListUsers,
		};
	}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('users-and-teams')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'profile',
							name: 'Profile'
					},
			    
					{
						link: 'connexion',
							name: 'Connexion'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('users-and-teams')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'profile',
							name: 'Profile'
					},
			    
					{
						link: 'connexion',
							name: 'Connexion'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();

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

		profileService.$inject = ['$http','homeService'];

		function profileService ($http, homeService) {

			// Get the users informations
			// Call GET api/users/{username}
			function getUser(username){
				var req = {
					method: 'GET',
					url: 'http://localhost:8080/api/users/'+ username,
					headers: {
						'Authorization': 'Bearer ' + homeService.getToken(),
						'Accept': 'application/json',
					},
				};
	
				$http(req)
					.then(function (response) {
						homeService.setUserInfos(response.data);
						var status = { status: response.status, message: response.statusText, data:{} };
						homeService.setStatus(status);
					}, function (error) {
						var status = { status: error.status, message: error.statusText, data:{} };
						homeService.setStatus(status);
					}
				);
			}

			// Update the user account
			// Call PUT api/users/{username}
			function updateUser(username, updateData){
				var req = {
					method: 'PUT',
					url: 'http://localhost:8080/api/users/' + username,
					headers: {
						'Authorization': 'Bearer ' + homeService.getToken(),
						'Accept': 'application/json',
					},
					data: updateData,
				};

				$http(req)
					.then(function (response) {
						// update user infos
						homeService.setUserInfos(
							{
								username: updateData.username,
								firstName: updateData.firstName,
								lastName: updateData.lastName,
								id: updateData.id,
								email: updateData.email,
							}
						);
	
						var status = { status: response.status, message: response.statusText, data:{} };
						homeService.setStatus(status);
					}, function (error) {
						var status = { status: error.status, message: error.statusText, data:{} };
						homeService.setStatus(status);
					});
			};

			// Get teams of user
			// Call GET api/users/{username}/teams
			function getTeamsOfUser(username){
				var req = {
					method: 'GET',
					url: 'http://localhost:8080/api/users/' + username +'/teams',
					headers: {
						'Authorization': 'Bearer ' + homeService.getToken(),
						'Accept': 'application/json',
					},
				};

				$http(req)
					.then(function (response) {
						homeService.setListMyTeams(response.data);
						var status = { status: response.status, message: response.statusText, data:{} };
						homeService.setStatus(status);		
					}, function (error) {
						var status = { status: error.status, message: error.statusText, data:{} };
						homeService.setStatus(status);
					});
			};

			// Get a team with id of team
			// Call GET sur api/teams/{id_team}
			function getTeam(idTeam){
				var req = {
					method: 'GET',
					url: 'http://localhost:8080/api/teams/' + idTeam,
					headers: {
						'Authorization': 'Bearer ' + homeService.getToken(),
						'Accept': 'application/json',
					},
				};

				$http(req)
					.then(function (response) {
						var status = { status: response.status, message: response.statusText, data:{} };
						homeService.setStatus(status);	
					}, function (error) {
						var status = { status: error.status, message: error.statusText, data:{} };
						homeService.setStatus(status);
					});
			};

			// Create a new team
			// Call POST api/users/teams
			function createTeam(name){
				var infos = homeService.getUserInfos();
				// dataset for the POST request
				var datas = {
						members: [
						  {
							email: infos.email,
							firstName: infos.firstName,
							id: infos.id,
							lastName: infos.lastName,
							username: infos.username,
						  }
						],
						name: name
					  };

				var req = {
					method: 'POST',
					url: 'http://localhost:8080//api/teams',
					headers: {
						'Authorization': 'Bearer ' + homeService.getToken(),
						'Accept': 'application/json',
					},
					data: datas
				};

				$http(req)
					.then(function (response) {
						var status = { status: response.status, message: response.statusText, data:{} };
						homeService.setStatus(status);
					}, function (error) {
						var status = { status: error.status, message: error.statusText, data:{} };
						homeService.setStatus(status);
					}
				);
			};

			// Update a team
			// Call PUT api/teams
			function updateTeam(team, newMember){
				var datas = {
					id: team.id,
					name: team.name,
					members: team.members,
				};

				datas.members.push(newMember);

				var req = {
					method: 'PUT',
					url: 'http://localhost:8080//api/teams/'+ team.id,
					headers: {
						'Authorization': 'Bearer ' + homeService.getToken(),
						'Accept': 'application/json',
					},
					data: datas
				};

					$http(req)
						.then(function (response) {
							var status = { status: response.status, message: response.statusText, data:{} };
							homeService.setStatus(status);
						}, function (error) {
							var status = { status: error.status, message: error.statusText, data:{} };
							homeService.setStatus(status);
						}
					);
				};

			// Get the users informations
			// Call GET api/users/{username}
			function getUsers(){
				var req = {
					method: 'GET',
					url: 'http://localhost:8080/api/users/',
					headers: {
						'Authorization': 'Bearer ' + homeService.getToken(),
						'Accept': 'application/json',
					},
				};
	
				$http(req)
					.then(function (response) {
						homeService.setListUsers(response.data);
						var status = { status: response.status, message: response.statusText, data:{} };
						homeService.setStatus(status);
					}, function (error) {
						var status = { status: error.status, message: error.statusText, data:{} };
						homeService.setStatus(status);
					}
				);
			}

			return{
				getUser: getUser,
				updateUser: updateUser,
				getTeamsOfUser: getTeamsOfUser,
				getTeam: getTeam,
				createTeam: createTeam,
				getUsers: getUsers,
				updateTeam: updateTeam,
			};
		}

})();
