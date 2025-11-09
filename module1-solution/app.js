(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', function($scope) {
    $scope.checkLunch = function() {
      if (!$scope.lunchItems) {
        $scope.message = "Please enter data first";
        return;
      }

      let items = $scope.lunchItems.split(',')
                    .map(item => item.trim())
                    .filter(item => item.length > 0);

      if (items.length === 0) {
        $scope.message = "Please enter data first";
      } else if (items.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  });
})();
