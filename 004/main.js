let canvasWidth = 400;
let canvasHeight = 400;
const ley1key = 'a';
const ley2key = 's';
const ley3key = 'd';
const ley4key = 'f';
const ley5key = 'g';
let locked = false;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  mainScreen();
}

function mainScreen(){
  locked = false;
  background(220);
  textAlign(CENTER);
  fill(0);
  text("ODIO P5JS", canvasWidth/2, canvasHeight/2);
}

function ley1Screen(){
  locked = true;
  background(220);
  fill(0,100);
  ellipse(mouseX,mouseY,20,20);
}
function ley2Screen(){
  locked = true;
  background(220);
  fill(255,128,128);
  ellipse(mouseX,mouseY,20,20);
}
function ley3Screen(){
  locked = true;
  background(220);
  fill(128,255,128);
  ellipse(mouseX,mouseY,20,20);
}
function ley4Screen(){
  locked = true;
  background(220);
  fill(128,128,255);
  ellipse(mouseX,mouseY,20,20);
}
function ley5Screen(){
  locked = true;
  background(220);
  fill(220,220,200);
  ellipse(mouseX,mouseY,20,20);
}


function draw() {
  if (keyPressed && keyIsDown) {
    if(key == ley1key && !locked){
      ley1Screen();
    } else if(key == ley2key && !locked){
      ley2Screen();
    } else if(key == ley3key && !locked){
      ley3Screen();
    } else if(key == ley4key && !locked){
      ley4Screen();
    } else if(key == ley5key && !locked){
      ley5Screen();
    }
  } else {
    mainScreen();
  }

}
