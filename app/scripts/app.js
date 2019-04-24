"use strict";

/**
 * @ngdoc overview
 * @name angularJsStarterKitApp
 * @description
 * # angularJsStarterKitApp
 *
 * Main module of the application.
 */
angular
  .module("angularJsStarterKitApp", [
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch"
  ])
  .config([
    "$routeProvider","$locationProvider",
    function($routeProvider,$locationProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider
      .when("/", {
        templateUrl: "views/main.html",
        controller: "MainCtrl",
        controllerAs: "main"
      })
      .when("/contact", {
        templateUrl: "views/contact.html",
        controller: "MainCtrl",
        controllerAs: "main"
      }).when("/about", {
        templateUrl: "views/about.html",
        controller: "AboutCtrl",
        controllerAs: "main"
      })
      .otherwise({
        redirectTo: "/"
      });
    }
  ]);
