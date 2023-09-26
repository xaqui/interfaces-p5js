var x1 = 0;
var x2 = 0;
var movingRight = true;
var movingRight2 = true;

function setup() {
    createCanvas(400, 400);
}

function draw() {
  // movimiento circulo 1
  if(x1 < 400 && movingRight){
    movingRight = true;
  }else if(x1<0){
    movingRight = true;
  } 
  else{
    movingRight = false;
  }
  if(movingRight){
    x1 +=10;
  } else {
    x1 -= 10;
  }
  // movimiento circulo 2
  if(x2 < 400 && movingRight2){
    movingRight2 = true;
  }else if(x2<0){
    movingRight2 = true;
  } 
  else{
    movingRight2 = false;
  }
  if(movingRight2){
    x2 +=15;
  } else {
    x2 -= 15;
  }

  background(220,100,200);
  
  // cambiamos el color del circulo dependiendo del valor de x
  fill(20,200,x1);
  circle(x1,200,30);
  
  fill(20,200,x2);
  circle(x2,150,20);
  
  console.log("x circulo 1 = "+x1+", x circulo 2 = "+x2);
}