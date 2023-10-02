let mitadX;
let mitadY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  mitadX = windowWidth/2;
  mitadY = windowWidth/2;
}

function draw() {
  background(220);
  rectMode(CORNER);
  let texto = '';
  if(mouseX <= mitadX){
    if(mouseY <= mitadY){
      texto = "Arriba Izquierda";
      fill(255,128,128);
      rect(0,0,mitadX);
    } else {
      texto ="Abajo Izquierda";
      fill(128,255,128);
      rect(0,mitadY,mitadX);
    }
  } else {
    if(mouseY <= mitadY){
      texto = "Arriba Derecha";
      fill(128,128,255);
      rect(mitadX,0,mitadX);
    } else {
      texto = "Abajo Derecha";
      fill(220,220,200);
      rect(mitadX,mitadY,mitadX);
    }
  }
  fill(0);
  text(texto, mouseX, mouseY);
}
