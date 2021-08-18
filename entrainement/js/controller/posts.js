 /* Les controllers permettent de faire le lien entre la vue et ce fichier pour pouvoir afficher les informations néccessaire grâce au scope */
 app.controller('PostsCtrl', function($scope, $rootScope, Post) {

     $rootScope.loading = true;

     $scope.posts = Post.getPosts().then(function(posts) {
         $rootScope.loading = false;
         $scope.posts = posts;
     }, function(msg) {
         alert(msg);
     })

 });