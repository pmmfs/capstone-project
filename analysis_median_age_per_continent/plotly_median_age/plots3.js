// Extreme Poverty Rating Per Continent
var trace = {
    x: ["Africa", "Asia", "Europe", "North America", "Oceania"],
       y: [32.67, 5.30, 0.94, 5.07, 0.92],
       type: "line"
       
      };
      var data = [trace];
      var layout = {
       title: " Poverty Rating Per Continent",
       xaxis: { title: "Continent"},
       yaxis: { title: "Extreme Poverty Rating"}
      };
      Plotly.newPlot("plotArea-PR", data, layout);

      // Covid 19 Affected Age Group in Africa
var trace1 = {
    x: ["(0,20)", "(20,30)", "(30,40)", "(40,50)"],
       y: [31, 15, 3, 0],
       type: "line"
       
      };
      var data1 = [trace1];
      var layout1 = {
       title: " Covid 19 Affected Age Group in Africa",
       xaxis: { title: "Median Age Group"},
       yaxis: { title: "Country Count"}
      };
      Plotly.newPlot("plotArea-AF", data1, layout1);


  // Covid 19 Affected Age Group in Europe
  var trace2 = {
    x: ["(0,20)", "(20,30)", "(30,40)", "(40,50)"],
       y: [0, 0, 8, 29],
       type: "line"
       
      };
      var data2 = [trace2];
      var layout2 = {
       title: " Covid 19 Affected Age Group in Europe",
       xaxis: { title: "Median Age Group"},
       yaxis: { title: "Country Count"}
      };
      Plotly.newPlot("plotArea-EU", data2, layout2);

// Covid 19 Affected Age Group in Asia
var trace3 = {
    x: ["(0,20)", "(20,30)", "(30,40)", "(40,50)"],
       y: [3, 18, 17, 5],
       type: "line"
       
      };
      var data3 = [trace3];
      var layout3 = {
       title: " Covid 19 Affected Age Group in Asia",
       xaxis: { title: "Median Age Group"},
       yaxis: { title: "Country Count"}
      };
      Plotly.newPlot("plotArea-AS", data3, layout3);


