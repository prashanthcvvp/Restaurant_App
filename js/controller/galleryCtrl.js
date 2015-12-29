var app = angular.module("restaurant.controller.gallery",[]);

app.controller("galleryCtrl",['$scope',function($scope){
    $scope.galleriesArray=[
        {
            img_src:["img/hotel1.jpg","img/hotel2.jpg","img/interior1.jpg","img/interior2.jpg"]
        },
        {
            img_src:["img/hotel1.jpg","img/hotel2.jpg","img/interior1.jpg","img/interior2.jpg"]
        },
        {
            img_src:["img/hotel1.jpg","img/hotel2.jpg","img/interior1.jpg","img/interior2.jpg"]
        }
    ];
}]);