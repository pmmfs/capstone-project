// ____________________HEALTH & ECONOMIC INDEX COMPONENT____________________________________

// ____________________Total Deaths______________________________
var trace = {
    labels: ['Income support',
    'Debt/contract relief', 'Fiscal measures',
    'International support','Testing policy', 'Contact tracing',
    'Emergency investment in healthcare', 'Investment in vaccines'],
    values: [60.27, 13.40,  0.89,  0.09 , 18.40 ,
        5.81 ,  0.74,  0.41],
    marker:{
        colors:['rgb(158,1,66)',
        'rgb(213,62,79)',
        'rgb(244,109,67)',
        'rgb(253,174,97)',
        'rgb(254,224,139)',
        'rgb(255,255,191)',
        'rgb(230,245,152)',
        'rgb(171,221,164)',
        'rgb(102,194,165)',
        'rgb(50,136,189)',
        'rgb(94,79,162)']},
    'type': 'pie'    
   };
var data = [trace];
var layout = {
    title: "Feature Importance-HEI for Total Death",
    
   };
Plotly.newPlot("plotArea-HETD", data, layout);

// ___________________Total Cases_______________________________________

var trace1 = {
    labels: ['Income support',
    'Debt/contract relief', 'Fiscal measures',
    'International support','Testing policy', 'Contact tracing',
    'Emergency investment in healthcare', 'Investment in vaccines'],
    values: [51.77, 16.29,  1.06,  0.14, 23.84,
        5.39,  1.04,  0.52],
    marker:{
        colors:['#440154',
        '#482878',
        '#3e4989',
        '#31688e',
        '#26828e',
        '#1f9e89',
        '#35b779',
        '#6ece58',
        '#b5de2b',
        '#fde725']},
    'type': 'pie'    
   };
var data1 = [trace1];
var layout1 = {
    title: "Feature Importance-HEI for Total Cases",
    
   };
Plotly.newPlot("plotArea-HETC", data1, layout1);

// ______________________New Deaths______________________________________________

var trace2 = {
    labels: ['Income support',
    'Debt/contract relief', 'Fiscal measures',
    'International support','Testing policy', 'Contact tracing',
    'Emergency investment in healthcare', 'Investment in vaccines'],
    values: [63.95 , 11.71 ,  1.74,  0.12,  3.01,
        18.37,  0.78,  0.31],
    marker:{
        colors:['rgb(158,1,66)',
        'rgb(213,62,79)',
        'rgb(244,109,67)',
        'rgb(253,174,97)',
        'rgb(254,224,139)',
        'rgb(255,255,191)',
        'rgb(230,245,152)',
        'rgb(171,221,164)',
        'rgb(102,194,165)',
        'rgb(50,136,189)',
        'rgb(94,79,162)']},
    'type': 'pie'    
   };
var data2 = [trace2];
var layout2 = {
    title: "Feature Importance-HEI for New Deaths",
    
   };
Plotly.newPlot("plotArea-HEND", data2, layout2);

// ______________________New Cases______________________________________________

var trace3 = {
    labels: ['Income support',
    'Debt/contract relief', 'Fiscal measures',
    'International support','Testing policy', 'Contact tracing',
    'Emergency investment in healthcare', 'Investment in vaccines'],
    values: [63.80, 18.51,  1.29,  0.10,  8.61,
        6.41,  0.79,  0.50],
    marker:{
        colors:['#440154',
        '#482878',
        '#3e4989',
        '#31688e',
        '#26828e',
        '#1f9e89',
        '#35b779',
        '#6ece58',
        '#b5de2b',
        '#fde725']},
    'type': 'pie'    
   };
var data3 = [trace3];
var layout3 = {
    title: "Feature Importance-HEI for New Cases",
    
   };
Plotly.newPlot("plotArea-HENC", data3, layout3);

