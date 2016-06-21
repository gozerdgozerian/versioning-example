// Defines the module and its dependencies
angular.module('version-example', ['ngAnimate', 'ui.bootstrap']);

// Define the controller for the modal dialog
angular.module('version-example').controller('ModalCtrl', function ($scope, $uibModal, $log) {

  $scope.open = function () {
    $uibModal.open({
      animation: true,
      templateUrl: 'versionModal.html',
      controller: 'ModalInstanceCtrl'
    });
  };
});

// This controller simply handles closing the modal dialog
angular.module('version-example').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {
  $scope.ok = function () {
    $uibModalInstance.close();
  };
});
