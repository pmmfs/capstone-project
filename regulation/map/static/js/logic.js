// Add console.log to check to see if our code is working.
console.log("working");


  // We create the tile layer that will be the background of our map.
let satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
     
  maxZoom: 18,
  accessToken: API_KEY
  });

  // We create the dark view tile layer that will be an option for our map.
  let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
  });

  // We create the dark view tile layer that will be an option for our map.
  let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
  });

  
  // Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 3,
  layers: [satellite]
  });
  
// Create a base layer that holds both maps.
let baseMaps = {
"Satellite View": satellite,
"Street View": streets,
"Light view":light
};

// Create the all location layer for our map.
let all_locations = new L.layerGroup();
// Create total deaths layer
let totaldeaths_top5locations =new L.layerGroup();
// Create stringency Index layer
let top5_StringencyIndex =new L.layerGroup();

// We define an object that contains the overlays.
// This overlay will be visible all the time.
let overlays = {
  

"All locations": all_locations,
"Top 5 locations with High Death Rate": totaldeaths_top5locations,
"Top 5 locations with High Stringency Index": top5_StringencyIndex
};
// Pass our map layers into our layers control and add the layers control to the map.
//L.control.layers(baseMaps).addTo(map);
// Then we add a control to the map that will allow the user to change
// which layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);
 // Retrieve the Merged Covid GeoJSON data.
d3.json("https://raw.githubusercontent.com/pmmfs/capstone-project/FA-2/regulation/Resources/merged_covid_lon_lat.geojson").then(function(data) {
var geojsonMarkerOptions = {
  radius: 10,
  fillColor: "blue",
  color: "white",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
// We turn each feature into a circleMarker on the map.
pointToLayer: function(feature, latlng) {
              return L.circleMarker(latlng, geojsonMarkerOptions);
               
        },
     // We create a popup for each circleMarker to display the magnitude and
  //  location of the earthquake after the marker has been created and styled.
  onEachFeature: function(feature, layer) {
      layer.bindPopup("Continent: " + feature.properties.continent + "<br>Country: " + feature.properties.location);
    }
  
  }).addTo(all_locations);
// Adding the all locations layer to our map
  all_locations.addTo(map);
// Reading total death data
  d3.json("https://raw.githubusercontent.com/pmmfs/capstone-project/FA-2/regulation/Resources/Top5TotalDeaths.json").then(function(data) {
    var geojsonMarkerOptions = {
      radius: 10,
      fillColor: "blue",
      color: "white",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
    
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
                  return L.circleMarker(latlng, geojsonMarkerOptions);
                   
            },
         // We create a popup for each circleMarker to display the magnitude and
      //  location of the earthquake after the marker has been created and styled.
      onEachFeature: function(feature, layer) {
          layer.bindPopup("Continent: " + feature.properties.continent + "<br>Country: " + feature.properties.location);
        }
      
      }).addTo(all_locations);
    // Adding the all locations layer to our map
      all_locations.addTo(map);
    
    












}); 

