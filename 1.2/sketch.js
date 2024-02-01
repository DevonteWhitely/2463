var canvas;
var currentColor = 'black';
var colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'cyan',
  'blue',
  'magenta',
  'brown',
  'white',
  'black',
];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(255);
  createPalette();
}

function draw() {
  if (mouseIsPressed) {
    stroke(currentColor);
    strokeWeight(5);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function createPalette() {
  var x = 10;
  var y = 10;
  for (var i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(x, y, 20, 20);
    y += 25;
    if (y > height - 35) {
      y = 10;
    }
  }
}

function mouseClicked() {
  if (mouseX > 10 && mouseX < 30 && mouseY > 10 && mouseY < height - 25) {
    var index = floor((mouseY - 10) / 25);
    currentColor = colors[index];
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  createPalette();
}
