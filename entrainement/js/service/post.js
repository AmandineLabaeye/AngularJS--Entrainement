// Factory permettent d'afficher les données pour les transmettres aux controller
app.factory('Post', function($http, $q, $timeout) {

    let factory = {

        posts: false,

        getPosts: function() {

            // Promise pour gérer les données renvoyer
            var deferred = $q.defer();

            if (factory.posts !== false) {
                deferred.resolve(factory.posts);
            } else {
                // requête http, qui récupére les données dans le json
                $http.get('posts.json').then(function(response) {
                    factory.posts = response.data;
                    $timeout(function() {
                        deferred.resolve(factory.posts);
                    }, 1000)
                }, function(response) {
                    deferred.reject('Impossible de récupérer les articles.')
                });
            }
            return deferred.promise;
        },

        getPost: function(id) {
            var deferred = $q.defer();

            var post = {};
            var posts = factory.getPosts().then(function(posts) {
                angular.forEach(factory.posts, function(value, key) {
                    if (value.id == id) {
                        post = value;
                    }
                });
                deferred.resolve(post);
            }, function(msg) {
                deferred.reject(msg);
            });

            return deferred.promise;
        },
        add: function(comment) {
            var deferred = $q.defer();
            // Envoi en bdd 

            deferred.resolve();

            return deferred.promise;
        }
    };

    return factory;
});