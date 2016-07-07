'use strict';

angular.module('myApp').factory('interceptorService', ['$q', '$injector', '$location', 'errorService', function ($q, $injector, $location, errorService) {

    var interceptorService = {
        responseError : function (response) {

            if(response.status === 404) {
                console.log('Page Not Found', response);
                $location.path('/pageNotFound');
            }

            else if(response.status === 403) {
                console.log('Unauthorised', response);
                $location.path('/login.jurates');
            }
            else if(response.status === 500) {
                errorService.errors = 500;
            }

            return $q.reject(response);
        }
    };

    return interceptorService;

}]);