var app=angular.module('myApp', []);
app.controller('maincontroller', function($scope,$http,$window,$rootScope) {
    $scope.candidate = {};
    $scope.confirmPassword = "";
    $scope.errorMsgShow = false;
    $scope.names = ["Male", "Female", "Other"];
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
        $scope.candidate.dob = null;
        if($scope.candidate.password !== $scope.confirmPassword) {
            $scope.errorMsgShow = true;
            return;
        }
        var url = 'http://10.177.7.29:8083/v1/gameUp/signUp', data = $scope.candidate ,config='JSON';
        $http.post(url, data, config).then(function (response) {
            $window.location.href = '/DonateIt/index.html';
        }, function (response) {
            $window.location.href = '/DonateIt/index.html';
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
            var url = 'http://10.177.7.29:8083/v1/gameUp/login', data = $scope.can, config = 'JSON';
            $http.post(url, data, config).then(function (response) {
                console.log("ghar challo = " + JSON.stringify(response.data));
                $rootScope.data = response.data.usersAvailableToPairUp;
                $rootScope.user = response.data.userInfo;
                $rootScope.bookingdetails = response.data.bookingDetailsList;

                console.log($rootScope.data)
                $window.location.href = 'HackathonDashboard/coreui-free-bootstrap-admin-template/src/index.html';
            }, function (response) {
                console.log("response data ", response.data);
                console.log("Returned data = " + JSON.stringify(response.data));
            });
        }
    }


    // This example creates circles on the map, representing populations in North
// America.

// First, create an object containing LatLng and population for each city.

    $scope.citymap = {
        Indiranagar: {
            center: {lat: 12.9719, lng: 77.6412},
            population: 27
        },
        Bellandur: {
            center: {lat: 12.9260, lng: 77.6762},
            population: 8
        },
        Koramangala: {
            center: {lat: 12.9279, lng: 77.6271},
            population: 3
        },
        Mathikere: {
            center: {lat: 13.0334, lng: 77.5640},
            population: 6
        }
    };



    $scope.myLatLng = {
        lat: 12.9081, lng: 77.6476};

    // $scope.myLatLang = $rootScope;
     $scope.userslatLang = [
         {lat: 12.9719 , lng: 77.6412}, {lat:12.9260 , lng: 77.6762},{lat: 12.9279, lng: 77.6271},{lat: 13.0334, lng: 77.5640}
     ];

    //$scope.userslatLang = $rootScope.data;
    $scope.usersInfo = [{'Name': 'Shivam', 'Time' : '17:00 - 18:00'}, {'Name': 'Sumit', 'Time' : '17:00 - 18:00'}, {'Name': 'Aditya', 'Time' : '17:00 - 18:00'},{'Name': 'Satish', 'Time' : '17:00 - 18:00'}];
    //$scope.usersInfo = $rootScope.user;
    $scope.markers = [];
    var m1;
    // $window.initMap = function() {
        // Create the map.
        //var bounds = new google.maps.LatLngBounds();
         /*$window.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: {lat: 12.9081, lng: 77.6476},
            mapTypeId: 'terrain'
        });*/

    $(document).ready(function(){
        showMarker();
    });

      function showMarker () {
          $window.map = new google.maps.Map(document.getElementById('map'), {
              zoom: 10,
              center: {lat: 12.9081, lng: 77.6476},
              mapTypeId: 'terrain'
          });
         var totalLocations = $scope.userslatLang.length;
         console.log("In here");
         for (var i = 0; i < totalLocations; i++) {
             var name = $scope.usersInfo[i].name;
             var time = $scope.usersInfo[i].Time;
             var email = $scope.usersInfo[i].email;
             var gender = $scope.usersInfo[i].gender;

             console.log($scope.usersInfo[i].name);

             var displayDetails = name + "\n" + time;

             var infowindow = new google.maps.InfoWindow({
                 content: displayDetails
             });

             $scope.markers.push(new google.maps.Marker({
                 position: $scope.userslatLang[i],
                 map: map,
                 title: displayDetails


             }));

             $scope.markers[i].addListener('mouseover', function () {
                 infowindow.open(map, $scope.markers[i]);
                 console.log("clicked");
             });

             $scope.markers[i].addListener('click', function () {
                 alert("Are you sure you wish to book?")

             });

             var marker = new google.maps.Marker({
                 position: $scope.myLatLng,
                 map: map,
                 title: 'My Location'
             });
         }
     };

    $scope.test1 = function(event1) {
        alert("Are you sure wish to book ?");
        return true;
    }

// function addMarker(location, name, active) {
//     var marker = new google.maps.Marker({
//         position: location,
//         map: map,
//         title: name,
//         status: active
//     });
//}

});