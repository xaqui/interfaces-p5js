var x = 0;

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    if(x <= 400){
      x +=10;
    } else {
      x = 0;
    }
    background(220,100,200);
    circle(x,200,20);
    console.log(x);
    frameRate(2);
  }