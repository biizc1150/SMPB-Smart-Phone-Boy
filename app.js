// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute', 'scotchApp.services', 'scotchApp.controllers']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
    .when('/',{
        templateUrl: 'pages/home.html'
        // controller: 'mainController'
    })
        .when('/home', {
        templateUrl: 'pages/home.html'
        // controller: 'mainController'
    })

    // route for the phone page
    .when('/phone-iphone', {
        templateUrl: 'pages/phones/phone-iphone.html'
    })

    .when('/phone-samsung', {
        templateUrl: 'pages/phones/phone-samsung.html'
    })

    .when('/phone-oppo', {
        templateUrl: 'pages/phones/phone-oppo.html'
    })

    .when('/phone-htc', {
        templateUrl: 'pages/phones/phone-htc.html'
    })

    // route for the accessory page
    .when('/accessory-powerBank', {
        templateUrl: 'pages/accessories/acc-powerbank.html'
    })

    .when('/accessory-charge', {
        templateUrl: 'pages/accessories/acc-charge.html'
    })

    .when('/accessory-ear', {
        templateUrl: 'pages/accessories/acc-ear.html'
    })

    .when('/accessory-other', {
        templateUrl: 'pages/accessories/acc-other.html'
    })

    // route for aboutus page
    .when('/aboutus', {
        templateUrl: 'pages/aboutus.html'
    })

    // route for search page
    .when('/search-result', {
        templateUrl: 'pages/search_result.html'
    })

    // route for search page access
    .when('/search-result-acc', {
        templateUrl: 'pages/search_result_acc.html'
    })

    // route for staff page
    // .when('/staff', {
    //     templateUrl: 'pages/staff.html'
    // })

    // // route for search page
    // .when('/owner', {
    //     templateUrl: 'pages/owner.html'
    // })

})