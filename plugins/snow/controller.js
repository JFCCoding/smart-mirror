function snow_storm($scope, $http, SpeechService, Focus) {

    //start snow
    SpeechService.addCommand('snow_storm', function (state, action) {
      $scope.showSnow = true | false

    });

}


angular.module('SmartMirror')
    .controller('snow_storm', snow_storm);