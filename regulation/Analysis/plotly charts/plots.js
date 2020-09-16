// ____________________Total Deaths______________________________
var trace = {
    labels: ['Population','Population Density','Median Age','Total Cases','StringencyIndex'],
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
    labels: ['Date','Population','Population Density','Median Age','EconomicSupportIndex','ContainmentHealthIndex','StringencyIndex'],
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
    labels: ['Date','Population','Population Density','Median Age','New Cases','StringencyIndex'],
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
    labels: ['Date Updated','Population','Population Density','Median Age','EconomicSupportIndex','ContainmentHealthIndex','StringencyIndex'],
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

// _______________________________STRINGENCY INDEX COMPONENT____________________________________

// ____________________Total Deaths______________________________
var trace4 = {
    labels: ['School closing',
    'Workplace closing','Cancel public events','Restrictions on gatherings','Close public transport',
    'Stay at home requirements','Restrictions on internal movement','International travel controls', 
     'Public information campaigns'],
    values: [8.64, 11.32,  8.44,  7.08,  5.33,
        14.62, 20.13, 21.17,  3.27],
    marker:{
        colors:['gold', 'mediumturquoise', 'darkorange','teal','lightgreen','coral','tomato']},
    'type': 'pie'    
   };
var data4 = [trace4];
var layout4 = {
    title: "Feature Importance for Total Death",
    
   };
Plotly.newPlot("plotArea-STD", data4, layout4);

// ___________________Total Cases_______________________________________

var trace1 = {
    labels: ['School closing','Workplace closing','Cancel public events','Restrictions on gatherings',
    'Close public transport','Stay at home requirements','Restrictions on internal movement',
    'International travel controls','Public information campaigns'],
    values: [8.44 , 12.00 ,  7.78,  7.33,  5.45,
        14.71, 19.88, 21.24,  3.19],
    marker:{
        colors:['gold', 'mediumturquoise', 'darkorange', 'coral','tomato','teal','lightgreen']},
    'type': 'pie'    
   };
var data1 = [trace1];
var layout1 = {
    title: "Feature Importance for Total Cases",
    
   };
Plotly.newPlot("plotArea-STC", data1, layout1);