let canvasWidth = 400;
let canvasHeight = 400;
const ley1key = 'a';
const ley2key = 's';
const ley3key = 'd';
const ley4key = 'f';
const ley5key = 'g';
let currentScreen = '';
let locked;
let countdown = 10;
let lastUpdateTime = 0;

function setup() {
  locked = false;
  createCanvas(canvasWidth, canvasHeight);
  mainScreen();
  focus(); //Funcion para obtener el foco y que funcione sin tener que clicar el lienzo
}

function mainScreen() {
  currentScreen = 'main';
  locked = false;
  countdown = 10;
  lastUpdateTime = millis();
 
  frameRate(60);
  background(220);
  textAlign(CENTER);
  textSize(32);
  textStyle(BOLD);
  text("LEYES DE UX", canvasWidth / 2, (canvasHeight / 2) -50);
  textSize(12);
  textStyle(NORMAL);
  fill(0);
  textAlign(CENTER);
  text("Pulsa 'a' para Ley de Proximidad", canvasWidth / 2, canvasHeight / 2);
  text("Pulsa 's' para Ley de la Semejanza", canvasWidth / 2,15+ canvasHeight / 2);
  text("Pulsa 'd' para Ley de Región Común", canvasWidth / 2,30+ canvasHeight / 2);
  text("Pulsa 'f' para Ley de Parkinson", canvasWidth / 2,45+ canvasHeight / 2);
  text("Pulsa 'g' para Ley de Miller", canvasWidth / 2,60+ canvasHeight / 2);

}
// Ley de Proximidad
function ley1Screen() {
  locked = true;
  currentScreen = '1';
  background("#EEE5E9");
  let numCircles = 3;
  let spacing = (400 / 8) - 4;
  fill("#2B303A");
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
// Ley de la Semejanza
function ley2Screen() {
  locked = true;
  currentScreen = '2';
  background("#EEE5E9");
  ellipseMode(RADIUS);
  let numCols = 5;
  let numRows = 5;
  let circleSpacing = canvasWidth / 11;
  let circleRadius = circleSpacing / 2 - 4;

  // Circulos 1
  let firstSetColor = color("#D64933");
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
// Ley de Region Comun
function ley3Screen() {
  locked = true;
  currentScreen = '3';
  background("#EEE5E9");
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
// Ley de Parkinson
function ley4Screen() {
  locked = true;
  currentScreen = '4';
  background("#EEE5E9");
  fill(0);
  textStyle(BOLD);
  textSize(42);
  textAlign(CENTER);
  noStroke();

  let currentTime = millis();
  let elapsedSeconds = floor((currentTime - lastUpdateTime) / 1000);

  if (elapsedSeconds >= 1) {
    countdown -= elapsedSeconds;
    lastUpdateTime = currentTime;
  }

  if (countdown < 0) {
    countdown = 0;
  }
  let minutes = floor(countdown / 60);
  let seconds = countdown % 60;

  let timeText = nf(minutes, 2) + ":" + nf(seconds, 2);
  text(timeText, canvasWidth / 2, canvasHeight / 2);
  if (countdown > 0) {
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
    text("PUNTUAR", buttonX + (buttonWidth / 2), buttonY + (buttonHeight / 2)+7);
  } else {
    textSize(16);
    text("¡Se acabo el tiempo!", canvasWidth / 2, canvasHeight / 2 + 50);
    text("La tarea ha sido puntuada con un 10.", canvasWidth / 2, canvasHeight / 2 + 70);
  }
  fill(0);
  textSize(16);
  text("LEY DE PARKINSON", 200, 70);
  textStyle(NORMAL);

  text("Tiempo restante para puntuar esta tarea:", 200, 140);
  textSize(12);
  text("Dice que el trabajo se expande para llenar el tiempo disponible.\nSi das mucho tiempo para una tarea, la gente lo usará,\nasí que se deben establecer plazos para mantenerse eficiente.", 200, 330);


}
// Ley de Miller
function ley5Screen() {
  locked = true;
  currentScreen = '5';
  let filas = 7;
  let columnas = 7;
  let circleDiameter;
  let padding;
  let xOffset;
  let yOffset;
  let coloredCircles = [];
  background("#EEE5E9");
  circleDiameter = canvasWidth / 3 / columnas;
  padding = circleDiameter -5;
  xOffset = (canvasWidth - (circleDiameter * columnas + padding * (columnas - 1))) / 2;
  yOffset = (canvasHeight - (circleDiameter * filas + padding * (filas - 1))) / 2;

  noStroke();

  // Crear circulos
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      let x = xOffset + j * (circleDiameter + padding);
      let y = yOffset + i * (circleDiameter + padding);

      fill(200); // Light grey
      ellipse(x, y, circleDiameter);
      coloredCircles.push({ x, y });
    }
  }

  // Colorear 7 circulos random
  let primaryColors = ['#268bd2', '#d33682', '#859900', '#b58900', '#cb4b16', '#2aa198', '#839496'];
  let circle = coloredCircles.splice(3, 1)[0];
  fill(primaryColors[0]);
  ellipse(circle.x, circle.y, circleDiameter);
  circle = coloredCircles.splice(4, 1)[0];
  fill(primaryColors[1]);
  ellipse(circle.x, circle.y, circleDiameter);
  circle = coloredCircles.splice(10, 1)[0];
  fill(primaryColors[2]);
  ellipse(circle.x, circle.y, circleDiameter);
  circle = coloredCircles.splice(17, 1)[0];
  fill(primaryColors[3]);
  ellipse(circle.x, circle.y, circleDiameter);
  circle = coloredCircles.splice(22, 1)[0];
  fill(primaryColors[4]);
  ellipse(circle.x, circle.y, circleDiameter);
  circle = coloredCircles.splice(13, 1)[0];
  fill(primaryColors[5]);
  ellipse(circle.x, circle.y, circleDiameter);
  circle = coloredCircles.splice(29, 1)[0];
  fill(primaryColors[6]);
  ellipse(circle.x, circle.y, circleDiameter);
  noStroke();
  fill(0);
  textStyle(BOLD);
  textSize(16);
  textAlign(CENTER);
  text("LEY DE MILLER", 200, 70);
  textStyle(NORMAL);
  textSize(12);
  text("Sugiere que la cantidad ideal de información que podemos retener\n en la memoria a corto plazo es de alrededor de 7 ± 2 elementos. \nSe debe diseñar con esto en mente \npara evitar sobrecargar a las personas.", 200, 330);

}

function teclaPulsada(_key) {
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
    teclaPulsada(key);
  }
  else {
    mainScreen();
  }
}
