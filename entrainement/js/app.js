/* Ce module permet de structure le code correspondant à chaque module dans une fichier script / NgRoute est une dépendance, on la précise ici car on va s'en servir */
let app = angular.module("myApp", ['ngRoute']);

/* Les routes, qui permet d'accéder au différentes pages */
app.config(function($routeProvider) {
    $routeProvider
    /* when, permet de définir une route, premiere param est l'url qui va s'affiché, deuxième param est tableau de différents param, comme l'url de la page, ainsi que le controller utilisé*/
        .when('/', {
            templateUrl: 'home.html',
            controller: 'PostsCtrl'
        })
        .when('/comments/:id', {
            templateUrl: 'comments.html',
            controller: 'CommentsCtrl'
        })
        /* otherwise permet de définir la page par défaut vers laquelle redirigé l'application en cas d'url inexistantes dans les routes grâce au "redirectTo" */
        .otherwise({
            redirectTo: '/'
        });

});