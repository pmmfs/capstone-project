function init() {
  buildMetadata(940);
  buildCharts(940);
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
}

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var washFrequency = resultArray[0].wfreq;
      var PANEL = d3.select("#sample-metadata");

      PANEL.html("")

      Object.entries(result).forEach(([key,value]) => {
          key = key.toUpperCase();
          PANEL.append("h6").text(`${key}: ${value}`);
      });
    });
}

function buildCharts(sample){
  d3.json("samples.json").then((data) => {
    var samples = data.samples;
    var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    var topResults = resultArray[0];
    var xAxis = topResults.sample_values.slice(0,10).reverse();
    var yAxis = topResults.otu_ids.slice(0,10).map(otu_id => `OTU ${otu_id}`).reverse();
    var labels = topResults.otu_labels.slice(0,10).reverse();
    var bubbleValues = resultArray[0].sample_values;
    var bubbleIds = resultArray[0].otu_ids;
    var bubbleLabels = resultArray[0].otu_labels;
    var PANEL = d3.select("#bar");
    var PANEL = d3.select("#bubble");
  
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var washFrequency = resultArray[0].wfreq;
    var PANEL = d3.select("#gauge");  

  var topTen = [{
    x: xAxis,
    y: yAxis,
    type: "bar",
    orientation: 'h',
    text: labels
    }];

  var topTenLayout = {

  };

  var bubbleChart = [{
    x: bubbleIds,
    y: bubbleValues,
    mode: 'markers',
    text: bubbleLabels,
    marker: {size:bubbleValues, color:bubbleIds}
  }];

  var bubbleLayout = {
    xaxis:{title:{text: 'OTU ID'}}
  };
  
  var washFrequency = [{
    domain: {x:[0,1],y:[0,1]},
    value: washFrequency,
    title: {text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week", font: {size: 24}},
    type: "indicator",
    mode: "gauge+number",
    showlegend: false,
    gauge: {
      bar: {color:"black"},
      axis: { range: [0, 9],  tickmode: "array", tickvals:[1,2,3,4,5,6,7,8,9] ,ticktext:["0-1","1-2","2-3","3-4","4-5","5-6","6-7","7-8","8-9"], ticks:""},
      steps: [
        { range: [0, 1], color: 'rgb(255, 242, 242)' },
        { range: [1, 2], color: 'rgb(255, 219, 219)' },
        { range: [2, 3], color: 'rgb(255, 191, 191)' },
        { range: [3, 4], color: 'rgb(255, 161, 161)' },
        { range: [4, 5], color: 'rgb(255, 130, 130)' },
        { range: [5, 6], color: 'rgb(255, 105, 105)' },
        { range: [6, 7], color: 'rgb(255, 74, 74)' },
        { range: [7, 8], color: 'rgb(255, 38, 38)' },
        { range: [8, 9], color: 'rgb(250, 0, 0)' }
      ]}
    }]

  var washLayout = {
    width:600, 
    height:500, 
    margin:{t:0,b:0}
  };
  
  Plotly.newPlot("bar", topTen, topTenLayout);
  Plotly.newPlot("gauge", washFrequency, washLayout);
  Plotly.newPlot("bubble", bubbleChart, bubbleLayout);
});
})};

init();