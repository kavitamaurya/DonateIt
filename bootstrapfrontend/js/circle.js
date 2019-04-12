// This example creates circles on the map, representing populations in North
// America.

// First, create an object containing LatLng and population for each city.
var citymap = {
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


var myLatLng = {
   lat: 12.9081, lng: 77.6476};


var userslatLang = [
{lat: 12.9719 , lng: 77.6412}, {lat:12.9260 , lng: 77.6762},{lat: 12.9279, lng: 77.6271},{lat: 13.0334, lng: 77.5640}
];

var usersInfo = [{'Name': 'Shivam', 'Time' : '17:00 - 18:00'}, {'Name': 'Sumit', 'Time' : '17:00 - 18:00'}, {'Name': 'Aditya', 'Time' : '17:00 - 18:00'},{'Name': 'Satish', 'Time' : '17:00 - 18:00'}];
var markers = [];
var m1;
function initMap() {
  // Create the map.
  var bounds = new google.maps.LatLngBounds();
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 12.9081, lng: 77.6476},
    mapTypeId: 'terrain'
  });

  // map = new GMap2(document.getElementById("map_canvas"), { mapTypes:[G_HYBRID_MAP] });
  // map.setCenter(new GLatLng(12.9081, 77.6476), 13);
  // map.setUIToDefault();

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  /*for (var city in citymap) {
    // Add the circle for this city to the map.
    var cityCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 100
    });
  
    //addMarker(city,'Name',"active");
  } */

    // loc = new google.maps.LatLng("12.9719","77.6412");
    // bounds.extend(loc);
    // //addMarker(loc, 'Shivakant', "active");

    // loc = new google.maps.LatLng("12.9260","77.6762");
    // bounds.extend(loc);
    // //addMarker(loc, 'Sumit', "active");

    // loc = new google.maps.LatLng("12.9279","77.6271");
    // bounds.extend(loc);
    // //addMarker(loc, 'Aditya', "active");

    // map.fitBounds(bounds);
    // map.panToBounds(bounds);    

  
    var totalLocations = userslatLang.length;

    
   for (var i = 0; i < totalLocations; i++) 
    {
      
       var name = usersInfo[i].Name;
       var time = usersInfo[i].Time;

      console.log(usersInfo[i].Name);
      
      var displayDetails = name + "\n" + time;

      var infowindow = new google.maps.InfoWindow({
          content: displayDetails
        });

      /* Using infoBox instead of using infoWindow */

      // var infoContent=document.createElement('div');
      //   infoContent.innerHTML="Name: "+name +"<br/>"+ "TimeL  " +time;
      //   infoContent.onclick=test1;
        
      //   var infowindow = new InfoBox({
      //       closeBoxURL:"",
      //       boxClass:"marker_popup",
      //       content: infoContent,
      //       });

      markers.push(new google.maps.Marker({
      position: userslatLang[i],
      map: map,
      title: displayDetails


        }));

      //markers.push(m1);
      //console.log(m1);

      markers[i].addListener('mouseover', function() {
          infowindow.open(map, markers[i]);
          console.log("clicked");
        });

      markers[i].addListener('click', function() {
         alert("Are you sure you wish to book?") 

      });
      
    }




    var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'My Location'
  });

 //console.log(cityCircle);

}


function test1(event1) {
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
