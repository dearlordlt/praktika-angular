'use strict';
angular.module('myApp').factory('alertsService', function (){

    var alerts = {
        successfulAuthentication: {
            type: 'success',
            msg: 'Authentication successful! Please continue'
        },
        failedAuthentication: {
            type: 'danger',
            msg: 'Authentication failed. Please try again'
        }
    };

    var closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

    return {
        alerts: alerts,
        closerAlert: closeAlert
    }
});
