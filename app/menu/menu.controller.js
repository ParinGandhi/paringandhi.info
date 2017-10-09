(function () {
    'use strict';

    angular
        .module('pg')
        .controller('MenuController', function () {

        var vm = this;

        // Initialize collapse button
        $(".button-collapse").sideNav();
        // Initialize collapsible (uncomment the line below if you use the dropdown variation)
        //$('.collapsible').collapsible();

    });
})();
