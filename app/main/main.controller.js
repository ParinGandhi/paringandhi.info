(function () {
    'use strict';

    angular
        .module('pg')
        .controller('MainController', function () {

            var vm = this;

            $(document).ready(function () {
                $('.parallax').parallax();
            });

        });
})();
