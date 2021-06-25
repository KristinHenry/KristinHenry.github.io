

function randomRange(min, max){ 
	return Math.floor((Math.random() * (max - min + 1)) + min); 
}

function randomSign(){
  if(randomRange(0,1) == 0) return -1;
  return 1;
}


function getPoint(c,r,len,ang,rot){

  var x = (len+r) * Math.cos(ang-rot)
  var y = (len+r) * Math.sin(ang-rot)

  return {x:c.x+x, y: c.y+y}
}



function getColor(mina, maxa){

  var r = randomRange(50,100)  // will get less 'red' this way
  var g = randomRange(50,100)
  var b = randomRange(150,220)
  var a = randomRange(mina, maxa); //.1;

  // we want a few orange fish
  // orange: 255, 102, 0
  if(randomRange(0,20) == 1) return {r:255, g:102, b:0, a:.1};

  return {r:r, g:g, b:b, a:.4}
}

function getRippleColor(){
  var r = 50; //randomRange(0,100)  // will get less 'red' this way
  var g = 100; //randomRange(0,225)
  var b = 225; //randomRange(0,225)
  var a = .03;

  return "rgba("+r+","+g+","+b+","+a+")";
}


function getDirXY(deg){
  var dxy = {x:0, y:0}

  if(deg == 90){
    dxy.x = 0;
    dxy.y = -1;

  } else if(deg == 180){
    dxy.x = -1;
    dxy.y = 0;

  } else if(deg == 270){
    dxy.x = 0;
    dxy.y = 1;

  } else if(deg == 0){
    dxy.x = 1;
    dxy.y = 0;

  } else if(deg<90){ 
    dxy.x = 1;
    dxy.y = -1;

  } else if(deg<180 && deg>90){
    dxy.x = -1;
    dxy.y = -1; 
  } else if(deg<270 && deg>180){
    dxy.x = -1;
    dxy.y = 1;
  } else {
    dxy.x = 1;
    dxy.y = 1;
  }

  return dxy;
}


// -------------------------------------------------
//        debug tools
//--------------------------------------------------

function drawDebugDots(d){

  // for debugging...draws dots at key points
  	var color = "rgba("+100+","+50+","+50+","+.4+")";

    
    
    drawCircle({x:d.c.x, y:d.c.y}, 'grey', 1)//'red')

    // drawCircle({x:d.p0.x, y:d.p0.y}, 'grey',1 )//'pink')
    drawCircle({x:d.cp1.x, y:d.cp1.y}, 'grey', 1)//'blue
    // drawCircle({x:d.cp2.x, y:d.cp2.y}, 'cornflowerblue', 1)//'darkorange')//grey')//'blue')

    // drawCircle({x:d.ep1.x, y:d.ep1.y}, 'grey', 1)//'orange')
    // drawCircle({x:d.ep2.x, y:d.ep2.y}, 'grey', 1)//'teal')

    drawCircle({x:d.m1.x, y:d.m1.y}, 'grey', 1)//'pink')
    drawCircle({x:d.m2.x, y:d.m2.y}, 'grey', 1)//'pink')

    // side curve control points
    // drawCircle({x:d.cp3.x, y:d.cp3.y}, 'grey',1)
    // drawCircle({x:d.cp4.x, y:d.cp4.y}, 'grey',1)
   
}



function drawCircle(p, c, r){
  ctx.beginPath();
  ctx.arc(p.x, p.y, r, 0, 2*Math.PI)
  ctx.fillStyle = c;
  ctx.fill();
  ctx.stroke();
  ctx.closePath()
}