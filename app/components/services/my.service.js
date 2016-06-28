'use strict';

angular.module('myApp').factory('myService', function () {

    var myObject = {
        data1 : 1,
        data2 : 2
    };

    var myObject2 = {
        data10 : 10,
        data20 : 20
    };

    var myObject3 = {
        data100 : 100,
        data200 : 200
    };

    var getDataCount = function(x) {
        return myObject.data1 + myObject2.data10 + myObject3.data100 + x;
    };

    var addNewProperty = function(propName, propValue) {
        myObject[propName] = propValue;
    };

    return {
        myObject : myObject,
        myObject2 : myObject2,
        myObject3 : myObject3,
        getDataCount : getDataCount,
        addNewProperty: addNewProperty
    }

});
