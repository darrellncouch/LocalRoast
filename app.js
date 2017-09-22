$(document).ready(function(){
  var menu = $("#menu");
  var side = $("#side");

  console.log(localStorage.getItem('mainL'));

  $(menu).click(function(){
    if($(side).css("display") == "none"){
      $(side).css("display", "inline-block");
    }else{
      $(side).css("display", "none");
    }
  })

  //side search
  let sideBtn = $("#sideSearch");
  var sideLoc = $("#sideLocation");
  var sideDist = $("#sideDistance");
  var sideNav = $("#side");
  var errorbox = $("#errorArea");




  $("#sideSearch").click(function(){
    //grab user input for location
    let userInputL = $(sideLoc).val();
    let userImputR = $(sideDist).val();

    //get radius
    if( userImputR.length === 0){
      var distance = 500;
    }else{
      var distance = userImputR * 1609.34;
    }

    //empty error if present
    $(errorbox).empty();

    //if user clicks search with now input throw error
    if($(sideLoc).val().length === 0 && $(sideDist).val().length === 0){
      let errorText = $("<p style='color: red; font-style: italic; margin-left: 35px;'>Please enter a location or radius</p>");
      $(errorbox).append(errorText);
    //else send location to be geolocated
    }else{
      $.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${userInputL}&key=AIzaSyBPM590byZIlUBoDC3Nq5E9yxTEFdT1gH8`, function(data) {

        let newPOS = data.results["0"].geometry.location;
        console.log(newPOS);


        let newRequest = {
          center: newPOS,
          location: newPOS,
          radius: distance,
          query: 'coffee'
        }

        console.log(newRequest);
        infoWindow.setPosition(newPOS);
        infoWindow.setContent('New location.');
        infoWindow.open(map);
        map.setCenter(newPOS);
        service.textSearch(newRequest, callback);

      })
    }
  })
})



var map;
var service;
var infowindow;





// iniciates map an gives a center of Phoenix
function initMap() {
  var pyrmont = new google.maps.LatLng(33.4483771,-112.0740372999999);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 13,
      styles:


      // white and grey style for map
      [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ]
    });


    infoWindow = new google.maps.InfoWindow;


    //geolocation get and assign position if available.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
        request = {
          center: pos,
          location: pos,
          radius: '200',
          query: 'coffee'
      };

        infoWindow.setPosition(pos);
        infoWindow.setContent('You are here.');
        infoWindow.open(map);
        map.setCenter(pos);
        service.textSearch(request, callback);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());

      });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
    }
  service = new google.maps.places.PlacesService(map);
}



//throws error if not available
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}


function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    createMarkers(results)
  }
}



//markers
function createMarkers(places) {
  var bounds = new google.maps.LatLngBounds();
  // var placesList = document.getElementById('places');

  for (var i = 0, place; place = places[i]; i++) {
    var image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    var marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      icon: image,
      title: place.name,
      position: place.geometry.location
    });

    // placesList.innerHTML += '<li>' + place.name + '</li>';


    bounds.extend(place.geometry.location);
  }
  map.fitBounds(bounds);
}
