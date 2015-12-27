var app = angular.module('Restaurant-app',
                        ['ngRoute',
                         'restaurant.controller.mainCtrl',
                        'restaurant.controller.reserveCtrl',
                        'restaurant.controller.owner',
                        'restaurant.service.bookings']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
       templateUrl:'partials/main.html',
        controller:'mainCtrl'
    }).when('/reserve',{
        templateUrl:'partials/reserve.html',
        controller:'reserveCtrl'
    }).when('/form-reservation',{
        templateUrl:'partials/reservation/reservation-form.html',
        controller:'reserveCtrl'
    }).when('/edit-reservation',{
        templateUrl:'partials/reservation/edit-reservation.html',
        controller:'reserveCtrl'
    }).when('/owner',{
        templateUrl:'partials/owner/owner.html',
        controller:'ownerCtrl'
    }).when('/bookings/:id',{
        templateUrl:'partials/owner/booking.html',
        controller:'bookingCtrl'
    }).when('/bookings',{
        redirectTo:'/owner'
    }).otherwise({
        redirectTo:'/'
    });
}]);