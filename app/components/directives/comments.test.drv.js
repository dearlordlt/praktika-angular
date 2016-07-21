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

            $scope.token=$cookies.get('cool_token');

            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~new comment object constructor~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            function GotComment(_id,userid,username, message,likes,dislikes,parentId,topicId,isDeleted){
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
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            //
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~reply pusher~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~reply remover~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            $scope.arrayFixer = function(array){
                var e = array.length;
                while(e--){
                    if(  array[e].parentId !== undefined){
                        array.splice(e, 1);

                    }
                }};

            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~HTTP METHODS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            $scope.getALLComments = function(){

                $http({
                    method: 'GET',
                    url: 'http://localhost:9001/api/comments/?token='+$cookies.get('cool_token')
                }).success(function(response) {
                    $scope.allComments=response;
                    $scope.commentArray =[];
                    $scope.commentArray2 =[];
                    for( var i= 0; i < response.length; i++) {

                        $scope.commentArray.push(new GotComment(response[i]._id, response[i].userid,response[i].username,response[i].message,response[i].likes,response[i].dislikes,response[i].parentId, response[i].topicId, response[i].isDeleted));
                        $scope.commentArray2.push( new GotComment(response[i]._id, response[i].userid,response[i].username,response[i].message,response[i].likes,response[i].dislikes,response[i].parentId, response[i].topicId, response[i].isDeleted));

                    }
                    $scope.commentPusher($scope.commentArray, $scope.commentArray2 ); //pushes replies to reply property in commentArray
                    $scope.arrayFixer($scope.commentArray); //deletes(splices) comments which are replies (have a parentId) from commentArray
                    console.log($scope.commentArray);
                });


            };
            $scope.createComment = function(commentId, message){
                $http({
                    method: 'POST',
                    url: 'http://localhost:9001/api/comments/?token='+$cookies.get('cool_token'),
                    data: $scope.data ={
                        username: $cookies.get('such_username'),
                        userid : $cookies.get('such_userID'),
                        topicId : $scope.topicId,
                        parentId :commentId,
                        message : message
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

