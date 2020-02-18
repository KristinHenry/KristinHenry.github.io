/*

ToDo: add annotations for important dates:
        Election day: Tuesday, November 8, 2016
        Inauguration: Friday, Jan. 20, 2017

        protest? crowd sizes?
*/

//-------------------------------------------
// update these, when new video data added
var first_transcript = "noRules.txt";
var datafile = "randy_24.csv";
var views_date = "2020-02-18"; // is this working now?

//-------------------------------------------

console.log('loading data')

var svg = d3.select("#chart").append("svg");
var lastCell;
var selected;

var lineColor = "#ccc"

// svg.attr("width", 800)
svg.attr("width", 900)
  .attr("height", 500)  
   // .attr("height", 500)
   // .style("background-color", "#E6E5E3")

// var margin = {top: 40, right: 40, bottom: 40, left: 100},
var margin = {top: 40, right: 40, bottom: 40, left: 100},
    width = svg.attr("width") - margin.left - margin.right,
    height = svg.attr("height") - margin.top - margin.bottom;


var parseTime = d3.timeParse("%b %d, %Y");
var formatDate = d3.utcFormat("%b %d, %Y");

var fade = .8;
var info_x = 20; 
var info_y = -height + margin.top
var firstCell;


var formatValue = d3.format(",d");

var y = d3.scaleTime()
    .range([height, 0]);

var rMin = 3;
var rMax = 20;
var r = d3.scaleLinear()
        // .range([3,20])
        .range([rMin,rMax])

var max_bar = 190;
var bar_w = d3.scaleLinear()
        .range([3,max_bar]);

var bar_w_reversed = d3.scaleLinear()
        .range([max_bar, 3]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var ln = g.append("g")
    //.attr("opacity", 0)
    // down side of text box
    var lines = {"x1":120, "x2": 170, "y1":50, "y2":400, "y3": 175};
    
    ln.append("line")
      .attr("x1", lines.x1)
      .attr("y1", lines.y1)
      .attr("x2", lines.x1)
      .attr("y2", lines.y2)
      .attr("stroke-width", 1)
      .attr("stroke", lineColor);

    ln.append("line")
      .attr('x1', lines.x1)
      .attr("y1", lines.y3)
      .attr("x2", lines.x2)
      .attr("y2", lines.y3)
      .attr("stroke-width", 1)
      .attr("stroke", lineColor)

var bubbleLine = ln.append("g").attr("id", "bubbleLine")

// Define the div for the tooltip
var  div = d3.select("#chart").append("div") 
    .attr("class", "tooltip")   
    .style("opacity", 1)
    .style("height", height);

// save video data, so we can more easily access it from transcript data
var video_data = {};

// keep track of words to show
var word_list = [];

// for controlling how often word-burst on mouseover
var words_active = 0;

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

d3.csv(datafile, function(error, data) {
  if (error) throw error;



  data.forEach(function(d){

    console.log(d)

    d['Date_str'] = cleanDate(d['Date_str'])

    // only restructuring video data, if we have a transcript file for it
    if(d.transcript != 'none'){
      video_data[d.transcript] = d;
    }

    // console.log(d)

    // remove commas and convert to int
    //d.views = d["views_as_of_Jan-15-18"]
    if(d[views_date]){
      d.views = d[views_date]
    } else {
      d.views = 1,000;
    }
    d.views = parseInt(d.views.replace(/\,/g,''))

    d.pub_date = d["Date_str"]
    d.date = parseTime(d["Date_str"]);
  })

  
   y.domain(d3.extent(data, function(d) { return d.date; }));
   r.domain(d3.extent(data, function(d){ return d.views; }));
   bar_w.domain(d3.extent(data, function(d){ return d.views; }));
   bar_w_reversed.domain(bar_w.domain())


   data.forEach(function(d){
    console.log(d)
    d.r = r(d.views)
   })


// var simulation = d3.forceSimulation(data)
//       .force("x", d3.forceX(function(d) { return x(d.date); }).strength(1))
//       .force("y", d3.forceY(height / 2))
//       .force("collide", d3.forceCollide(4))
//       .stop();

  var simulation = d3.forceSimulation(data)
      .force("x", d3.forceX(width / 2))
      .force("y", d3.forceY(function(d) { return y(d.date); }).strength(1))
      .force("collide", d3.forceCollide(function(d,i){
        // console.log('----------collide')
        // console.log(rMax, r(d.views))
        // console.log(i,d) 
        //return (rMax + r(d.views));



        return r(d.views)*1.6; 
        // return rMax*1.5;
        }))
      .stop();

  for (var i = 0; i < 120; ++i) simulation.tick();

  // axes, for line-bar chart 
  g.append("g")
    .attr("class", "axis axis--y")
    .attr("transform", "translate(" + width + ", 0)")
    .call(d3.axisRight(y).ticks(7).tickSize(0).tickSizeOuter(0))


  g.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(" + (width-max_bar) + ", 0)")
    // .call(d3.axisTop(bar_w_reversed))
    .call(d3.axisTop(bar_w_reversed).ticks(3).tickSize(0).tickSizeOuter(0))
  g.append("text")
    .attr("transform", "translate(" + (width-(max_bar/2)) + ", -20)")
    .style("text-anchor", "middle")
    .text("Views (on youtube)")

 

  var cell = g.append("g")
      .attr("class", "cells")
    .selectAll("g").data(d3.voronoi()
        .extent([[-margin.left, -margin.top], [width + margin.right, height + margin.top]])
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; })
      .polygons(data)).enter().append("g")
      .style("opacity", fade);


  cell.append("clipPath")
        .attr("id", function(d,i){ return "clip_" + i;} )
        .append("circle")
        .attr("r", function(d){ return d ? r(d.data.views): r(10); })
        .attr("cx", function(d){ return r(d.data.views) + d.data.x; })
        .attr("cy", function(d){ return r(d.data.views) + d.data.y; })
    

  // ToDo: find cleaner way to set firstCell for initial info to display
  var transcript_0 = first_transcript; //"beforeHeTweets.txt"
  cell.append("svg:image")  
      .attr("id", function(d,i){ if(d.data.transcript == transcript_0) firstCell = d; return d.data.transcript; })
      .attr("link:href", function(d){ return d.data['song_parody'] == "y" ? "randy_pink.jpg" : "randy_teal.jpg"})  
      .attr("width", function(d){ return r(d.data.views) * 2; })
      .attr("height", function(d){ return r(d.data.views) * 2; })
      .attr("x", function(d){ return d.data.x; })
      .attr("y", function(d){ return d.data.y; })
      .attr("class", "img")
      .attr("clip-path", function(d,i){ return "url(#clip_" + i + ")"; })



  var lastCell;
  // // show initial info, without needing to mouse-over, with transcript='beforeHeTweets'
  showToolTip(firstCell, info_x, info_y)

  cell.on("mouseover", function(d){

      if(lastCell) lastCell.style("opacity", fade)


      d3.selectAll(".bar")
        .style("opacity", .2)

      d3.selectAll(".cell")
        .style("opacity", .4)


      d3.select(this)
          .style("opacity", 1)
          .select(".info")
            .style("opacity", 1)


      d3.select("#bar_" + d.data.video_id)
        .style("opacity", 1)
      

      ln.select("g").remove()

      showToolTip(d, info_x, info_y);
      lastCell = d3.select(this);
      
    })

    cell.on("mouseout", function(d){
      lastCell.style("opacity", .4)
    })


    // bar chart
    g.append("g")
      .selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("id", function(d){ return "bar_"+ d.video_id; })
      .attr("x", function(d){ return width- bar_w(d.views); })
      .attr("y", function(d,i){ return y(d.date); }) //return 10*i; })
      .attr("width", function(d){ return bar_w(d.views); })
      .attr("height", 1)
      .attr("opacity", .2)
      .style("fill", function(d){ return d['song_parody'] == "y" ? "#c42edb" : "#30b6bf" })

});




function showToolTip(d, x, y){
  //console.log("show tooltip: ", d)

  var d = d.data;
  var word_x = d.x;
  var word_y = d.y + (d.r*2);

  var words = '';

  // ************************************************
  // console.log("data: ", d.video_id)

  var thumbnail = "imgs/randyThumbnails/" + d.video_id + ".jpg";
  // console.log("thumb: ", thumbnail)
 

 var song_parody = "<p>"
 if(d['song_parody'] == "y") song_parody = "<p><font color='#870F87'>Song Parody</font><br/>"

  div.transition()    
                .duration(100)    
                .style("opacity", .9);    
  div.html("<p><b><i>" + d['video_title'] + "</i></b></p> " +
            song_parody +

            // ToDo: format d.views with commas...ie 1000 -> 1,000

            "Views: " + d3.format(",")(d.views) + "<br/>" +
            "Published: " + d.Date_str + "<br/>" +
            "</p>" +
            "<p><a href='" + d['video_link'] +  "' target='_blank'>" + "Go to Video" + "</a></p>" +
             "<p>" + words + "</p>"
            )

    .style("left", x + "px")
    .style("top", function(){ return y + "px";})


    var g = div.append("svg").append("g")
      g.append("svg:image")  
      .attr("x", 0)
      .attr("y", -50)
      .attr("width", 190)
      .attr("height", 190)
      // .attr("id", function(d,i){ if(d.data.transcript == transcript_0) firstCell = d; return d.data.transcript; })
      .attr("xlink:href", thumbnail)  
      .style("opacity", .9)
      
      g.append("rect")
      .attr("x", 2)
      .attr("y", 2)
      .attr("width", 185)
      .attr("height", 95)
      //.style("fill", "#fff")
      .style("fill-opacity", 0)
      .style("stroke", "#fff")
      .style("stroke-width", 6)
      .style("opacity", .5)
      
    
    // clear old line, from last mouseover
    d3.select("#bubbleLine").remove();

    //draw line from bubble to info
    var bl = ln.append("g").attr("id", "bubbleLine")


    // ToDo: rewrite more concicely
    bl.append("line")
      .attr("x1", d.x+d.r)
      .attr("y1", d.y+d.r)
      .attr("x2", lines.x2)
      .attr("y2", d.y+d.r)
      .attr("stroke-width", 1)
      .attr("stroke", lineColor);

    bl.append("line")
      .attr("x1", lines.x2)
      .attr("y1", d.y+d.r)
      .attr("x2", lines.x2)
      .attr('y2', lines.y3)
      .attr("stroke-width", 1)
      .attr("stroke", lineColor);


    // symbols for musical notes
    var notes = ["\u266B", "\u266A", "\u2669", "\u266C"]


    //console.log("from tooltip: ", d.transcript)

    // These are for the word explosions
    if(word_data && (words_active < 50)){
        if(word_data[d.transcript]) {
         
          word_data[d.transcript].words.forEach(function(e){
            
            create_word(e.word, word_x, word_y)
            //console.log('song parody', d['song_parody'], d)
            if(d['song_parody'] != "n") create_word(notes[randomRange(0,3)], word_x, word_y)

          })

        } else {
          create_word("Oops! No transcript yet", word_x, word_y)
          if(d['song_parody'] == "y") create_word(notes[1], word_x, word_y)
        }

    }
   

}


function create_word(word, x, y){

  words_active += 1;
  
  x1 = x - randomRange(-100, 100);
  y1 = y - randomRange(50, 100);

  x2 = x1 + randomRange(-100, 100);

  w = g.append("g")
    .attr("class", "words")
    .append("g")
    .append("text")
    .attr("x", x)
    .attr("y", y)
    .attr("font-size", ".1em")
    .text(word)
  w.transition()
    .attr("x", x1)
    .attr("y", y1)
    .attr("font-size", "1em")
    .duration(500)
    .ease(d3.easeCircleInOut)
  .transition()
      .attr("x", x2)
      .attr("y", height+100)
      .attr("opacity", .4)
      .attr("transform", "rotate(" + randomRange(-4,4) + ", 0, 0)")
      .duration(randomRange(1000, 3000))
      .ease(d3.easeBounce)
  .transition()
      .attr("opacity", .1)
      .duration(500)
      .remove()
      .on("end", function(){words_active--;})
}


var word_data = {};

// d3.json("randyWords.txt", function(error, data) {

d3.json("transcriptWords.txt", function(error, data) {
  if (error) throw error;
  // console.log(data)

  var sets = data.words;

  sets.forEach(function(d){ word_data[d.fileName] = d; })

});



function randomRange(min, max){ 
  return Math.floor((Math.random() * (max - min + 1)) + min); 
}


