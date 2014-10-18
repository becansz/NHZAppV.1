angular.module('starter.logout', [])
.controller('LogoutCtrl', ['$scope','loginService', function ($scope,loginService) {
  $scope.txt='';
  $scope.logout=function(){
    loginService.logout(); //call login service
  };
}])