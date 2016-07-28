(function() {
    'use strict';


    /**
     * Heart of the app
     *
     * All dependencies goes here
     */

    angular
        .module('app', [
            'ngMaterial',
            'ui.router',
            'angularSpinner',
            'app.routes',
            'app.service',
            'infinite-scroll',
            'app.directive'


        ])
    .controller('DashboardController', DashboardController);

    function DashboardController($scope, $timeout, $q, $log, Hotels) {

        var self = this;
        self.simulateQuery = false;
        self.isDisabled = false;
        self.states = loadAll();
        console.log(self.states);
        self.querySearch = querySearch;
        self.selectedItemChange = selectedItemChange;
        self.searchTextChange = searchTextChange;
        self.newState = newState;
        self.search = [];




        self.hotels = Hotels.all();
        self.loadMore = function() {
            self.hotels.loadMore();
        };
        console.log(self.hotels);
        console.log(self.hotels.feature);

        function newState(state) {
            alert("Sorry! You'll need to create a Constituion for " + state + " first!");
        }

        // ******************************
        // Internal methods
        // ******************************
        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch(query) {
            var results = query ? self.states.filter(createFilterFor(query)) : self.states,
                deferred;
            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function() {
                    deferred.resolve(results);
                }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
            $log.info('Item changed to ' + JSON.stringify(item));
        }

        /**
         * Build `states` list of key/value pairs
         */
        function loadAll() {
            var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
            return allStates.split(/, +/g).map(function(state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }

        self.noOfNight = '';
        self.nights = ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 ' +
            '20').split(' ').map(function(night) {
            return { abbrev: night };
        });

        self.noOfTraveller = '';
        self.travellers = ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 ' +
            '20').split(' ').map(function(traveller) {
            return { abbrev: traveller };
        });

    }

})();
