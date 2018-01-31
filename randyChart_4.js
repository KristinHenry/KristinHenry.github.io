var svg = d3.select("#chart").append("svg");

console.log(svg.x)

svg.attr("width", 600)
   .attr("height", 500)
   .style("background-color", "#E6E5E3")

var margin = {top: 40, right: 40, bottom: 40, left: 100},
    width = svg.attr("width") - margin.left - margin.right,
    height = svg.attr("height") - margin.top - margin.bottom;


var parseTime = d3.timeParse("%b %d, %Y");
var formatDate = d3.utcFormat("%b %d, %Y");


var formatValue = d3.format(",d");

var y = d3.scaleTime()
    .range([height, 0]);

var r = d3.scaleLinear()
        .range([3,20])

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Define the div for the tooltip
var  div = d3.select("#chart").append("div") 
    .attr("class", "tooltip")   
    .style("opacity", 1);


d3.csv("randy_2.csv", function(error, data) {
  if (error) throw error;

  data.forEach(function(d){
    // remove commas and convert to int
    d.views = d["views_as_of_Jan-15-18"]
    d.views = parseInt(d.views.replace(/\,/g,''))

    d.pub_date = d["Date_str"]
    d.date = parseTime(d["Date_str"]);
  })

  
   y.domain(d3.extent(data, function(d) { return d.date; }));
   r.domain(d3.extent(data, function(d){ return d.views; }))

  var simulation = d3.forceSimulation(data)
      .force("y", d3.forceY(function(d) { return y(d.date); }).strength(1))
      .force("x", d3.forceX(width / 2))
      .force("collide", d3.forceCollide(function(d){ return r(d.views)*1.5; }))
      .stop();

  for (var i = 0; i < 120; ++i) simulation.tick();


  g.append("g")
    .attr("class", "axis axis--y")
    .attr("transform", "translate(" + width + ", 0)")
    .call(d3.axisRight(y).ticks(7).tickSize(0).tickSizeOuter(0))

  

  var cell = g.append("g")
      .attr("class", "cells")
    .selectAll("g").data(d3.voronoi()
        .extent([[-margin.left, -margin.top], [width + margin.right, height + margin.top]])
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; })
      .polygons(data)).enter().append("g");

  // cell.append("circle")
  //     .attr("r", function(d){ return r(d.data.views)})
  //     .attr("cx", function(d) { return d.data.x; })
  //     .attr("cy", function(d) { return d.data.y; });


  cell.append("clipPath")
        .attr("id", function(d,i){  return "clip_" + i;} )
        .append("circle")
        .attr("r", function(d){ return r(d.data.views); })
        .attr("cx", function(d){ return r(d.data.views) + d.data.x; })
        .attr("cy", function(d){ return r(d.data.views) + d.data.y; })
    

  cell.append("svg:image")  
      .attr("link:href", function(d){ return d.data['song_parody'] == "y" ? "randy_pink.jpg" : "randy_teal.jpg"})  
      .attr("width", function(d){ return r(d.data.views) * 2; })
      .attr("height", function(d){ return r(d.data.views) * 2; })
      .attr("x", function(d){ return d.data.x; })
      .attr("y", function(d){ return d.data.y; })
      .attr("class", "img")
      .attr("clip-path", function(d,i){ return "url(#clip_" + i + ")"; })


   cell.on("mouseover", function(d){

      // d3.select(this).selct(".img")
      //   .attr("transform", "rotate(-1)" );

      d3.select(this).select(".info")
        .attr("opacity", 1)
      var info_x = 20; 

      var info_y = -height; //y(d.data.date);

      showToolTip(d, info_x, info_y);
    })
});


function showToolTip(d, x, y){
  var d = d.data;
  

 var song_parody = "<p>"
 if(d['song_parody'] == "y") song_parody = "<p><font color='#870F87'>Song Parody</font><br/>"

  div.transition()    
                .duration(200)    
                .style("opacity", .9);    
  div.html("<p><b><i>" + d['video_title'] + "</i></b></p> " +
            song_parody +
            "Views: " + d["views_as_of_Jan-15-18"] + "<br/>" +
            "Published: " + d.Date_str + "<br/>" +
            "</p>" +
            "<p><a href='" + d['video_link'] +  "' target='_blank'>" + "Go to Video" + "</a></p>"
            )

    .style("left", x + "px")
      .style("top", y + "px")



      



}