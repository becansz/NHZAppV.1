angular.module('starter.loginCtrl', [])
.controller('LoginCtrl', function($scope, loginService) {
	$scope.login=function(){
		console.log('login test');
	}
});