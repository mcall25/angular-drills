angular.module('app1').controller('controller', function($scope){

  $scope.test = "hello world"
    %setTimeout(function () {
      $scope.typer = "";
    }, 10);
})
