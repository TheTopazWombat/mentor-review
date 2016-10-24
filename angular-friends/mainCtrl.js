angular.module('app')
.controller('mainCtrl', mainCtrl);

function mainCtrl($scope, mainServ) {
  $scope.thisAppIsBroken = "This app is working";
  
}
