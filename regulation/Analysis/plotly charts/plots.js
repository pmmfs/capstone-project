// ____________________Total Deaths______________________________
var trace = {
    labels: ['population','population_density','median_age','total_cases_updated','StringencyIndex_updated'],
    values: [2.71,  1.70,  3.57, 83.08,  8.95],
    marker:{
        colors:['gold', 'mediumturquoise', 'darkorange','teal','lightgreen','coral','tomato']},
    'type': 'pie'    
   };
var data = [trace];
var layout = {
    title: "Feature Importance for Total Death",
    
   };
Plotly.newPlot("plotArea-TD", data, layout);

// ___________________Total Cases_______________________________________

var trace1 = {
    labels: ['date_updated','population','population_density','median_age','EconomicSupportIndex_updated','ContainmentHealthIndex_updated','StringencyIndex_updated'],
    values: [30.4, 20.61, 20.95, 5.62, 8.6, 6.82, 7.0],
    marker:{
        colors:['gold', 'mediumturquoise', 'darkorange', 'coral','tomato','teal','lightgreen']},
    'type': 'pie'    
   };
var data1 = [trace1];
var layout1 = {
    title: "Feature Importance for Total Cases",
    
   };
Plotly.newPlot("plotArea-TC", data1, layout1);

// ______________________New Deaths______________________________________________

var trace2 = {
    labels: ['date_updated','population','population_density','median_age','new_cases','StringencyIndex_updated'],
    values: [13.23, 1.94, 2.7, 3.25, 75.27, 3.61],
    marker:{
        colors:['gold', 'mediumturquoise', 'darkorange', 'coral','tomato','teal','lightgreen']},
    'type': 'pie'    
   };
var data2 = [trace2];
var layout2 = {
    title: "Feature Importance for New Deaths",
    
   };
Plotly.newPlot("plotArea-ND", data2, layout2);

// ______________________New Cases______________________________________________

var trace3 = {
    labels: ['date_updated','population','population_density','median_age','EconomicSupportIndex_updated','ContainmentHealthIndex_updated','StringencyIndex_updated'],
    values: [26.6, 23.5, 3.07, 14.51, 28.08, 2.85, 1.39],
    marker:{
        colors:['gold', 'mediumturquoise', 'darkorange', 'coral','tomato','teal','lightgreen']},
    'type': 'pie'    
   };
var data3 = [trace3];
var layout3 = {
    title: "Feature Importance for New Cases",
    
   };
Plotly.newPlot("plotArea-NC", data3, layout3);