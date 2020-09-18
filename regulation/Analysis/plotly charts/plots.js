// ____________________Total Deaths______________________________
var trace = {
    labels: ['Population','Population Density','Median Age','Total Cases','EconomicSupportIndex','ContainmentHealthIndex','StringencyIndex'],
    values: [ 2.32,  0.50,  3.17, 83.23,  1.97,
        0.40,  8.41],
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
    labels: ['Population','Population Density','Median Age','EconomicSupportIndex','ContainmentHealthIndex','StringencyIndex'],
    values: [20.22,  2.79,  6.77 , 25.12, 19.18,
        25.91713592],
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
    labels: ['Population','Population Density','Median Age','New Cases','Total Deaths','EconomicSupportIndex','ContainmentHealthIndex','StringencyIndex'],
    values: [0.95,  1.99,  1.42, 74.81, 12.57,
        2.34,  2.92,  3.01],
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
    labels: ['Population','Population Density','Median Age','EconomicSupportIndex','ContainmentHealthIndex','StringencyIndex'],
    values: [24.36,  2.94,  9.94, 31.15, 19.49 ,
        12.13],
    marker:{
        colors:['gold', 'mediumturquoise', 'darkorange', 'coral','tomato','teal','lightgreen']},
    'type': 'pie'    
   };
var data3 = [trace3];
var layout3 = {
    title: "Feature Importance for New Cases",
    
   };
Plotly.newPlot("plotArea-NC", data3, layout3);

