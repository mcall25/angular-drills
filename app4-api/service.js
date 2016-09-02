angular.module('apiApp').service('service', function($http){


  this.get = function() {

    var baseurl = "http://swapi.com/api/starships/";

      $http ({
        method: 'GET',
        url: baseurl

    }).then(function(response){
      // every promise returns a promise and .data
        if (response.status === 200) {
          return response.data;

        } else {
          return "erroe getting data";

        }

    })
        return promise;

  }

})
