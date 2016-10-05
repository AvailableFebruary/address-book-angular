angular.module('app', [])
    .controller('MainCtrl', mainController);

function mainController($scope) {
    $scope.contacts = [
        {
            firstName: "Matt",
            lastName: "Smith",
            profession: "Instructor",
            phoneNumber: "8598598559",
            emailAddress: "mattsemailaddress@gmail.com"
        },
        {
            firstName: "Drew",
            lastName: "House",
            profession: "Instructor",
            phoneNumber: "8598598559",
            emailAddress: "drewsemailaddress@gmail.com"
        }
    ];

    $scope.newContact =  {
        firstName: '',
        lastName: '',
        profession: '',
        phoneNumber: '',
        emailAddress: ''
    };

    $scope.addContact = function () {
        $scope.contacts.push($scope.newContact);
        $scope.newContact = {};
    }


    $scope.seeContact = function() {
        $scope.selectedContact=true;
        //$scope.newContact=contact;
        $scope.info=null;
    }

    $scope.seeInfo = function(contact) {
        $scope.info=contact;
        $scope.selectedContact=null;
    }

    }
