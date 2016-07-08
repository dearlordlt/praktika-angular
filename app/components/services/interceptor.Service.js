'use strict';

angular.module('myApp').factory('interceptorService', ['$q', '$injector','$location','errorPrintingService', function ($q, $injector,$location,errorPrintingService) {

    var interceptorService = {
        responseError : function (response) {

            if(response.status === 404) {
                console.log('Page Not Found', response);
                $location.path('/view1');
            }

            else if(response.status === 403) {
                console.log('Unauthorised', response);
                alert('You do not have access to the operation, please login');
                $location.path('/CoolLoginPage');
            }
            else if(response.status === 304) {
                console.log('Unauthorised', response);
                $location.path('/CoolLoginPage');
            }
            else if(response.status === 500) {
                console.log('Missing data', response);
                var errorMessage = '( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ clickty clack clickty clack with this chant I summon a 500 error to the chat';
                errorPrintingService.error = errorMessage;
            }


            return $q.reject(response);
        }
    };

    return interceptorService;

}]);