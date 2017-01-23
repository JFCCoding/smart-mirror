function snow($scope, $http, SpeechService, Focus) {

    //start snow
    SpeechService.addCommand('snow_storm', function (state, action) {
      snowStorm.toggle();
    });

}


angular.module('SmartMirror')
    .controller('snow_storm', snow_storm);