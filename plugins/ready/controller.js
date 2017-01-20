function get_ready($scope, $http, SpeechService, Focus) {

    //show slide show
    SpeechService.addCommand('get_ready', function (state, action) {
      Focus.change("get_ready");
    });

}


angular.module('SmartMirror')
    .controller('get_ready', get_ready);