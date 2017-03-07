'use strict';
var indexAngularApp = angular.module('indexAngularApp', ['ui.bootstrap', 'ui.router', 'ngCookies']);

/**
 * Route configuration for the RDash module.
 */
indexAngularApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/home',
                templateUrl: '/home'
            })
            .state('demomenu1', {
                url: '/demomenu1',
                templateUrl: '/demomenu1'
            });
    }
]);


/**
 * Master Controller
 */

indexAngularApp.controller('indexCtrl', ['$scope','$http', '$cookieStore', '$window', indexCtrl]);
function indexCtrl($scope,$http, $cookieStore, $window) {
    var mobileView = 992;
    $scope.title = "Demo Node Server";
    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() {
        $scope.$apply();
    };


    //-----------------logout------------------------//
    $scope.logout = function(){
      //Do whatever is to be done on logout.
      $http({
      method:"POST",
      url:'/doLogout',
      data:{

      }
    }).then(function(res){
      console.log("Logged out");
      $window.location.href = "/login"

    }, function(err) { //this will be called on error
      console.log(err);
    });

    }

}
