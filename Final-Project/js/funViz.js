var width = d3.select("#my_dataviz").style('width');
width = parseInt(width)


var margin = {top: 10, right: 30, bottom: 80, left: 60},
    width = width - margin.left - margin.right,
    height = 610 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
    
console.log('hello')

//Read the data
//https://d3-graph-gallery.com/graph/line_several_group.html
//multi-line graphs
function drawChart() {
  d3.csv("./HW1-assets/csv/test.csv", function(data) {
    //console.log(data)
    // group the data: I want to draw one line per group
    var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
      .key(function(d) { return d.driver;})
      .entries(data);
  


  
  var x = d3.scaleBand()
    .domain(data.map(function(d) { return d.race; }))
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).ticks(5))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");
  
    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return + d.n; })])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));
  
    // color palette
    var res = sumstat.map(function(d){ return d.key }) // list of group names
    var color = d3.scaleOrdinal()
      .domain(res)
      .range(['#377eb8', '#e41a1c', '#4daf4a','#984ea3','#AF6800','#00AF8C','#a65628','#f781bf','#999999'])
  
   
    // Draw the line
    svg.selectAll(".line")
        .data(sumstat)
        .enter()
        .append("path")
          .attr("fill", "none")
          .attr("stroke", function(d){ return color(d.key) })
          .attr("stroke-width", 1.5)
          .attr("d", function(d){
            return d3.line()
              .x(function(d) { return x(d.race); })
              .y(function(d) { return y(+d.n); })
              (d.values)
          })
  
    svg.append("text")
    .attr("class", "x label")
    // .attr("text-anchor", "Start")
    .attr("x", width/2-50)
    .attr("y", height + 80)
    .text("Race Name");
  
    svg.append("text")
      .attr("class", "y label")
      .attr("text-anchor", "end")
      .attr("y", -50)
      .attr("x", -200)
      .attr("dy", ".75em")
      .attr("transform", "rotate(-90)")
      .text("Driver Points Total");
  
  
  
    svg.append("text")
      .attr("transform", "translate(" + (width+3) + "," + y(data[506].n) + ")")
      .attr("dy", 5)
      .attr("text-anchor", "middle")
      .attr("id", "VER")
      .style("fill", "#377eb8")
      .text("VER");
  
    svg.append("text")
      .attr("transform", "translate(" + (width+3) + "," + y(data[507].n) + ")")
      .attr("dy", -10)
      .attr("text-anchor", "middle")
      .style("fill", "#e41a1c")
      .text("LEC");
  
    svg.append("text")
      .attr("transform", "translate(" + (width+3) + "," + y(data[508].n) + ")")
      .attr("dy", 10)
      .attr("text-anchor", "middle")
      .style("fill", "#4daf4a")
      .text("PER");
  
    svg.append("text")
      .attr("transform", "translate(" + (width+3) + "," + y(data[509].n) + ")")
      .attr("dy", 3)
      .attr("text-anchor", "middle")
      .style("fill", "#984ea3")
      .text("RUS");
  
    svg.append("text")
      .attr("transform", "translate(" + (width+3) + "," + y(data[510].n) + ")")
      .attr("dy", 10)
      .attr("text-anchor", "middle")
      .style("fill", "#AF6800")
      .text("HAM");
  
    svg.append("text")
      .attr("transform", "translate(" + (width+3) + "," + y(data[511].n) + ")")
      .attr("dy", -5)
      .attr("text-anchor", "middle")
      .style("fill", "#00AF8C")
      .text("SAI");
  
  })
  console.log('world')
}


drawChart()


window.addEventListener("resize", drawChart);
