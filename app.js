$(document).ready(function(){
  var menu = $("#menu");
  var side = $("#side");
  
  $(menu).click(function(){
    if($(side).css("display") == "none"){
      $(side).css("display", "inline-block");
    }else{
      $(side).css("display", "none");
    }
  })
})

var map;
var service;
var infowindow;

// Initialize collapse button
$(".button-collapse").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();






// 33.4483771,-112.0740372999999

function initMap() {
  var pyrmont = new google.maps.LatLng(33.4483771,-112.0740372999999);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 13,
      styles:

      // dark
      // [
      //   {
      //     "elementType": "geometry",
      //     "stylers": [
      //       {
      //         "color": "#212121"
      //       }
      //     ]
      //   },
      //   {
      //     "elementType": "labels.icon",
      //     "stylers": [
      //       {
      //         "visibility": "off"
      //       }
      //     ]
      //   },
      //   {
      //     "elementType": "labels.text.fill",
      //     "stylers": [
      //       {
      //         "color": "#757575"
      //       }
      //     ]
      //   },
      //   {
      //     "elementType": "labels.text.stroke",
      //     "stylers": [
      //       {
      //         "color": "#212121"
      //       }
      //     ]
      //   },
      //   {
      //     "featureType": "administrative",
      //     "elementType": "geometry",
      //     "stylers": [
      //       {
      //         "color": "#757575"
      //       }
      //     ]
      //   },
      //   {
      //     "featureType": "administrative.country",
      //     "elementType": "labels.text.fill",
      //     "stylers": [
      //       {
      //         "color": "#9e9e9e"
      //       }
      //     ]
      //   },
      //   {
      //     "featureType": "administrative.land_parcel",
      //     "stylers": [
      //       {
      //         "visibility": "off"
      //       }
      //     ]
      //   },
      //   {
      //     "featureType": "administrative.locality",
      //     "elementType": "labels.text.fill",
      //     "stylers": [
      //       {
      //         "color": "#bdbdbd"
      //       }
      //     ]
      //   },
      //   {
      //     "featureType": "poi",
      //     "elementType": "labels.text.fill",
      //     "stylers": [
      //       {
      //         "color": "#757575"
      //       }
      //     ]
      //   },
      //   {
      //     "featureType": "poi.park",
      //     "elementType": "geometry",
      //     "stylers": [
      //       {
      //         "color": "#181818"
      //       }
      //     ]
      //   },
      //   {
      //     "featureType": "poi.park",
      //     "elementType": "labels.text.fill",
      //     "stylers": [
      //       {
      //         "color": "#616161"
      //       }
      //     ]
      //   },
      //   {
      //     "featureType": "poi.park",
      //     "elementType": "labels.text.stroke",
      //     "stylers": [
      //       {
      //         "color": "#1b1b1b"
      //       }
      //     ]
      //   },
      //   {
      //     "featureType": "road",
      //     "elementType": "geometry.fill",
      //     "stylers": [
      //       {
      //         "color": "#2c2c2c"
      //       }
      //     ]
      //   },
      //   {
      //     "featureType": "road",
      //     "elementType": "labels.text.fill",
      //     "stylers": [
      //       {
      //         "color": "#8a8a8a"
      //       }
      //     ]
      //   },
      //   {
      //     "featureType": "road.arterial",
      //     "elementType": "geometry",
      //     "stylers": [
      //       {
      //         "color": "#373737"
      //       }
      //     ]
      //   },
      //   {
      //     "featureType": "road.highway",
      //     "elementType": "geometry",
      //     "stylers": [
      //       {
      //         "color": "#3c3c3c"
      //       }
      //     ]
      //   },
      //   {
      //     "featureType": "road.highway.controlled_access",
      //     "elementType": "geometry",
      //     "stylers": [
      //       {
      //         "color": "#4e4e4e"
      //       }
      //     ]
      //   },
      //   {
      //     "featureType": "road.local",
      //     "elementType": "labels.text.fill",
      //     "stylers": [
      //       {
      //         "color": "#616161"
      //       }
      //     ]
      //   },
      //   {
      //     "featureType": "transit",
      //     "elementType": "labels.text.fill",
      //     "stylers": [
      //       {
      //         "color": "#757575"
      //       }
      //     ]
      //   },
      //   {
      //     "featureType": "water",
      //     "elementType": "geometry",
      //     "stylers": [
      //       {
      //         "color": "#000000"
      //       }
      //     ]
      //   },
      //   {
      //     "featureType": "water",
      //     "elementType": "labels.text.fill",
      //     "stylers": [
      //       {
      //         "color": "#3d3d3d"
      //       }
      //     ]
      //   }
      // ]

      // white and grey
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

  // var request = {
  //   center: pyrmont,
  //   location: pyrmont,
  //
  // };
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
      icon: image,
      title: place.name,
      position: place.geometry.location
    });

    // placesList.innerHTML += '<li>' + place.name + '</li>';

    bounds.extend(place.geometry.location);
  }
  map.fitBounds(bounds);
}
