function Snow($scope, $interval, $http, GeolocationService) {
    $.fn.snow();
};



angular.module('SmartMirror')
    .controller('Snow', Snow);