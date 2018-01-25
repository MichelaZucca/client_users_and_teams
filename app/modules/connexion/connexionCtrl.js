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

		Connexion.$inject = ['connexionService'];

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

		function Connexion(connexionService) {
			/*jshint validthis: true */
			var vm = this;

			vm.showNewAccount = false;

			vm.account = {
				type : [
					{id: '0', value: 'new account'},
					{id: '1', value: 'login'},
				],
				select : {id: '1', value: 'login'}
			}

			vm.newUser = {
				username:'',
				password:'',
				email:'',
				firstName:'',
				lastName:'',
			};

			vm.confirm_password = '';

			vm.user = {
				password: '',
				username :'',
			};

			vm.changeShow = function(){
				if(vm.account.select=== 'new account'){
					vm.showNewAccount = true;
				}else{
					vm.showNewAccount = false;
				}
			};

			vm.connexion = function(){
				if(vm.user.username != '' && vm.user.password!= ''){
					var res = connexionService.connexion(vm.user);
					if(res.status === 201){
						console.log('connexion etablished '+ res.status);
					}else{
						console.log('connexion failed '+ res.status);
					}
				}
				
			}

			vm.createAccount = function(){
				if(vm.newUser.username != '' && 
					vm.newUser.password != '' &&
					vm.newUser.email != '' && 
					vm.firstName != '' &&
					vm.lastName != '' &&
					vm.confirm_password === vm.newUser.password){
						var res = connexionService.createAccount(vm.newUser);	
						if(res.status === 201){
							console.log('connexion etablished ' + res.status);
						}else{
							console.log('connexion failed ' + res.status);
						}
				}
			}
		}
		 		
})();