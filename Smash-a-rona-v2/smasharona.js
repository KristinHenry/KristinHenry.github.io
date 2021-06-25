 // ToDo: check for any 'off screen' particles, so game ends on win
    // ToDo: remove mouse object from game when it ends, and then create new on new game


    // can also use these for mouse boundries
    var w = 20;
    var width = window.innerWidth-w, 
    height = window.innerHeight-w 

    var normalWidth = 900;
    var normalHeight = 400;


    var xmin = w;
    var xmax = width-w;
    var ymin = w;
    var ymax = height-w;

    var virusImgs = ['./img/NV1.png', './img/NV2.png', './img/NV3.png', './img/NV4.png', './img/NV5.png', './img/NV6.png', './img/NV7.png' ]
   
    var signImgs = ['./img/sign1.jpg', './img/sign2.jpg']
    var protestImgs = ['./img/BLM2.png','./img/protest_1.jpg']

    var t = 0;
    var r = 0;
    var maxTime = 0; // set when game created 
    var gameLevel = 1; //10;//7;
    var lastLevel = 20;
    var keyLevels = [4, 10, 16];
    var virusCount = 0;
    var medCount = 0;
    var orangeCount = 0;
    var astroturfCount = 0;
    var protestCount = 0;
    var maxAstroturf = 7;
    var make_button = true;
    var button_msg = "Ooops! Try Again?";
    var won_game = false;
    var lost_game = false;

    // use these for collisions
    var defaultCategory = 0x0001,
        groundCategory = 0x0002
        virusCategory = 0x0003,
        medCategory = 0x0004,
        orangeCategory = 0x0005,
        protestCategory = 0x0006,
        astroturfCategory = 0x0007;

    // for tracking game elements
    var bugs = [];
    var meds = [];
    var astroturfs = [];
    var protests = []
    var oranges = [];
    var orange;

    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Events = Matter.Events,
        Common = Matter.Common,
        Constraint = Matter.Constraint,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Body = Matter.Body,
        Bodies = Matter.Bodies;


    var game = createGame();
    var engine = game.engine;
    var world = game.world;
    var render = game.render;
    var runner = game.runner;
    var mouse;
    var mouseConstraint;

   
    

    // makeElements();

    // Runner.run(runner, engine);

//====================================================================
// we need to preload the images before starting the game, to accomodate slow internet speeds
var imageCount = 0;
var imageCountGoal = 7; 
for(var i=0; i<virusImgs.length; i+=1 ){
    imagePreloader(virusImgs[i]);
}


function imagePreloader(url){
    var img = new Image();

    img.onload = function(){
        imageCount += 1;
        if(imageCount == imageCountGoal){
            // ok, we can start the game now
            makeElements();
            Runner.run(runner, engine);
        }
    }

    img.src = url;
}

//---------------------------------------------


    function getBugGrowthRate(gameLevel){
        var r = 0;
        if(gameLevel == 2) r = 1;
        if(gameLevel == 3) r = 2;

        // orange blob is bouncing
        if(gameLevel == 4) r = 1;
        if(gameLevel == 5) r = 1;
        if(gameLevel == 6) r = 1;
        if(gameLevel == 7) r = 2;
        if(gameLevel == 8) r = 2;
        if(gameLevel == 9) r = 2;
        if(gameLevel == 10) r = 3;

        // astroturfs introduced
        if(gameLevel == 11) r = 1;
        if(gameLevel == 12) r = 1;
        if(gameLevel == 13) r = 2;
        if(gameLevel == 14) r = 2;
        if(gameLevel == 15) r = 3;

        // real protestors introduced
        if(gameLevel == 16) r = 1;
        if(gameLevel == 17) r = 1;
        if(gameLevel == 18) r = 2;
        if(gameLevel == 19) r = 2;
        if(gameLevel == 20) r = 3;


        return r;
    }


    function getMaxTime(gameLvel){
        var tMax = 920;//12000//;

        return tMax;
    }

    function createGame(){

        if(won_game) gameLevel += 1;
        
        bugs = [];
        meds = [];
        astroturfs = [];
        protests = [];
        oranges = [];

        r = getBugGrowthRate(gameLevel);

        t = 0;
        maxTime = getMaxTime(gameLevel); 

        virusCount = 0;
        orangeCount = 0;
        astroturfCount = 0;
        medCount = 0;
        protestCount = 0;

        make_button = true;
        won_game = false;
        lost_game = false;

        // create engine
        var engine = Engine.create(),
        world = engine.world;

        // create renderer
        var render = Render.create({
            element: document.getElementById('container'),
            engine: engine,
            options: {
                width: width,
                height: height,
                showAngleIndicator: false,
                wireframes: false,
                // background: 'transparent'
            }
        });

        Render.run(render);

        // create runner
        var runner = Runner.create();

        // add walls to the world
        var boxOptions = {isStatic: true, category: defaultCategory, render: {visible: false}}
        // var boxOptions = {isStatic: true, category: defaultCategory}
        World.add(world, [
            Bodies.rectangle(width/2, w/2, width, w, boxOptions),
            Bodies.rectangle(w/2, height/2, w, height, boxOptions),
            Bodies.rectangle(width/2, height-w/2, width, w, boxOptions),
            Bodies.rectangle(width-w/2, height/2, w, height, boxOptions)]);


        mouse = createMouse(render, engine, world);

        // fit the render viewport to the scene
        Render.lookAt(render, {
            min: { x:20, y: 20 },
            max: { x: width-20, y: height-20 }
        });

        Events.on(engine, 'beforeUpdate', myUpdateHandeler);
        Events.on(engine, 'collisionStart', myCollisionHandler);

        return {'engine': engine, 'world': world, 'render': render, 'runner': runner}
    }


    function createMouse(render, engine, world){
        // add mouse control
        mouse = Mouse.create(render.canvas);
        mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    // allow bodies on mouse to rotate
                    angularStiffness: 0,
                    render: {
                        visible: false
                    }
                }
        });
        World.add(world, mouseConstraint);

        // keep the mouse in sync with rendering
        render.mouse = mouse;
    }



    function makeButton(){

        var button_width = 300;
        var button_height = 70
        var left = (width/2) - (button_width/2);
        var top = (height/2) - (button_height/2);

        var btn = document.createElement("BUTTON");   
        btn.innerHTML = button_msg;                   
        btn.id = "btn"
        btn.style="position: absolute; top:"+
              top+"px; left:"+left+"px; width:"+ 
              button_width+ "px; height:"+button_height+ "px;" +
             "font-size: 16px;" +
              "border-radius:" + 36 +"px;" +
            "background: #4976ba;" + 
            "color: white;" +
             "font-family: 'Inter', sans-serif;" +
             "font-size: 15px;" +
             "font-weight: 500;" +
             "text-transform: uppercase;"+
              "letter-spacing: 1px;" +
              "border: none;"+
               " box-shadow: 0 18px 32px #00000030;"
        document.body.appendChild(btn);

        document.getElementById('btn').onclick = btnFunction;

        make_button = false;
    }

   
    function btnFunction(){
        

        Matter.Runner.stop(runner)

        // clean up from last game
        clearGameCanvas()
        var btn = document.getElementById('btn');
        btn.parentNode.removeChild(btn)

        // set up new game
        game = createGame();
        engine = game.engine;
        world = game.world;
        render = game.render;
        runner = game.runner;

        makeElements();
        t = 0;

        Runner.run(runner, engine);
    }



//----------------------------------------------------------------------
// Handle events for game 
//----------------------------------------------------------------------

function checkMouseBounds(){
       
        var p = render.mouse.position;
        
        if((p.x > xmax) || (p.x < xmin)){
            // let go of object, if mouse is out of mounds
            mouseConstraint.constraint.bodyB = null; // this may be solution!! 
        } 

        // if((p.y > ymax) || (p.y < ymin)){
        //     console.log('let go of object')
        //     // mouseConstraint.constraint.bodyB = null;
        // }

}


function bounceOrangeBlob(orange){
    // periodically 'bounce' the orange blob
    if (t%110 == 0 && orange) {

        // bounce the orange blob
        var dx = randomRange(4,30)
        var dir = randomSign();
        Body.setVelocity(orange, { x: dx*dir, y: -20 });

        // start orange droppings 
        if(t>90){
            if(gameLevel >= keyLevels[0] && gameLevel < keyLevels[1]){
                // only dropping little orange clones at this level
                var o = makeOrangeClone(orange.position.x, orange.position.y)
                oranges.push(o);
                World.add(world, o)
            } else if(gameLevel >= keyLevels[1]){
                // we want to drop mostly orange, but a few astroterfs now and then
                if(Math.floor(randomRange(0,20))==0){
                    makeAstroturf(orange.position.x, orange.position.y);
                } else {
                    var o = makeOrangeClone(orange.position.x, orange.position.y)
                    oranges.push(o);
                    World.add(world, o)   
                }
            }
        }   
    }
}


function bounceDrops(){
    // periodically 'bounce' the signs & little oranges
    if(t>20){
        if (t%30 == 0 && astroturfs.length>0) {
            for(i in astroturfs){
                var dx = randomRange(0,4)
                var dir = randomSign();
                Body.setVelocity(astroturfs[i], { x: dx*dir, y: -4 });
            }
        }

        if (t%30 == 0 && protests.length>0) {
            for(i in protests){
                var dx = randomRange(0,4)
                var dir = randomSign();
                Body.setVelocity(protests[i], { x: dx*dir, y: -4 });
            }
        }

        if (t%30 == 0 && oranges.length>0) {
            for(i in oranges){
                var dx = randomRange(0,3)
                var dir = randomSign();
                Body.setVelocity(oranges[i], { x: dx*dir, y: -3 });
            }
        }
    }

}


function myUpdateHandeler(event){



    checkMouseBounds();
    
    virusCount = shrinkBugs(bugs, virusCount);  // for all levels
    
    shrinkElements(meds, 3, true, medCount);
    shrinkElements(astroturfs, 3, false, astroturfCount);

    if(gameLevel > keyLevels[0]){
        shrinkElements(oranges, 5, true, orangeCount);
        resizeOrange(orange, 10, true, .8, 2);  // .8 is minSize, 2 is maxSize
    }
    


    sproutMoreBugs(bugs);  // for all levels


    if(gameLevel > keyLevels[1]){
        
        sproutMoreAstroturf(astroturfs, 120)
    }

    if(gameLevel > keyLevels[2]){
        sproutMoreMeds(meds, 220);  // for upper levels
        sproutMoreMarches(protests, 30)
    }


    bounceOrangeBlob(orange);
    bounceDrops();
    
    checkIfWon();
   
    // show player how much time they have left
    var dt = maxTime-t;
    writeTime(dt)

    // check if we've timed out or won, and either continue or stop game
    if((dt >0) && (won_game != true) && (lost_game != true)){
        t += 1;
    } else if((dt <= 0) || (won_game) || (lost_game)){
        stopGame();            
    }

}


function stopGame(){
    if(make_button) makeButton();

    Matter.Runner.stop(runner)

    // clearGameCanvas();
    Matter.Render.stop(this.debugRender); // this only stop renderer but not destroy canvas
    Matter.World.clear(this.engine.world);
    Matter.Engine.clear(this.engine);
}


function checkIfWon(){

    // console.log('virusCount', virusCount)


    // check if we've won
    if(virusCount <= 0){
        won_game = true;
        button_msg = "Play Next" + "<br>" + " Level?"

        if(gameLevel == lastLevel){
            button_msg = "Start Over, From Beginning?"
            gameLevel = 0;
        }

    } else if(meds.length < 1){
        lost_game = true;
        button_msg = "That Orange guy stole the Medical supplies!<br> Try Again?"

    } else {
        button_msg = "Oh no! Time ran out!<br> Try Again?"
    }
}


function myCollisionHandler(event){

        var pairs = event.pairs;

        // check for any collisions that should trigger change
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];


            var catA = pair.bodyA.category;
            var catB = pair.bodyB.category;

            if(catA == medCategory && catB == virusCategory ){
                pair.bodyB.alive = false;
            } else
            if(catB == medCategory && catA == virusCategory ){
                pair.bodyA.alive = false;
            } else


            if(catA == medCategory && catB == orangeCategory ){
                pair.bodyA.alive = false;
            } else
            if(catB == medCategory && catA == orangeCategory ){
                pair.bodyB.alive = false;
            } else


            if(catA == astroturfCategory && catB == virusCategory){
                pair.bodyB.alive = false;
            } else
            if(catB == astroturfCategory && catA == virusCategory){
                pair.bodyB.alive = false;
            } else


            if(catA == astroturfCategory && catB == orangeCategory){
                pair.bodyB.cangrow = true;
            } else
            if(catB == astroturfCategory && catA == orangeCategory){
                pair.bodyA.cangrow = true;
            } else

            
            if(catA == protestCategory && catB == orangeCategory){
                
                pair.bodyB.alive = false;
            } else
            if(catB == protestCategory && catA == orangeCategory){
                pair.bodyA.alive = false;
            }// else


            // if(catA == protestCategory && catB == astroturfCategory){
                
            //     pair.bodyB.alive = false;
            // } else
            // if(catB == protestCategory && catA == astroturfCategory){
            //     pair.bodyA.alive = false;
            // }     

        }    

}



//============================================================
// Make stuff


function makeElements(){
    // get screen ratio, to adjust for profile mode mobiles, etc.
    var ratio_w = width/normalWidth;
    var ratio_h = height/normalHeight;

    var h = Math.floor((height-320)*ratio_h);
    // var w = Math.floor((width)*ratio_w);


    // Note: can't start at -y, or they don't get removed...they're stuck

    // Make basic elements that are in each level
    makeMed(randomRange(100, (width-100)), height-100) // might need to ratio this

    makeVirusPyramid(randomRange(20, 220)*ratio_w, h, 5);
    makeVirusPyramid(randomRange(120, 320)*ratio_w, h, 5);
    makeVirusPyramid(randomRange(220, 420)*ratio_w, h, 5);

    


    if(gameLevel >= keyLevels[0]){ 
        orange = makeOrange(randomRange(100, (width-100)), 100)
        World.add(world, orange)
    }

    if(gameLevel >= keyLevels[1]){
        makeAstroturf(randomRange(100, (width-100)),height-100)
        makeAstroturf(randomRange(100, (width-100)),height-100)
        makeAstroturf(randomRange(100, (width-100)),height-100)
    }


    if(gameLevel >= keyLevels[2]){
        makeProtest(randomRange(100, (width-100)),height-100)
        makeProtest(randomRange(100, (width-100)),height-100)
        makeProtest(randomRange(100, (width-100)),height-100)
    }
}



function writeTime(t){

    // get context of second canvas
    var txtCanvas = document.getElementById('txtCanvas');
        
    var ctx = txtCanvas.getContext("2d");
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);


    var msg_1 = "Game Level: " + gameLevel
        pixelX = 50
        pixelY = 70
        ctx.font = "14px verdana, sans-serif";
        ctx.fillStyle = "#FFF"
        ctx.fillText(msg_1, pixelX, pixelY);


    var msg_2 = "Remaining Time: " + t
        pixelX = 50
        pixelY = 100
        ctx.font = "14px verdana, sans-serif";
        ctx.fillStyle = "#FFF"
        ctx.fillText(msg_2, pixelX, pixelY);
}

function writeScore(score){

    // get context of second canvas
    var txtCanvas = document.getElementById('txtCanvas');
    var ctx = txtCanvas.getContext("2d");
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);


    var someMsg = "Smashed Virus Count: " + score
        pixelX = 100
        pixelY = 100
        ctx.font = "14px verdana, sans-serif";
        ctx.fillStyle = "#FFF"
        ctx.fillText(someMsg, pixelX, pixelY);
}

function clearGameCanvas(){

    render.canvas.remove();
    render.canvas = null;
    render.context = null;
    render.textures = {};
}

function makeOrange(x,y){

    var o = Bodies.circle(x,y, 30, {
                category: orangeCategory,
                alive: true,
                cangrow: false,
                density: 0.0005,
                frictionAir: 0.06,
                restitution: 0.3,
                friction: 0.01,
                render: { 
                    sprite: {
                        xScale: 1, //2,
                        yScale: 1, //2,
                        texture: './img/InkOrange1.png'
                    }
                }

            })

   return o;
}


function makeOrangeClone(x,y){

    var o = Bodies.circle(x,y, 10, {
                category: orangeCategory,
                density: 0.0005,
                frictionAir: 0.06,
                restitution: 0.3,
                friction: 0.01,
                render: { 
                    sprite: {
                        xScale: .5,
                        yScale: .5,
                        texture: './img/InkOrange1.png'
                    }
                }

            })

   return o;
}




function makeVirusPyramid(x,y,num){
    // create the virus bodies and add to the world
    var pyramid = Composites.pyramid(x, y, num, 10, 0, 0, function(x, y) {

        var b = makeVirus(x,y)
        
        virusCount+=1;
        bugs.push(b);
        return b;
    });

    World.add(world, [pyramid]);
}



function makeVirus(x,y){

    var i = Math.floor(randomRange(0,virusImgs.length-1))

    // var b = Bodies.circle(x, y, 20, {
    var b = Bodies.rectangle(x, y, 40, 40, {
                
                category: virusCategory,
                alive: true,
                density: 0.0005,
                frictionAir: 0.06,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        xScale: .8,
                        yScale: .8,
                        texture: virusImgs[i]
                    }
                }
            });
        
    return b;
}



function makeAstroturf(x,y){

    // create 'astroturf' and add to the world
    var i = 0
    if(randomSign() == 1){ i = 1; } 

    var signOptions = { category: astroturfCategory,
                        currentRotation: .5,
                        alive: true,
                        render: {
                        sprite: {
                            xScale: .7,
                            yScale: .7,
                            texture: signImgs[i]
                        }
                    } }


    var astro = Bodies.rectangle(x,y, 60, 40, signOptions);
    astroturfs.push(astro)
    astroturfCount+=1;

    World.add(world, astro)

}



function makeProtest(x,y){

    // create 'astroturf' and add to the world
    var i = 0
    //if(randomSign() == 1){ i = 1; } 

    var protestOptions = { category: protestCategory,
                        currentRotation: .5,
                        alive: true,
                        render: {
                        sprite: {
                            xScale: .7,
                            yScale: .7,
                            texture: protestImgs[i]
                        }
                    } }


    var protest = Bodies.rectangle(x,y, 60, 40, protestOptions);
    protests.push(protest)
    protestCount+=1;

    World.add(world, protest)

}


function makeMed(x,y){
    // create 'medicine' and add to the world
    var medOptions = { category: medCategory,
                        alive: true,
                        currentRotation: .5,
                        render: {
                        sprite: {
                            xScale: 1,
                            yScale: 1,
                            texture: './img/Test4.png'
                        }
                    } }

    var med = Bodies.rectangle(x, y, 40, 40, medOptions);
    meds.push(med)
    medCount+=1;

    World.add(world, med)
}



function sproutMoreMeds(meds, interval){

    if(t%interval == 0){
        if(meds.length<3){
            // console.log('more meds')
            makeMed(Math.floor(randomRange(100, width-100)),100);
            // console.log(meds)
        }
    }
}


function sproutMoreMarches(protests, interval){
    // if(t%interval == 0){
        
    //     if(protests.length> 2){
    //         var i = Math.floor(randomRange(0, protests.length - 1));
    //         makeProtest((Math.floor(protests[i].position.x), Math.floor(protests[i].position.y))
    //     }
    // }
}




function sproutMoreBugs(bugs){
    
    // we only want to sprout if there are still bugs to copy
    if((t%20 == 0) && (bugs.length>2)){

        var j=0;
        while(j < r){
            var i = Math.floor(randomRange(0, bugs.length - 1));
            
            var b = makeVirus(Math.floor(bugs[i].position.x), Math.floor(bugs[i].position.y))
            bugs.push(b)
            virusCount+=1;
            World.add(world, b);
            j+=1;
        }
    }

}




function sproutMoreAstroturf(astroturfs, interval){

    if(t%interval == 0){
        if(astroturfs.length<10){
            
            makeAstroturf(Math.floor(randomRange(40, width-100)),height-20);
        }
    }
}



//----------------------------------------------------------------------------

// for shrinking bugs when hit by meds
function shrinkBugs(bugs, virusCount){

    // these are for capping velocities of bugs
    var vMax = {x: 2, y:2};
    var vMin = {x: -2, y: -2};

   
    for(var i=bugs.length-1; i>=0; i-=1){

        // Need to cap velocity, so bugs don't 'fly' off screen
        var dx = bugs[i].velocity.x;
        var dy = bugs[i].velocity.y;

        if (bugs[i].velocity.x > vMax.x) dx = vMax.x;
        if (bugs[i].velocity.x < vMin.x) dx = vMin.x;
        if (bugs[i].velocity.y > vMax.y) dx = vMax.y;
        if (bugs[i].velocity.y < vMin.y) dx = vMin.y

        Body.setVelocity(bugs[i], {x: dx, y: dy})

                
        if(bugs[i].alive == false){

            if(bugs[i].render.sprite.xScale > .3 ) {
                bugs[i].render.sprite.xScale -= .2;
                bugs[i].render.sprite.yScale -= .2;
                bugs[i].render.opacity -= .01;
            }

            else if(bugs[i].render.sprite.xScale <= .3 ) {

                deleteBug(i, bugs);
                virusCount-=1;  // this is for out game engine, keeping track of bugs
            }             
        }
    }

    return virusCount;
}


function deleteBug(i, bugs){
    // console.log('delete bug: ', bugs[i].render.sprite.xScale)
                
    // moving off screen 
    Body.translate( bugs[i], {x: width, y: height})

    // then remove from world
    Matter.World.remove(world, bugs[i]);
    bugs.splice(i, 1)

    // console.log('bugs:', bugs.length)
               
}



function resizeOrange(elem, change_rate, shrink_once, min_size, max_size){

    // console.log('cangrow: ', elem.cangrow)

    var scale = elem.render.sprite.xScale;


    if(elem.alive == false){

            if(elem.render.sprite.xScale > min_size) {
               
                // have to scale the body *and* the sprite image
                elem.render.sprite.xScale -= .1; //scale/change_rate; //.1;
                elem.render.sprite.yScale -= .1; //scale/change_rate; //.1;

                if(shrink_once){
                    elem.alive = true; // only shrink once, per collision 
                }

            } 
        }  


    
                
    if(elem.cangrow == true){

        if(elem.render.sprite.xScale < max_size) {
               
            elem.render.sprite.xScale += .1; //scale/change_rate; //.1;
            elem.render.sprite.yScale += .1; //scale/change_rate; //.1;

            if(shrink_once){
                elem.cangrow = false; // only shrink once, per collision 
            }
        } 
    } 
     
}



function shrinkOneElement(elem, shrink_rate, shrink_once, min_size){

        // console.log('cangrow: ', elem.cangrow)
                
        if(elem.alive == false){

            var scale = elem.render.sprite.xScale;

            if(elem.render.sprite.xScale > min_size) {
               
                // have to scale the body *and* the sprite image
                elem.render.sprite.xScale -= scale/shrink_rate; //.1;
                elem.render.sprite.yScale -= scale/shrink_rate; //.1;
                Matter.Body.scale(elem, 
                                elem.render.sprite.xScale, 
                                elem.render.sprite.yScale);
                

                elem.render.opacity -= .1;

                if(shrink_once){
                    elem.alive = true; // only shrink once, per collision 
                }

            } 
        }  
}



function shrinkElements(arr, shrink_rate, shrink_once, count){

    for(var i=0; i<arr.length; i+=1){
                
        if(arr[i].alive == false){

            var scale = arr[i].render.sprite.xScale;

            if(arr[i].render.sprite.xScale > .3) {
               
                // have to scale the body *and* the sprite image
                arr[i].render.sprite.xScale -= scale/shrink_rate; //.1;
                arr[i].render.sprite.yScale -= scale/shrink_rate; //.1;
                Matter.Body.scale(arr[i], 
                                arr[i].render.sprite.xScale, 
                                arr[i].render.sprite.yScale);
                

                arr[i].render.opacity -= .1;

                if(shrink_once){
                    arr[i].alive = true; // only shrink once, per collision 
                }

            } else if(arr[i].render.sprite.xScale <= .3 ) {

                // moving off screen first
                Body.translate( arr[i], {x: width, y: height})

                // then remove
                Matter.World.remove(world, arr[i]);
                arr.splice(i, 1)
                count-=1;
            }  
        }
    }
}

//--------------------------------------------------------------------------
function randomRange(min, max) {  
    return Math.random() * (max - min) + min; 
}

function randomSign(){
    return (Math.random() >= 0.5 ? -1:1 );
}
