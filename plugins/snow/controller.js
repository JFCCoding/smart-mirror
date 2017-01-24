function snow_storm($scope, $http, SpeechService, Focus) {

    //start snow
  SpeechService.addCommand('snow_storm', function () {
        console.debug("Snow Storm!");
    });

}

angular.module('SmartMirror')
    .controller('snow_storm', snow_storm);