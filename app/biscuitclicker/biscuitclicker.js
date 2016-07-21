/**
 * Created by Richard on 11/07/2016.
 */
angular.module('myApp.BiscuitClicker', []).controller('BiscuitClickerCtrl', ['$scope','$interval',
    function ($scope,$interval) {
        $scope.biscuitAmount = 0;
        $scope.adder5Amount = 0;
        $scope.adder25Amount = 0;
        $scope.adder100Amount = 0;
        $scope.adder500Amount = 0;

        var add = null;
        $scope.biscuitID = 123;

        $scope.biscuitClick = function(){
            $scope.biscuitAmount = $scope.biscuitAmount + 1;
        };

        $scope.biscuitAdder = function(amount, initPrice, adderAmount, multiplicator) {
            $scope.price= initPrice;
            $scope.typeChecker = function () {
                switch (adderAmount) {
                    case 5:
                        $scope.price = (1.05 ^ $scope.adder5Amount) * initPrice;
                        $scope.adder5Amount += 1;
                        break;
                    case 25:
                        $scope.price = (1.05 ^ $scope.adder25Amount) * initPrice;
                        $scope.adder25Amount += 1;
                        break;
                    case 100:
                        $scope.price = (1.05 ^ $scope.adder100Amount) * initPrice;
                        $scope.adder100Amount += 1;
                        break;
                    case 500:
                        $scope.price = (1.05 ^ $scope.adder500Amount) * initPrice;
                        $scope.adder500Amount += 1;
                        break;
                }
            };
            if ($scope.price <= $scope.biscuitAmount) {
                $scope.typeChecker();
                $scope.biscuitAmount = $scope.biscuitAmount - $scope.price;
                add = $interval(function () {
                        $scope.biscuitAmount += amount*multiplicator;
                        return $scope.biscuitAmount;
                    }
                    , 1000);


            }
        };
        $scope.biscuitUpgrade = function(){
            $scope.multiplicator = 1;
            $scope.multiplicator=biscuitMultiplicatorService.multiplicator;



        };
        /*function biscuitAdderObj (type, price, addingPower, multiplicator){
            this.type = type;
            this.price = price;
            this.addingPower = addingPower;
            this.multiplicator = multiplicator;

        }


        $scope.biscuitAdder5 = new biscuitAdderObj(5, 5, 5, 1)
        $scope.biscuitAdder = function(biscuitObj){


            add = $interval(function () {
                    $scope.biscuitAmount += biscuitObj.addingPower * biscuitObj.multiplicator;
                    return $scope.biscuitAmount;
                }
                , 1000);

        };*/




    }]);