


function drawZipSearch(targ){
  console.log("draw ZipSearch");

  var containerWidth = +d3.select(targ).style('width').slice(0, -2)

  var margin = {top: 50, right: 60, bottom: 40, left: 50},
    width = containerWidth - margin.left - margin.right,
    height = 320 - margin.top - margin.bottom;



  var form = d3.select(targ).append("div")

  .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("background-color", "#333333")
    .append("g")
    // .append("form")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  form.id = "testing";

  form.append("input")
      .attr('id', 'zipInput')
      
  


  form.append("button")
      .attr('id', 'zipBtn')
      .text('Search')
      .on('click', function(){ 
        console.log('clicked button', );
        var val = document.getElementById('zipInput').value
        console.log(val)
      })


  


  // var btn = document.createElement("button"); 
  // form.append(btn)

  

  // btn.style.width = "200px"

  // btn.innerHTML = "Make A Fish";
  // btn.style="position: absolute; top:"+
  //             top+"px; left:"+left+"px; width:"+ 
  //             button_width+ "px; height:"+button_height+ "px;" +
  //             "font-size: 16px;" +
  //             "border-radius:" + 36 +"px;" +
  //             " z-index: 10;" +
  //             "color: white;" +
  //           "background: #6757FF;" +
  //            "font-family: 'Inter', sans-serif;" +
  //            "font-size: 15px;" +
  //            "font-weight: 500;" +
  //            "text-transform: uppercase;"+
  //             "letter-spacing: 1px;" +
  //             "border: none;"+
  //              " box-shadow: 0 18px 32px #00000030;"
  
  // form.append(btn)
          // .on('click', function(){ console.log('clicked button');})



}







function drawLinks(data, targ, color_by, chartID){

  // console.log("***********8     draw links")

  var containerWidth = +d3.select(targ).style('width').slice(0, -2)

  var margin = {top: 50, right: 60, bottom: 40, left: 50},
    width = containerWidth - margin.left - margin.right,
    height = 320 - margin.top - margin.bottom;

    var x1 = d3.scaleLinear()
      .range([0, width]);

    var x2 = d3.scaleLinear()
      .range([0, width]);

    // console.log(data)

    var xAxis1 = d3.axisTop(x1).ticks(5).tickSizeOuter(0);
    var xAxis2 = d3.axisBottom(x2).ticks(5).tickSizeOuter(0);

    var svg = d3.select(targ).append("svg").attr("id", chartID)


    // .attr("id", chartID)
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("background-color", "#333333")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    // console.log('distance', d.distance)

    x1.domain(d3.extent(data, function(d) { return (d.travelTime > 0 ? d.travelTime : 0); })).nice();
    x2.domain(d3.extent(data, function(d) { return (d.travelTime > 0 ? d.distance : 0); })).nice();


    // console.log('testing')


    //link generator
    var link = d3.linkVertical()
                .source(function(d) { return [x1(d.travelTime), 10];})
                .target(function(d) { return [x2(d.distance), 200];});
       
    // //Adding the link paths
    // d3.select(svg) 
    svg.selectAll("path")
        .data(data)
        .join("path")
        .attr("d", link)
        .attr('stroke', function(d) { return colorScale(d.travelTime); })
        .attr('stroke-opacity', .4)
        .attr("fill", 'none')
        .classed("link", true); 


     svg.append("g")
      .attr("class", "axis")
      .call(xAxis1)

    svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate( 0, " + (height-20) + " )")
      .call(xAxis2)


     svg.append("text")             
      .attr("transform", "translate("+(width/2)+","+(-24)+")")
      .style("text-anchor", "middle")
      .style('fill', '#ccc')
      .text("Days to reach destination");

    svg.append("text")             
      .attr("transform", "translate("+(width/2)+","+(height+14)+")")
      .style("text-anchor", "middle")
      .style('fill', '#ccc')
      .text("Distance Travelled (miles)");



}

//---------------------------------------------------------




//---------------------------------------------------------

//  for drawing slope chart of how long data takes to arrive
function drawCurve(linedata, targ, x, y, color){



  // line generator
  var line = d3.line()
      .x(function(d, i) { return x(i); }) // set the x values for the line generator
      .y(function(d) { return y(d.y); }) // set the y values for the line generator 
      .curve(d3.curveMonotoneX) // apply smoothing to the line

  // Append the path, bind the data, and call the line generator 
  targ.append("path")
      .datum(linedata) 
      .attr("class", "line") // Assign a class for styling 
      .attr("d", line) // 11. Calls the line generator 
      .style('fill', color)
      .style('fill-opacity', .4)

}

function drawDensity(data_raw, targ, chartID){

    // console.log('draw density chart targ: ', targ)

    var color = d3.scaleOrdinal().range(["#c6bad1","#5cbf84", "#e3cd91", "#4287f5", "#9743f7"])

    var containerWidth = +d3.select(targ).style('width').slice(0, -2)

    // console.log('containerWidth', containerWidth)

    margin = ({top:20, right: 30, bottom: 30, left: 60}),
    width = containerWidth - margin.left - margin.right,
    height = 300


  legend_x=20, 
  legend_y=50;

    //  Add the SVG to the page 
    var svg = d3.select(targ).append("svg")

    svg.attr("id", chartID)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .style("background-color", "#333333")

   


    var subchart = svg.append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")


    



    // Need to get longest delivery time, for number of bins
    // get travelTime for all data (unfiltered)
    // numBins will be max value in that array. We'll use this in histGenerator
    var numBins = d3.max(data_raw.map(function(d){ return d.travelTime; }))
    var buff = 2;

    // get count of each instance of a day-value
    // we're getting bins for all the data here, and we'll plug region data into it later
    var histGenerator = d3.histogram()
    .domain([0, numBins +buff])    // Set the domain to cover the entire intervall [0;]
    .thresholds(numBins+buff);  // number of thresholds; this will create n+1 bins


  var x = d3.scaleLinear()
        .domain([0, numBins]) // input
        .range([0, width-margin.right]); // output

    var y = d3.scaleLinear()
        .domain([0, 90]) // input 
        .range([height-margin.bottom, margin.top]); // output 



  var xAxis = d3.axisBottom(x);
  var yAxis = d3.axisLeft(y).ticks(5).tickSizeOuter(0);


  // now filter, and prepare data for line/area chart and draw the curves
  var groups = ["US", "Canada", "Australia", "Europe", "EastAsia"]

  for(var i=0; i<groups.length; i++){

        group = groups[i]

        var mydata = data_raw.filter(function(d){ return d["region"] === group})
        var mytimes = mydata.map(function(d){ return d.travelTime; })

        var bins = histGenerator(mytimes);

        // convert array of day-values into [day, count] pairs
        var dataset = [];
        for(var j=0; j<bins.length; j++){
            dataset[j] = {"y": bins[j].length}
        }

          drawCurve(dataset, subchart, x, y, color(group));

    }




  // Add the Axes
  svg.append("g")
      .attr("transform", "translate("+ margin.left + "," + (height-10) + ")")
      .attr("stroke-opacity", .4)
      .attr('class','axis')
      .call(xAxis)

  svg.append("text")             
      .attr("transform", "translate("+(width/2)+","+(height+margin.top+10)+")")
      .style("text-anchor", "middle")
      .style('fill', '#ccc')
      .text("Days to reach destination");

  svg.append("g")
      .attr("transform", "translate("+ (margin.left) + "," + margin.top + ")")
      .attr("stroke-opacity", .4)
      .attr("class", "axis")
      .call(yAxis)

  // text label for the y axis
  svg.append("text")
      .attr("x", margin.left/2)
      .attr("y", margin.top)
      .attr("dy", "1em")
      .style("text-anchor", "Right")
      .style('fill', '#ccc')
      .text("Envelopes");


  var legend = svg.selectAll(".legend")
      .data(color.domain())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(40," + (legend_y+(i * legend_x )) + ")"; });

  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .attr("fill-opacity", .8)
      .style("fill", color);

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .style("fill", "#ccc")
      .text(function(d) { return d; });



    // Features of the annotation
    var an_x = x(3)+margin.left
    const annotations = [
      {
        note: {
          label: "Most letters were delivered in the US within 2-4 days, with most arriving in 3 days.",
          title: "Delivery Times in US"
        },
        x: x(3)+margin.left,
        y: 100,
        dy: -20,
        dx: 50
      },
      {
        note: {
          label: "Many letters were delivered in 6-7 days.",
          title: "Delivery Times in Europe"
        },
        x: x(6)+margin.left,
        y: 265,
        dy: -80,
        dx: 40
      }
      ,
      {
        note: {
          label: "A lot of slow mail took a week or more to arrive.",
          title: "Late Deliveries in US"
        },
        x: x(7)+margin.left,
        y: 265,
        dy: -25,
        dx: 140
      }
    ]

    // Add annotation to the chart
    const makeAnnotations = d3.annotation().annotations(annotations);
    // d3.select(targ)
      svg.append("g")
      .call(makeAnnotations)

    
}






//---------------------------------------------------------

function drawZipcodes(data_raw, targ){

    //-------------------------------------
    // experimenting here...will need to move this code later

    // var zips = data_raw.map(function(d){ return d["Zipcode "]; })
    // console.log('zips: ', zips)

    // var zips2 = d3.nest()
    //             .key(function(d){ return d["Zipcode "]})
    //             .rollup(function(leaves){ return leaves.length} )
    //             .entries(data.raw)

    // var zips2 = data_raw.map(function(d){ return d["Zipcode "]; })

    // console.log('zip2: ', data_raw)




    // var zips = getZipCounts(data_raw)
    // console.log('zips: ', zips)

    // console.log(zips['94119'])
    
    //----------------------------------------

    //  Add the SVG to the page 
    var svg = d3.select(targ).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .style("background-color", "#333333")

}


//---------------------------------------------------------


function drawScatter(data, targ){

  var containerWidth = +d3.select(targ).style('width').slice(0, -2)

  var margin = {top: 20, right: 20, bottom: 40, left: 70},
    width = containerWidth - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;

  var x = d3.scaleLinear()
      .range([0, width]);

  var y = d3.scaleLinear()
      .range([height, 0]);

  var color = d3.scaleOrdinal().range(["#c6bad1","#5cbf84", "#e3cd91", "#4287f5", "#9743f7"])

  var xAxis = d3.axisBottom(x);

  var yAxis = d3.axisLeft(y).ticks(5).tickSizeOuter(0);

  var svg = d3.select(targ).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("background-color", "#333333")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  x.domain(d3.extent(data, function(d) { return (d.travelTime > 0 ? d.travelTime : 0); })).nice();
  y.domain(d3.extent(data, function(d) { return (d.travelTime > 0 ? d.distance : 0); })).nice();

  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .attr('class','axis')
      .attr("stroke-opacity", .4)
      .call(xAxis)


  svg.append("text")             
      .attr("transform", "translate("+(width/2)+","+(height+margin.top+10)+")")
      .style("text-anchor", "middle")
      .style('fill', '#ccc')
      .text("Days to reach destination");



  svg.append("g")
      .attr("class", "axis")
      .attr("stroke-opacity", .4)
      .call(yAxis)

  // text label for the y axis
  svg.append("text")
      .attr("transform", "rotate(-90)")
      // .attr("x",0 - (height / 2) +100)
      // .attr("y", 0 - margin.left)
      .attr("x", -80)
      .attr("y", -60)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style('fill', '#ccc')
      .text("Distance Travelled (miles)");


  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 4.5)
      .attr("cx", function(d) { return x(d.travelTime); })
      .attr("cy", function(d) { return y(d.distance); })
      .attr("fill-opacity","0.4")
      .style("fill", function(d) { return color(d.Country); })
      .style("stroke", function(d) { return color(d.Country); });


  var legend = svg.selectAll(".legend")
      .data(color.domain())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + (50+(i * 20 )) + ")"; });

  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .style("fill", "#ccc")
      .text(function(d) { return d; });

}

//---------------------------------------------------------

function drawScatter2(data, targ, color_by, legend_x, legend_y){

    var containerWidth = +d3.select(targ).style('width').slice(0, -2)


  var margin = {top: 20, right: 60, bottom: 40, left: 60},
    width = containerWidth - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

  var x = d3.scaleLinear()
      .range([0, width]);

  var y = d3.scaleLinear()
      .range([height, 0]);

  

  var xAxis = d3.axisBottom(x);

  var yAxis = d3.axisLeft(y).ticks(5).tickSizeOuter(0);

  var svg = d3.select(targ).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("background-color", "#333333")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  x.domain(d3.extent(data, function(d) { return (d.travelTime > 0 ? d.travelTime : 0); })).nice();
  y.domain(d3.extent(data, function(d) { return (d.travelTime > 0 ? d.distance : 0); })).nice();

  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .attr("stroke-opacity", .4)
      .attr('class','axis')
      .call(xAxis)


  svg.append("text")             
      .attr("transform", "translate("+(width/2)+","+(height+margin.top+10)+")")
      .style("text-anchor", "middle")
      .style('fill', '#ccc')
      .text("Days to reach destination");



  svg.append("g")
      .attr("stroke-opacity", .4)
      .attr("class", "axis")
      .call(yAxis)


// // text label for the y axis
//   svg.append("text")
//       .attr("x", 0)
//       .attr("y", margin.top)
//       .attr("dy", "1em")
//       .style("text-anchor", "Right")
//       .style('fill', '#ccc')
//       .text("Envelopes");

  // text label for the y axis
  svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -120)
      .attr("y", -60)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style('fill', '#ccc')
      .text("Distance Travelled (miles)");


  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 2)
      .attr("cx", function(d) { return x(d.travelTime); })
      .attr("cy", function(d) { return y(d.distance); })
      .style("fill", function(d) { return colorRegion(d[color_by]); })
      .attr("fill-opacity","0.2")
      .style("stroke", function(d) { return colorRegion(d[color_by]); })
      .style("stroke-opacity", "0.9");


  var legend = svg.selectAll(".legend")
      .data(colorRegion.domain())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(40," + (legend_y+(i * legend_x )) + ")"; });

  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .attr("fill-opacity", .8)
      .style("fill", colorRegion);

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .style("fill", "#ccc")
      .text(function(d) { return d; });

}




//------------------------------------------------------------------

// for tree diagram
