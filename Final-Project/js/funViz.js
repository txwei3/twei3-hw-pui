var data = [
    {letter: "A", frequency: .08167},
    {letter: "B", frequency: .01492},
    {letter: "C", frequency: .02780},
    {letter: "D", frequency: .04253},
    {letter: "E", frequency: .12702},
    {letter: "F", frequency: .02288},
    {letter: "G", frequency: .02022},
    {letter: "H", frequency: .06094},
    {letter: "I", frequency: .06973},
    {letter: "J", frequency: .00153},
    {letter: "K", frequency: .00747},
    {letter: "L", frequency: .04025},
    {letter: "M", frequency: .02517},
    {letter: "N", frequency: .06749},
    {letter: "O", frequency: .07507},
    {letter: "P", frequency: .01929},
    {letter: "Q", frequency: .00098},
    {letter: "R", frequency: .05987},
    {letter: "S", frequency: .06333},
    {letter: "T", frequency: .09056},
    {letter: "U", frequency: .02758},
    {letter: "V", frequency: .01037},
    {letter: "W", frequency: .02465},
    {letter: "X", frequency: .00150},
    {letter: "Y", frequency: .01971},
    {letter: "Z", frequency: .00074}
  ];

var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var formatPercent = d3.format(".0%")


// var x = d3.scaleOrdinal()
//     .rangeRoundBands([0, width], .1);

var x = d3.scaleBand()
    .range([0, width])
    .round([.1]);

var y = d3.scaleLinear()
    .range([height, 0]);


var xAxis = d3.axisBottom()
    .scale(x);

var yAxis = d3.axisLeft()
    .scale(y);

var svg = d3.select("#my_dataviz")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return x(d.letter); })
    .attr("width", x.bandwidth())
    .attr("y", function(d) { return y(d.frequency); })
    .attr("height", function(d) { return height - y(d.frequency); })


      

//console.log(dtpDictionary)