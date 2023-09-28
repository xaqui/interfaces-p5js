let y = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(5);
}

function draw() {
  background(220, 150, 200);

  if(mouseX >0 && mouseX <= 133){
    for (let i = 0; i <= 400; i += 20) {
      for (let j = 0; j <= 400; j += 20) {
        fill(20, random(100,200), 200);
        circle(random(i,i+20), random(j,j+20), 20);
      }
    }
  } else if(mouseX >133 && mouseX <= 266){
    circle(mouseX,mouseY,20);
  } else if(mouseX > 260){
    y+=20;
    for (let k = 0; k <= 400; k+=20) {
      circle(k,y,20);
    }
    
    if(y>400){
      y = 0;
    }
  }


}