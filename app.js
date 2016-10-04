angular.module('app', [])
    .controller('MainCtrl', mainController);

function mainController($scope) {
    $scope.people = [
        {
            firstName: "Matt",
            lastName: "Smith"
        },
        {
            firstName: "Drew",
            lastName: "House"
        }
    ];

    $scope.newPerson =  {
        firstName: '',
        lastName: ''
    };

    $scope.addPerson = function () {
        $scope.people.push($scope.newPerson);
        $scope.newPerson = {};
    }
}
