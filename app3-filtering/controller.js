angular.module('app3').controller('controller', function($scope, service){

  $scope.getData = service.data
  console.log($scope.getData);

})
