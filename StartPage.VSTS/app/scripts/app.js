'use strict';

angular.module('startpageApp.models', []);
angular.module('startpageApp.directives', []);
angular.module('startpageApp.services', []);
angular.module('startpageApp.controllers', [
    'ui.state',
    'ui.bootstrap',
    'configuration',
    'startpageApp.models',
    'startpageApp.directives',
    'startpageApp.services',
    'infinite-scroll',
]).config(function config($stateProvider) {
    $stateProvider.state('crunchinator', {
        url: '/startpage',
        views: {
            main: {
                controller: 'StartpageCtrl',
                templateUrl: 'views/main.tpl.html'
            }
        },
        data:{ pageTitle: 'StartPage - A Cloudspace Project' }
    });
});

angular.module('startpageApp', [
    'ui.state',
    'ui.route',
    'startpageApp.controllers'
])

.config(function myAppConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise( '/startpage' );
})

.run(function run() {
})

.controller('AppCtrl', function AppCtrl($scope, $location, Browser) {
    $scope.isIE = Browser.isIE();

    $scope.isMobile = Browser.isMobile.any();

    $scope.shared_results = !!$location.search().filters;

    $scope.$on('$stateChangeSuccess', function(event, toState){
        if (angular.isDefined(toState.data.pageTitle)) {
            $scope.pageTitle = toState.data.pageTitle;
        }
    });

    if($scope.isIE || $scope.isMobile){
        angular.element('html, body').css({
            'overflow': 'visible'
        });
    }
});
