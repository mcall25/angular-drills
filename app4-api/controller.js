angular.module('app4').controller('controller', function($scope, service){


  $scope.get = function() {
    var prm = service.api()
    prm.then(function(response){
      $scope.response = response
    })
  }

    $scope.get();

    console.log($scope.get());


})
