app.controller('CommentsCtrl', function($scope, $rootScope, Post, $routeParams) {

    // RootScope permet d'accéder à l'index global
    $rootScope.loading = true;
    $scope.newComment = {};

    // Then permet de déterminer le cas positif (true) et le cas où ça échoue
    Post.getPost($routeParams.id).then(function(post) {
        $rootScope.loading = false;
        $scope.title = post.name;
        $scope.comments = post.comments;
    }, function(msg) {
        alert(msg);
    });

    $scope.addComment = function() {
        $scope.comments.push($scope.newComment);
        Post.add($scope.newComment).then(function() {

        }, function() {
            alert("Votre message n'a pas pu être sauvegardé");
        })

        $scope.newComment = {};
    }

});