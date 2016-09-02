angular.module('apiApp').controller('controller', function($scope, service){

2
    $scope.getData = function(){
       var prms = service.get()

      prms.then(function(starships){
        $scope.starships = starships;


      })

    }
    1
      $scope.getData();
  })


})
