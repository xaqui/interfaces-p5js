let mitadX;
let mitadY;
let canvas;
let isActive;

function setup() {
  isActive = false;
  canvas = createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  mitadX = windowWidth/2;
  mitadY = windowWidth/2;

  /* Las funciones mouseOver y mouseOut se llama una vez cada vez que el raton 
  se mueve sobre o fuera de un elemento. 
  Se añade un escuchador de eventos para el canvas. Cuando se llama a mouseOver y mouseOut 
  se llamara a las funciones activa y desactiva */
  canvas.mouseOut(desactiva);
  canvas.mouseOver(activa);
}

function desactiva(){
  isActive = false;
}

function activa(){
  isActive = true;
}

function draw() {
  background(220);
  rectMode(CORNER);
  let texto = '';
  // Se comprueba que el raton esta sobre el canvas con la condicion booleana 
  // establecida con los escuchadores de eventos
  if (isActive){
    if(mouseX <= mitadX && mouseX > 0){
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
  }
    fill(0);
    text(texto, mouseX, mouseY);
}
