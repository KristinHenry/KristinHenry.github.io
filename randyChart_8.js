/*

ToDo: add annotations for impportant dates:
        Election day: Tuesday, November 8, 2016
        Inauguration: Friday, Jan. 20, 2017

        protest? crowd sizes?


*/

//var anchors = ["Anchor1", "Anchor2", "Anchor3"]; // for words node-chart


var svg = d3.select("#chart").append("svg");
var lastCell;
var selected;

// console.log(svg.x)

svg.attr("width", 800)
   .attr("height", 500)
   .style("background-color", "#E6E5E3")

var margin = {top: 40, right: 40, bottom: 40, left: 100},
    width = svg.attr("width") - margin.left - margin.right,
    height = svg.attr("height") - margin.top - margin.bottom;


var parseTime = d3.timeParse("%b %d, %Y");
var formatDate = d3.utcFormat("%b %d, %Y");

var fade = .8;


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
    .style("opacity", 1)
    .style("height", height);

// save video data, so we can more easily access it from transcript data
var video_data = {};

// keep track of words to show
var word_list = [];

// ToDo: this can be a lot more consice!!!
function cleanDate(d){

  var s1 = d.split(",");
  var year = s1[1].trim();
 
  var s2 = s1[0].split(" ")
  var day = s2[1].trim();
  
  var month = s2[0].trim();
 
  month = (month.length >3) ? month.substring(0,3) : month;

  return month + " " + day + ", " + year;
}

d3.csv("randy_4_a.csv", function(error, data) {
  if (error) throw error;

  data.forEach(function(d){

    //console.log(d['Date_str'])
    d['Date_str'] = cleanDate(d['Date_str'])
    //console.log(d['Date_str'])

    // only restructuring video data, if we have a transcript file for it
    if(d.transcript != 'none'){
      video_data[d.transcript] = d;
    }


    // remove commas and convert to int
    //d.views = d["views_as_of_Jan-15-18"]
   // console.log('views', d["views_as_of_Feb-21-18"])
    if(d["views_as_of_Feb-21-18"]){
      d.views = d["views_as_of_Feb-21-18"]
    } else {
      d.views = 1,000;
    }
    d.views = parseInt(d.views.replace(/\,/g,''))

    d.pub_date = d["Date_str"]
    //console.log(d)
    //console.log(d["Date_str"])
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
      .polygons(data)).enter().append("g")
      .style("opacity", fade);

  // cell.append("circle")
  //     .attr("r", function(d){ return r(d.data.views)})
  //     .attr("cx", function(d) { return d.data.x; })
  //     .attr("cy", function(d) { return d.data.y; });


  cell.append("clipPath")
        .attr("id", function(d,i){ return "clip_" + i;} )
        .append("circle")
        // .attr("r", function(d){ console.log("****", d); return r(d.data.views); })
        .attr("r", function(d){ return d ? r(d.data.views): r(10); })
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


  var lastCell;


  cell.on("mouseover", function(d){

      if(lastCell) lastCell.style("opacity", fade)
     

      d3.select(this)
          .style("opacity", 1)
      //   .attr("transform", "rotate(-1)" );

          .select(".info")
            .attr("opacity", 1)
      
      var info_x = 20; 
      var info_y = -height + margin.top //-height - 60; // ToDo: clean this up...simplify positioning

      showToolTip(d, info_x, info_y);
      lastCell = d3.select(this);
      
    })

    cell.on("mouseout", function(d){

      d3.selectAll(".cell")
        .style("opacity", .4)

      lastCell.style("opacity", .4)
        // d3.select(this)
        //   .style("opacity", .4)
    })
});


function showToolTip(d, x, y){
  var d = d.data;

  var words = '';

  if(d['words']){

       console.log('***********************', d['words']['words'])
      // d['words']['words'].forEach(function(e){
      //     console.log(e.count, e.word)

      //     for(var i=0; i<e.count; i++){
      //       words += e.word;
      //       words += " ";
      //     }
      // })
  } else {

     words = "Oh shoot, no transcript available"
  }
  

 var song_parody = "<p>"
 if(d['song_parody'] == "y") song_parody = "<p><font color='#870F87'>Song Parody</font><br/>"

  div.transition()    
                .duration(100)    
                .style("opacity", .9);    
  div.html("<p><b><i>" + d['video_title'] + "</i></b></p> " +
            song_parody +

            // ToDo: format d.views with commas...ie 1000 -> 1,000

            "Views: " + d.views + "<br/>" +
            "Published: " + d.Date_str + "<br/>" +
            "</p>" +
            "<p><a href='" + d['video_link'] +  "' target='_blank'>" + "Go to Video" + "</a></p>" +
             "<p>" + words + "</p>"
            )

    .style("left", x + "px")
    .style("top", function(){ return y + "px";})
// 


  console.log("************************", words)



    if(word_data){
      if(word_data[d.transcript]) {
        console.log(d.transcript);
        console.log(word_data[d.transcript].words)
        word_data[d.transcript].words.forEach(function(d){
          console.log('raw words', d, d.count)
          for(var i=0; i<d.count; i++){
            create_word(d.word)
          }
        })
      }

    }
   

}


function create_word(word){
  console.log("create word: ", word)

  word_list.push(word);
  console.log(word_list);

}


var word_data = {};

d3.json("randyWords.txt", function(error, data) {
  if (error) throw error;

  var sets = data.words;

  // console.log(sets)


  // console.log('video data',video_data)

    sets.forEach(function(d){
      console.log(d)

      word_data[d.fileName] = d;

      console.log(d.size, d.fileName)

    })

    console.log(word_data)

});


// // This portion controls the timer loop
// var timer_elapsed = 0;
// var max_time = 50000;
// // Kick off the timer, and the action begins: 
// var timer = d3.timer(tickFxn);
// function tickFxn(elapsed) {
//   timer_elapsed = elapsed;
 
//   console.log(elapsed)
  
//   if (timer_elapsed > max_time) { timer.stop(); } // comment this out, if we want animation to not stop
// }
// 
