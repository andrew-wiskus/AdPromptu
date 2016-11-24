
myApp.controller('MapController', ['$scope', '$http', 'leafletDrawEvents', 'leafletData', function ($scope, $http, leafletDrawEvents, leafletData){

  // $uibModal.open({
  //   templateUrl: '/views/partials/greeting.html',
  //   controller: 'GreetingController',
  //   windowClass: 'app-modal-window'
  // });

  // Initialise the FeatureGroup to store drawn layers
  var drawnItems = new L.FeatureGroup();
  var featuresFromDB = null;
  var savedFeatures = new L.FeatureGroup();

  angular.extend($scope, {
    map: {
      minneapolis: {
        lat: 44.9766,
        lng: -93.2655,
        zoom: 14
      },
      layers: {
        baselayers: {
          mapbox_streets: {
            name: 'Map View',
            url: 'https://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
            type: 'xyz',
            layerOptions: {
              apikey: 'pk.eyJ1IjoiZWxpemFiZXRoIiwiYSI6IkNmdnB1cmMifQ.NlNxa3kOsDxhWJVGxZsPGg',
              mapid: 'mapbox.streets',
              attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
            }
          },
          mapbox_hybrid: {
            name: 'Satellite/Streets View',
            url: 'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWxpemFiZXRoIiwiYSI6IkNmdnB1cmMifQ.NlNxa3kOsDxhWJVGxZsPGg',
            type: 'xyz',
            layerOptions: {
              // apikey: 'pk.eyJ1IjoiZWxpemFiZXRoIiwiYSI6IkNmdnB1cmMifQ.NlNxa3kOsDxhWJVGxZsPGg',
              mapid: 'mapbox.satellite',
              attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
            }
          }
        },
        overlays: {
        }
      },
      defaults: {
          scrollWheelZoom: false,
          minZoom: 12,
          path: {
              weight: 10,
              color: '#800000',
              opacity: 1
          }
      },
      drawOptions: {
        position: "bottomright",
        draw: {
          polyline: {
            metric: false
          },
          polygon: false,
          rectangle: false,
          circle: false,
          marker: true
        },
        edit: {
        featureGroup: drawnItems,
        remove: false
        }
      }
    }
  });





////--------- from http://jsfiddle.net/jehope/9x86F/ --------------






// End controller
}]);
