let canvasWidth = 400;
let canvasHeight = 400;
const ley1key = 'a';
const ley2key = 's';
const ley3key = 'd';
const ley4key = 'f';
const ley5key = 'g';
let currentScreen = '';
let locked;
let countdown = 45;


function setup() {
  locked = false;
  createCanvas(canvasWidth, canvasHeight);
  mainScreen();
  //focus(); //Funcion para obtener el foco y que funcione sin tener que clicar el lienzo
}

function mainScreen() {
  currentScreen = 'main';
  locked = false;
  countdown = 45;
  frameRate(60);
  background(220);
  textAlign(CENTER);
  fill(0);
  text("ODIO P5JS", canvasWidth / 2, canvasHeight / 2);
}

function ley1Screen() {
  locked = true;
  currentScreen = '1';
  background(255);
  let numCircles = 3;
  let spacing = (400 / 8) - 4;
  fill(128);
  noStroke();
  ellipseMode(CENTER);
  // Circulos 1
  for (let i = 0; i < numCircles; i++) {
    for (let j = 0; j < numCircles; j++) {
      let x = (i + 1) * spacing;
      let y = (j + 1) * spacing + 70;
      ellipse(x, y, 30, 30);
    }
  }
  // Circulo 2
  for (let i = 0; i < numCircles; i++) {
    for (let j = 0; j < numCircles; j++) {
      let x = (i + numCircles + 2) * spacing;
      let y = (j + 1) * spacing + 70;
      if (i == 2) {
        x += 25;
      }
      ellipse(x, y, 30, 30);
    }
  }
  fill(0);
  textStyle(BOLD);
  textSize(16);
  textAlign(CENTER);
  text("LEY DE PROXIMIDAD", 200, 70);
  textStyle(NORMAL);
  textSize(12);
  textAlign(LEFT);
  text("Esto es un único grupo.", 30, 270);
  text("Elementos cercanos en una pantalla se perciben como relacionados.", 10, 350);
  textAlign(RIGHT);
  text("Esto se percibe como\n grupos separados.", 350, 270);
}

function ley2Screen() {
  locked = true;
  currentScreen = '2';
  background(220);
  ellipseMode(RADIUS);
  let numCols = 5;
  let numRows = 5;
  let circleSpacing = canvasWidth / 11;
  let circleRadius = circleSpacing / 2 - 4;

  // Circulos 1
  let firstSetColor = color(200);
  fill(firstSetColor);
  noStroke();

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < 3; col++) { // First 3 columns
      let x = canvasWidth / 2 - (circleSpacing * 2) + col * circleSpacing;
      let y = canvasHeight / 2 - (circleSpacing * 2) + row * circleSpacing;
      ellipse(x, y, circleRadius, circleRadius);
    }
  }
  // Circulos 2
  let secondSetColor = color(220, 200, 70);
  fill(secondSetColor);
  noStroke();

  for (let row = 0; row < numRows; row++) {
    for (let col = 3; col < numCols; col++) { // Last 2 columns
      let x = canvasWidth / 2 - (circleSpacing * 2) + col * circleSpacing;
      let y = canvasHeight / 2 - (circleSpacing * 2) + row * circleSpacing;
      ellipse(x, y, circleRadius, circleRadius);
    }
  }
  fill(0);
  textStyle(BOLD);
  textSize(16);
  textAlign(CENTER);
  text("LEY DE LA SEMEJANZA", 200, 70);
  textStyle(NORMAL);
  textSize(12);
  textAlign(LEFT);
  text("Esto se percibe\ncomo un grupo.", 20, 170);
  text("Elementos que se parecen entre sí se perciben como agrupados,\nincluso aunque estén separados.", 10, 330);
  textAlign(RIGHT);
  text("Esto se percibe\ncomo otro.", 380, 180);
}
function ley3Screen() {
  locked = true;
  currentScreen = '3';
  background(220);
  ellipseMode(CORNER);
  noStroke();
  let spacing = canvasWidth / 7;
  fill(255);
  // Circulos 1
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let x = col * spacing + spacing;
      let y = row * spacing + spacing + 20;
      ellipse(x, y, spacing - 2, spacing - 2);
    }
  }

  // Circulos 2
  for (let row = 0; row < 3; row++) {
    for (let col = 3; col < 5; col++) {
      let x = col * spacing + spacing;
      let y = row * spacing + spacing + 20;
      ellipse(x, y, spacing - 2, spacing - 2);
    }
  }
  // Cuadrado
  noFill();
  stroke(0);
  rectMode(CORNER);
  rect(spacing - 1, spacing + 19, spacing * 3, spacing * 3);
  noStroke();
  fill(0);
  textStyle(BOLD);
  textSize(16);
  textAlign(CENTER);
  text("LEY DE REGIÓN COMÚN", 200, 70);
  textStyle(NORMAL);
  textSize(12);
  text("Elementos dentro de una región o área común\nse perciben como relacionados", 200, 330);
  textAlign(LEFT);
  text("Esto se percibe\ncomo un grupo.", 30, 270);
}
function ley4Screen() {
  locked = true;
  currentScreen = '4';
  background(220);
  fill(0);
  textStyle(BOLD);
  textSize(42);
  textAlign(CENTER);
  background(220);
  noStroke();
  frameRate(1); // Set the frame rate to 1 frame per second
  let minutes = floor(countdown / 60);
  let seconds = countdown % 60;
  let timeText = nf(minutes, 2) + ":" + nf(seconds, 2);
  text(timeText, canvasWidth / 2, canvasHeight / 2);
  if (countdown > 0) {
    countdown--;
    let buttonWidth = 200;
    let buttonHeight = 40;
    let buttonX = 200 - buttonWidth / 2;
    let buttonY = 250 - buttonHeight / 2;
    if (
      mouseX > buttonX &&
      mouseX < buttonX + buttonWidth &&
      mouseY > buttonY &&
      mouseY < buttonY + buttonHeight
    ) {
      fill(255, 100, 100);
    } else {
      fill(255, 0, 0);
    }
    rect(buttonX, buttonY, buttonWidth, buttonHeight, 10);
    fill(255);
    noStroke();
    textSize(24);
    textAlign(CENTER);
    text("PUNTUAR", buttonX + (buttonWidth / 2), buttonY + (buttonHeight / 2));
  } else {
    textSize(16);
    text("¡Se acabo el tiempo!", width / 2, height / 2 + 50);
    text("La tarea ha sido puntuada con un 10.", width / 2, height / 2 + 70);
  }
  fill(0);
  textSize(16);
  text("LEY DE PARKINSON", 200, 70);
  textStyle(NORMAL);

  textAlign(CENTER);
  text("Tiempo restante para puntuar esta tarea:", 200, 140);
  textSize(12);
  text("Dice que el trabajo se expande para llenar el tiempo disponible.\nSi das mucho tiempo para una tarea, la gente lo usará,\nasí que se deben establecer plazos para mantenerse eficiente.", 200, 330);


}
function ley5Screen() {
  locked = true;
  currentScreen = '5';
  background(220);
  fill(220, 220, 200);
  ellipse(mouseX, mouseY, 20, 20);
}

function keyIsDown(_key) {
  if ((_key == ley1key && !locked) || currentScreen == '1') {
    ley1Screen();
  } else if ((_key == ley2key && !locked) || currentScreen == '2') {
    ley2Screen();
  } else if ((_key == ley3key && !locked) || currentScreen == '3') {
    ley3Screen();
  } else if ((_key == ley4key && !locked) || currentScreen == '4') {
    ley4Screen();
  } else if ((_key == ley5key && !locked) || currentScreen == '5') {
    ley5Screen();
  }
  return false;
}

function draw() {
  if (keyIsPressed) {
    keyIsDown(key);
  }
  else {
    mainScreen();
  }

}
