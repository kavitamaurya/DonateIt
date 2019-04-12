var app=angular.module('myApp', []);
    app.controller('maincontroller', function($scope,$http,$window) {
    $scope.candidate = {};
    $scope.confirmPassword = "";
    $scope.errorMsgShow = false;
    $scope.names = ["Male", "Female", "Other"];
    $scope.bloodGroup = ["A+","A-","B+","B-","O+","O-","AB+","AB-"];
    $scope.agegrp = ["15-20", "21-25", "26-30", "31-35", "36-40", "41-45", "46-50", "51-55"];
    $scope.can = {};
    $scope.signUpCandidate = function(){
        if($scope.candidate.gender === "Male") {
            $scope.candidate.gender = 'm';
        }
        else if($scope.candidate.gender === "Female"){
            $scope.candidate.gender = 'f';
        }
        else if($scope.candidate.gender === "Other"){
            $scope.candidate.gender = 'o';
        }

        if($scope.candidate.password !== $scope.confirmPassword) {
            $scope.errorMsgShow = true;
            return;
        }
        var url = 'http://52.167.130.119:8083/v1/gameUp/signUp', data = $scope.candidate ,config='JSON';
        $http.post(url, data, config).then(function (response) {
            console.log("ghar challo");
            $window.location.href = '/GameUpFrontEnd/index.html';
        }, function (response) {
            $window.location.href = '/GameUpFrontEnd/index.html';
        });
        console.log($scope.candidate);
    };

    $scope.geoLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
        }
    };

    function showPosition(position) {
        $scope.can.latitude = position.coords.latitude;
        $scope.can.longitude = position.coords.longitude;
        if($scope.can.latitude !== null) {
            $scope.allowLogin = true;
        }
    }

    $scope.logInCandidate = function() {
        if($scope.allowLogin !== true) {
            return;
        }
        else {
            var url = 'http://52.167.130.119:8083/v1/gameUp/login', data = $scope.can, config = 'JSON';
            $http.post(url, data, config).then(function (response) {
                console.log("ghar challo = " + JSON.stringify(response.data));
                $window.location.href = 'HackathonDashboard/coreui-free-bootstrap-admin-template/src/index.html';
            }, function (response) {
                console.log("chud gya = " + JSON.stringify(response.data));
            });
        }

    }
    });