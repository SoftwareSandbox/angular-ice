'use strict';

angular.module('angularIceApp')
    .controller('ExamplesCtrl',
		function ($scope) {
            $scope.model = {
                autoSelectDefault: 'some text',
                autoSelectOtherEvent: 'other text'
            };

            $scope.helloWorld = function() {
                return 'Hello ICE !';
            };
		}
    );
