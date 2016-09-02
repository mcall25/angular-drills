angular.module('app2').controller('arrayController', function($scope, service){

  $scope.test = "hey";

  $scope.poeple = service.data;
  console.log(service.data);
  




})
