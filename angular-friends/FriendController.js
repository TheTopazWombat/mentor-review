angular.module('app')
.controller('FriendController', FriendController);

function FriendController($scope, mainServ) {
  $scope.thisAppIsBroken = "This app is working";

  $scope.friends = mainServ.friends;
  console.log($scope.friends[0])

}
