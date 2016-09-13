angular.module('app4').service('service', function($http){

      this.api = function() {
        var promise =  $http({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon-form/1/'
          }).then(function(response){
              return response.data;

          })
          return promise;
      }


})
