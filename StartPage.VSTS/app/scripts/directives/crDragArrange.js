'use strict';

angular.module('startpageApp.directives').directive('crDragArrange', [function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            var jQuery = window.jQuery || {};
            jQuery(element[0]).shapeshift({
                minColumns: 3,
                handle: '.head'
            });
        }
    };
}]);
