// _______________________________STRINGENCY INDEX COMPONENT____________________________________

// ____________________Total Deaths______________________________
var trace = {
    labels: ['School closing',
    'Workplace closing','Cancel public events','Restrictions on gatherings','Close public transport',
    'Stay at home requirements','Restrictions on internal movement','International travel controls', 
     'Public information campaigns'],
    values: [8.64, 11.32,  8.44,  7.08,  5.33,
        14.62, 20.13, 21.17,  3.27],
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
    title: "Feature Importance-SI for Total Death",
    
   };
Plotly.newPlot("plotArea-STD", data, layout);

// ___________________Total Cases_______________________________________

var trace1 = {
    labels: ['School closing','Workplace closing','Cancel public events','Restrictions on gatherings',
    'Close public transport','Stay at home requirements','Restrictions on internal movement',
    'International travel controls','Public information campaigns'],
    values: [8.44 , 12.00 ,  7.78,  7.33,  5.45,
        14.71, 19.88, 21.24,  3.19],
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
    title: "Feature Importance-SI for Total Cases",
    
   };
Plotly.newPlot("plotArea-STC", data1, layout1);

// ______________________New Deaths______________________________________________

var trace2 = {
    labels: ['School closing',
    'Workplace closing','Cancel public events','Restrictions on gatherings','Close public transport',
    'Stay at home requirements','Restrictions on internal movement','International travel controls', 
     'Public information campaigns'],
    values: [5.50 ,  6.05,  2.05,  6.13,  5.60,
        13.86, 18.01, 42.04,  0.75],
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
    title: "Feature Importance-SI for New Deaths",
    
   };
Plotly.newPlot("plotArea-SND", data2, layout2);

// ______________________New Cases______________________________________________

var trace3 = {
    labels: ['School closing',
    'Workplace closing','Cancel public events','Restrictions on gatherings','Close public transport',
    'Stay at home requirements','Restrictions on internal movement','International travel controls', 
     'Public information campaigns'],
    values: [8.72,  5.68,  8.29,  7.10,  4.25,
        9.29, 17.11, 38.44,  1.13],
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
    title: "Feature Importance-SI for New Cases",
    
   };
Plotly.newPlot("plotArea-SNC", data3, layout3);

