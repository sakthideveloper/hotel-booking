(function() {
    'use strict';

    angular
        .module('app.routes', [])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/index.html',
                    controller: 'DashboardController'
                })
            $urlRouterProvider.otherwise('/home');
        });


})();
