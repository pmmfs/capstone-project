// Add console.log to check to see if our code is working.
console.log("working");


  // We create the tile layer that will be the background of our map.
let locations = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
     
  maxZoom: 18,
  accessToken: API_KEY
  });
  // Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 3,
  layers: [locations]
  });
  
// Create a base layer that holds both maps.
let baseMaps = {
"Covid 19 Impacted locations": locations,

};

// Create the earthquake layer for our map.
let all_locations = new L.layerGroup();
// Create total deaths layer
let totaldeaths_top10locations =new L.layerGroup();

// We define an object that contains the overlays.
// This overlay will be visible all the time.
let overlays = {
  
"Total Deaths Top 10 Locations": totaldeaths_top10locations,
"All locations": all_locations
  
};

// Pass our map layers into our layers control and add the layers control to the map.
//L.control.layers(baseMaps).addTo(map);
// Then we add a control to the map that will allow the user to change
// which layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);


// Retrieve the Merged Covid GeoJSON data.
d3.json("https://raw.githubusercontent.com/pmmfs/capstone-project/FA-2/regulation/Resources/merged_covid_lon_lat.geojson").then(function(data) {
// Creating a GeoJSON layer with the retrieved data.
//L.geoJson(data).addTo(map);
//});

var geojsonMarkerOptions = {
  radius: 10,
  fillColor: "#ff7800",
  color: "brown",
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

