/**
 * Created by Richard on 7/25/2016.
 */
'use strict';
angular.module('myApp').directive('kappacommentDrv', ['$compile', function ($compile) {

    function link(scope, element, attr) {
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Add Kappa~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        scope.addKappa = function () {
            console.log('work');
            element[0].value = element[0].value + "<img src='http://www.ellohime.tv/data/attachments/0/29-9f8f03df60fc202f468f87a488e6cc85.jpg'>";
            scope.modelValue = element[0].value;
        };
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Text select~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        scope.textSelect = function () {
            var textComponent = element[0];
            var selectedText = undefined;
            if (textComponent.selectionStart != undefined) {
                var startPos = textComponent.selectionStart;
                var endPos = textComponent.selectionEnd;
                selectedText = textComponent.value.substring(startPos, endPos)
            }
            alert("You selected: " + selectedText);
        };
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Bold text~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        scope.makeBold = function () {
                var oldTextValue = element[0].value;
                var textComponent = element[0];
                scope.selectedText = undefined;
                if (textComponent.selectionStart != undefined) {
                    var startPos = textComponent.selectionStart;
                    var endPos = textComponent.selectionEnd;
                    var selectedText = textComponent.value.substring(startPos, endPos)
                }
                var newTextValue = oldTextValue.replace(selectedText, '<b>' +selectedText + '</b>');
                element[0].value = newTextValue;
                scope.modelValue = element[0].value ;
            };

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Buttons~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


            var kappaButton = '<button ng-click="addKappa()"><img src="http://www.ellohime.tv/data/attachments/0/29-9f8f03df60fc202f468f87a488e6cc85.jpg"></button>'
            var content = $compile(kappaButton)(scope);
            element.parent().append(content);

            var selectButton = '<button ng-click="textSelect()">[Show selected text]</button>';
            var selectedContent = $compile(selectButton )(scope);
            element.parent().append(selectedContent );

            var boldButton = '<button ng-click="makeBold()">[Bold selected text]</button>';
            var boldContent = $compile(boldButton)(scope);
            element.parent().append(boldContent);

    }


    return {
        scope: {modelValue: '=ngModel'},
        link: link

    }
}]);