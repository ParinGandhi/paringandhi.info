(function () {
    'use strict';

    angular
        .module('pg')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();
