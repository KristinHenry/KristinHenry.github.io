
//-----------------------------------------------------------

// CSS from Maher
/*
h1 {
    position: absolute;
    top: 114px;
    left: 0px;
    width: 1662px;
    height: 10px;
    z-index: 10;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: white;
}

p {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    color: white; 
    text-align: center;
    display: inline-block;
}

input#q3a {
    background-color: white;
    margin-top: 40px;
    box-sizing: border-box;
    cursor: default;
    -webkit-appearance: radio;
    border: initial;
}


h3 {
    position: absolute;
    top: 123px;
    left: 0px;
    width: 1662px;
    height: 40px;
    z-index: 10;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: white;
}
for "Their Relationship to you" h3 make the top: 230px;


button {
    position: absolute;
    top: 359px;
    left: 653.5px;
    width: 300px;
    height: 48px;
    z-index: 10;
    border-radius: 36px;
    color: white;
    background: #6757FF;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
    box-shadow: 0 18px 32px #00000030;
}

*/
//------------------------------------------------------------
// Intro screens-buttons
var width = window.innerWidth, 
  height = window.innerHeight 

var testData = {'connected': 0,
            'appreciative': 0,
            'comfort': 0,
            'name': 'test name',
            'relation': 'relation',
            'color': 'white'
            }



// 123, 56, 224
// 78, 77, 153
// 40, 134, 158

// 163, 214, 177
// 130, 78, 156
// 78, 113, 156
// 250, 175, 62
// 59, 175, 247

var buttonColors = {"btn4":{"x":150, "color": {r:130, g:78, b:156, a:.5}},
                    "btn0":{"x": 100, "color": {r:123, g:56, b:224, a:.5}}, 
                    "btn5":{"x":50, "color": {r:78, g:113, b:156, a:.5}},
                    "btn7":{"x":0, "color": {r:59, g:175, b:247, a:.5}},

                    "btn1":{"x":-50, "color": {r:40, g:134, b:158, a:.5}}, 
                    "btn3":{"x":-100, "color": {r:163, g:214, b:177, a:.5}},
                    
                    
                    "btn6":{"x":-150, "color": {r:250, g:175, b:62, a:.4}}
                    
                  }
var colorButtons = []
var nameButtons = []
var q1Buttons = []
var q2Buttons = []
var q3Buttons = []
var welcomeButtons = []

var rad = 8; //12;


function makeWelcomeButtons(targ){



  var button_width = 190;
  var button_height = 60
  var left = (width/2) - ((button_width/2)); // playing with positioning
  var top = (height/2) - (button_height/2);

  var btn = document.createElement("button");  
  btn.class = "btn" 
  btn.innerHTML = "Make A Fish";  
  btn.style="position: absolute; top:"+
              top+"px; left:"+left+"px; width:"+ 
              button_width+ "px; height:"+button_height+ "px;" +
              "font-size: 16px;" +
              "border-radius:" + 36 +"px;" +
              " z-index: 10;" +
              "color: white;" +
            "background: #6757FF;" +
             "font-family: 'Inter', sans-serif;" +
             "font-size: 15px;" +
             "font-weight: 500;" +
             "text-transform: uppercase;"+
              "letter-spacing: 1px;" +
              "border: none;"+
               " box-shadow: 0 18px 32px #00000030;"

  welcomeButtons.push(targ.appendChild(btn))

  var btn2 = document.createElement("button");  
  btn2.class = "btn" 
  btn2.innerHTML = "Skip to Pond";  
  btn2.style="position: absolute; top:"+
              (top+100)+"px; left:"+left+"px; width:"+ 
              button_width+ "px; height:"+button_height+ "px;" +
              "font-size: 16px;" +
              "border-radius:" + 36 +"px;" +
              " z-index: 10;" +
              "color: white;" +
            "background: #6757FF;" +
             "font-family: 'Inter', sans-serif;" +
             "font-size: 15px;" +
             "font-weight: 500;" +
             "text-transform: uppercase;"+
              "letter-spacing: 1px;" +
              "border: none;"+
               " box-shadow: 0 18px 32px #00000030;"

  welcomeButtons.push(targ.appendChild(btn2))


  btn.onclick = function(e) {
            
            for(b in welcomeButtons){
              welcomeButtons[b].parentNode.removeChild(welcomeButtons[b])
            }
            
            // This is where next fxn call goes, like create new fish
            makeQ1Buttons(targ);
        };

  btn2.onclick = function(e) {
            
            for(b in welcomeButtons){
              welcomeButtons[b].parentNode.removeChild(welcomeButtons[b])
            }
        };

}



function makeQ1Buttons(targ){
  
  var button_width = 30;
  var button_height = 10
  var left = (width/2) - (5*(button_width)); // playing with positioning
  var top = (height/2) - (button_height/2);

  // ask our question
  var txt = document.createElement("H1")
  // txt.width = width;
  txt.innerHTML = "How connected to community do you feel?" 
  txt.style= "position: absolute; top:"+(top-140)+"px;"+
              " left:"+0+"px; width:"+ width + "px; height:"+button_height+"px;"+
              " z-index: 10; " +
              "text-align: center;" +
              "font-weight: 500;" +
              "color: white;" +
              "font-family: 'Inter', sans-serif;"

  q1Buttons.push(targ.appendChild(txt))

  
  // create the labels and radio buttons for the answers
  for(var i=1; i<6; i+=1){

    var q1t = document.createElement("P");
    q1t.innerHTML = i;

    q1t.style="position: absolute; top:"+(top-15)+"px;"+
                " left:"+(left+2*button_width*(i-1)-4)+"px;"+
                " width:"+ button_width+ "px;"+
                " height:"+button_height+"px; z-index: 10;"+
                "color: white;"

    q1Buttons.push(targ.appendChild(q1t))

    var q1 = document.createElement("INPUT");
    q1.type = "radio"
    q1.id = "q1a"
    q1.name = "q1"
    q1.value = i;

    q1.style="position: absolute; top:"+(top)+"px; left:"+(left+2*button_width*(i-1))+"px; width:"+ button_width+ "px; height:"+button_height+"px; z-index: 10;"

    q1Buttons.push(targ.appendChild(q1))
  }



  // attach button events to these, passing answer and triggering next step
  for (var i = 0; i < q1Buttons.length; i += 1) {

        q1Buttons[i].onclick = function(e) {
            
            testData.connected = this.value;

            // we want to clear out these buttons for the next ones, then to add fish
            for(b in q1Buttons){
              q1Buttons[b].parentNode.removeChild(q1Buttons[b])
            }

            // This is where next fxn call goes, like create new fish
            makeQ2Buttons(targ)
        };
    }
}


function makeQ2Buttons(targ){
  
  var button_width = 30;
  var button_height = 10
  var left = (width/2) - (5*(button_width));// playing with positioning
  var top = (height/2) - (button_height/2);

  // ask our question
  var txt = document.createElement("H1")
  // txt.width = width;
  txt.innerHTML = "How Appreciative do you feel?"
  // txt.style.textAlign = "center"; 
  txt.style="position: absolute; top:"+(top-140)+"px;"+
              " left:"+0+"px; width:"+ width + "px; height:"+button_height+"px;"+
              " z-index: 10; " +
              "text-align: center;" +
              "font-weight: 500;" +
              "color: white;" +
              "font-family: 'Inter', sans-serif;"

  q2Buttons.push(targ.appendChild(txt))

  
  // create the labels and radio buttons for the answers
  for(var i=1; i<6; i+=1){

    var q2t = document.createElement("P");
    q2t.innerHTML = i;

    q2t.style="position: absolute; top:"+(top-15)+"px;"+
            " left:"+(left+2*button_width*(i-1)-4)+"px;"+
            " width:"+ button_width+ "px;"+
            " height:"+button_height+"px; z-index: 10;"+
            "color: white;"

    q2Buttons.push(targ.appendChild(q2t))

    var q2 = document.createElement("INPUT");
    q2.type = "radio"
    q2.id = "q2a"
    q2.name = "q2"
    q2.value = i;

    q2.style="position: absolute; top:"+(top)+"px; left:"+(left+2*button_width*(i-1))+"px; width:"+ button_width+ "px; height:"+button_height+"px; z-index: 10;"

    q2Buttons.push(targ.appendChild(q2))
  }



  // attach button events to these, passing answer and triggering next step
  for (var i = 0; i < q2Buttons.length; i += 1) {

        q2Buttons[i].onclick = function(e) {
            
            testData.appreciative = this.value;

            // we want to clear out these buttons for the next ones, then to add fish
            for(b in q2Buttons){
              q2Buttons[b].parentNode.removeChild(q2Buttons[b])
            }

            // This is where next fxn call goes, like create new fish
            makeQ3Buttons(targ);
           
        };
    }
}


function makeQ3Buttons(targ){
  
  var button_width = 30;
  var button_height = 10
  var left = (width/2) - (10*(button_width)); // playing with positioning
  var top = (height/2) - (button_height/2);

  // ask our question
  var txt = document.createElement("H1")
  // txt.width = width;
  txt.innerHTML = "How comfortable are you with impermanence?"
  // txt.style.textAlign = "center"; 
  txt.style="position: absolute; top:"+(top-140)+"px;"+
              " left:"+0+"px; width:"+ width + "px; height:"+button_height+"px;"+
              " z-index: 10; " +
              "text-align: center;" +
              "font-weight: 500;" +
              "color: white;" +
              "font-family: 'Inter', sans-serif;"

  q3Buttons.push(targ.appendChild(txt))

  
  // create the labels and radio buttons for the answers
  for(var i=1; i<11; i+=1){

    var q3t = document.createElement("P");
    q3t.innerHTML = i;

    q3t.style="position: absolute; top:"+(top-15)+"px;"+
                " left:"+(left+2*button_width*(i-1)-4)+"px;"+
                " width:"+ button_width+ "px;"+
                " height:"+button_height+"px; z-index: 10;"+
                "color: white;"

    q3Buttons.push(targ.appendChild(q3t))

    var q3 = document.createElement("INPUT");
    q3.type = "radio"
    q3.id = "q3a"
    q3.name = "q3"
    q3.value = i;

    q3.style="position: absolute; top:"+(top)+"px; left:"+(left+2*button_width*(i-1))+"px; width:"+ button_width+ "px; height:"+button_height+"px; z-index: 10;" 


    q3Buttons.push(targ.appendChild(q3))
  }



  // attach button events to these, passing answer and triggering next step
  for (var i = 0; i < q3Buttons.length; i += 1) {

        q3Buttons[i].onclick = function(e) {
            
            testData.comfort = this.value;

            // we want to clear out these buttons for the next ones, then to add fish
            for(b in q3Buttons){
              q3Buttons[b].parentNode.removeChild(q3Buttons[b])
            }

            // This is where next fxn call goes, like create new fish
            makeColorButtons(targ)
        };
    }
}


function makeColorButtons(targ){

  var button_width = 40;
  var button_height = 40
  var left = (width/2) - ((button_width/2) + x);
  var top = (height/2) - (button_height/2);

    // ask our question
  var txt = document.createElement("H3")
  
  txt.innerHTML = "What Color Is Your Fish?" 
  txt.style= "position: absolute; top:"+(top-90)+"px;"+
              " left:"+0+"px; width:"+ width + "px; height:"+button_height+"px;"+
              " z-index: 10; " +
              "text-align: center;" +
              "font-family: 'Inter', sans-serif;" +
              "font-weight: 500;" +
              "font-size: 20px;" +
              "color: white;"

  colorButtons.push(targ.appendChild(txt))


    for(b in buttonColors){

      // console.log(b)

      var color = buttonColors[b].color;

      // console.log(buttonColors[b])

      var c = "rgba("+ color.r+","+color.g+","+color.b+","+color.a+")"
      var h = rgb2hex(c);

      var btnid = b;
      var x = buttonColors[btnid].x

        // console.log('make button');
        var button_width = 40;
        var button_height = 40
        var left = (width/2) - ((button_width/2) + x);
        var top = (height/2) - (button_height/2);

        var btn = document.createElement("BUTTON");   
        btn.innerHTML = " "; //button_msg;                   
        btn.id = btnid;
          btn.class = "colorButtons"
        btn.style="position: absolute; top:"+top+"px;"+
                  " left:"+left+"px; width:"+ button_width+ "px;"+
                  " height:"+button_height+"px; z-index: 10;"+
                   "border-radius:" + 36 + "px;" +
                  " background:" +h+ ";" +
                  "border: none;"+
               " box-shadow: 0 18px 32px #00000030;"
                 

        colorButtons.push(targ.appendChild(btn));
    }

    var buttonsCount = colorButtons.length;
    for (var i = 0; i < buttonsCount; i += 1) {
        colorButtons[i].onclick = function(e) {
            
            testData.color = buttonColors[this.id].color

            for(b in colorButtons){
              colorButtons[b].parentNode.removeChild(colorButtons[b])
            }

            // This is where next fxn call goes, like create new fish
            makeNameButtons(targ)

        };
    }
}




function makeNameButtons(targ){

  var button_width = 300;
  var button_height = 40
  var left = (width/2) - ((button_width/2));
  var top = (height/2);
  

  // ask our question
  var txt1 = document.createElement("H3")
  // txt.width = width;
  txt1.innerHTML = "Name to Remember" 
  txt1.style= "position: absolute; top:"+(top-130)+"px;"+
              " left:"+0+"px; width:"+ width + "px; height:"+button_height+"px;"+
              " z-index: 10; " +
              "text-align: center;" +
              "font-family: 'Inter', sans-serif;" +
              "font-weight: 500;" +
              "font-size: 20px;" +
              "color: white;"

  nameButtons.push(targ.appendChild(txt1))


  // this is for getting name of person to be remembered
  var nf = document.createElement("INPUT");
  nf.type = "text"
  nf.id = "nameField"
  nf.name = "name"
  nf.placeholder = "Name "
  nf.style="position: absolute; top:"+(top-80)+"px;"+
  // nf.style="position: absolute; top:"+(top-35)+"px;"+
            " left:"+left+"px; width:"+ button_width+ "px;"+
            " height:"+30+"px; z-index: 10;" +
            "border-radius: " +  2 + "px;"

  nameButtons.push(targ.appendChild(nf))


  // ask our question
  var txt2 = document.createElement("H3")
  // txt.width = width;
  txt2.innerHTML = "Their Relationship to You" 
  txt2.style= "position: absolute; top:"+(top-30)+"px;"+
              " left:"+0+"px; width:"+ width + "px; height:"+button_height+"px;"+
              " z-index: 10; " +
              "text-align: center;" +
              "font-family: 'Inter', sans-serif;" +
              "font-weight: 500;" +
              "font-size: 20px;" +
              "color: white;"
  nameButtons.push(targ.appendChild(txt2))


  // this is for getting relationship of person to be remembered
  var rf = document.createElement("INPUT");
  rf.type = "text"
  rf.id = "relField"
  rf.name = "relationship"
  rf.placeholder = "ie: My Friend "
  rf.style="position: absolute; top:"+(top+20)+"px;"+
            " left:"+(left)+"px; width:"+ button_width+ "px;" +
            " height:"+30+"px; z-index: 10;" +
            "border-radius: "+ 2 + "px;"

  nameButtons.push(targ.appendChild(rf))


  var btn = document.createElement("BUTTON");   
  btn.innerHTML = "Create My Fish";  
  btn.style="position: absolute; top:"+(top+100)+"px;"+
            " left:"+left+"px; width:"+ button_width+ "px;"+
            " height:"+button_height+"px; z-index: 10;" +
            "border-radius: " + 36 + "px;" +
            "color: white;" +
            "background: #6757FF;" +
             "font-family: 'Inter', sans-serif;" +
             "font-size: 15px;" +
             "font-weight: 500;" +
             "text-transform: uppercase;"+
              "letter-spacing: 1px;" +
              "border: none;"+
               " box-shadow: 0 18px 32px #00000030;"




  /*
  button {
    position: absolute;
    top: 359px;
    left: 653.5px;
    width: 300px;
    height: 48px;
    z-index: 10;
    border-radius: 36px;
    color: white;
    background: #6757FF;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
    box-shadow: 0 18px 32px #00000030;
}
  */

  nameButtons.push(targ.appendChild(btn))


  btn.onclick = function(e) {
            
            // testData.color = buttonColors[this.id].color
            testData.name = nf.value;
            testData.relation = rf.value;

            console.log(nf.value)
          
            // btn.parentNode.removeChild(btn)

            for(b in nameButtons){
              nameButtons[b].parentNode.removeChild(nameButtons[b])
            }
            

            // This is where next fxn call goes, like create new fish
            // makeColorButtons(targ);
            createFishFromNewData(testData)


        };

}



//----------------------------------------------------
// helpful functions

//Function to convert hex format to a rgb color
function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

