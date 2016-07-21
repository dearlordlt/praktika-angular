/**
 * Created by Richard on 19/07/2016.
 */
'use strict';

angular.module('myApp').directive('commentstestDrv', function ($cookies) {
    return {
        templateUrl: 'components/directives/templates/comments.test.tmpl.html',
        scope: {
            topicId: '=?topicId'
        },
        controller: function ($scope, $http) {
            /*$scope.comment ={
                username: $cookies.get('such_username'),
                userid : $cookies.get('such_userID'),
                topicId : $scope.topicId,
                parentId :comments.parentId
            };*/
            $scope.token=$cookies.get('cool_token');



            function gotComment(_id,userid,username, message,likes,dislikes,parentId,topicId,isDeleted){
                this._id = _id;
                this.userid =  userid;
                this.username = username;
                this.message = message;
                this.likes = likes;
                this.dislikes = dislikes;
                this.parentId = parentId;
                this.topicId = topicId;
                this.isDeleted= isDeleted;
                this.reply = [];
            }
            $scope.getALLComments = function(){

                $http({
                    method: 'GET',
                    url: 'http://localhost:9001/api/comments/?token='+$cookies.get('cool_token')
                }).success(function(response) {
                    $scope.allComments=response;
                    $scope.commentArray =[];
                    $scope.commentArray2 =[];
                    for( var i= 0; i < response.length; i++) {

                        $scope.commentArray.push(new gotComment(response[i]._id, response[i].userid,response[i].username,response[i].message,response[i].likes,response[i].dislikes,response[i].parentId, response[i].topicId, response[i].isDeleted));
                        $scope.commentArray2.push( new gotComment(response[i]._id, response[i].userid,response[i].username,response[i].message,response[i].likes,response[i].dislikes,response[i].parentId, response[i].topicId, response[i].isDeleted));

                    }
                    $scope.commentPusher = function (array, array2){
                        for( var i= 0; i < array.length; i++) {
                            for (var j = 0; j < array2.length; j++) {
                                if (array2[j].parentId === array[i]._id) {
                                    array[i].reply.push(array2[j]);
                                }
                            }
                        }
                        for(var z in array) {
                            if(array.hasOwnProperty(z)){
                                if (typeof array[z] == "object")
                                $scope.commentPusher(array[z],$scope.commentArray2);
                            }
                        }
                    };
                    $scope.commentPusher($scope.commentArray, $scope.commentArray2 );

                    $scope.arrayFixer = function(array){
                        var e = array.length;
                        while(e--){
                            if(  array[e].parentId !== undefined){
                                array.splice(e, 1);

                            }
                    }};
                    $scope.arrayFixer($scope.commentArray);



                    console.log($scope.commentArray);
                });


            };
            $scope.createComment = function(a){
                $http({
                    method: 'POST',
                    url: 'http://localhost:9001/api/comments/?token='+$cookies.get('cool_token'),
                    data: $scope.comment ={
                        username: $cookies.get('such_username'),
                        userid : $cookies.get('such_userID'),
                        topicId : $scope.topicId,
                        parentId :a
                    }

                }).success(function(response) {
                    $scope.postCommentRes=response;
                    console.log(response);
                })

            };

            $scope.getCommentsByTopic = function(){
                $http({
                    method: 'GET',
                    url: 'http://localhost:9001/api/comments/:'+ $scope.topicId +'/?token='+$cookies.get('cool_token')
                }).success(function(response) {
                    $scope.topicComment=response;
                    console.log(response);
                })


            };


            //¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬UI¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
            $scope.isCollapsed = true;


        }

    }

});
/*
$scope.iterate = function(current, depth) {
    var children = current.reply;
    for( var i= 0; i < $scope.commentArray.length; i++) {
        for( var j= 0; j < $scope.commentArray2.length; j++) {

            if ($scope.commentArray2[j].parentId === $scope.commentArray[i]._id) {
                children.push($scope.commentArray2[j]);

            }
        }

    for (var i = 0, len = children.length; i < len; i++) {
        iterate(children[i], depth + 1);
    }
}};
$scope.iterate($scope.commentArray, 0);



for( var i= 0; i < $scope.commentArray.length; i++) {
    for (var j = 0; j < $scope.commentArray2.length; j++) {

        if ($scope.commentArray2[j].parentId === $scope.commentArray[i]._id) {
            children.push($scope.commentArray2[j]);

        }
    }
}
function find(haystack, needle) {
    for (var i = 0; i < haystack.reply.length; i ++) {
        var result = find(haystack.reply[i], needle);
        if (result) return result;
    }
    return null;
}
var commentPusher = function(obj){
    for( var i= 0; i < obj; i++) {
        for (var j = 0; j < $scope.commentArray2.length; j++) {

            if ($scope.commentArray2[j].parentId === obj[i]._id) {
                obj[i].reply.push($scope.commentArray2[j]);

            }
        }
    }
    for(var a in obj) {
        if(obj.hasOwnProperty(a)){
            var foundLabel = findObjectByLabel(obj[i]);
        }
    }
    return null;
};
commentPusher($scope.commentArray);*/
