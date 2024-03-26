var canvas;
var currentColor = {
  color: 'black',
  note: null,
};
var colors = [
  { color: 'red', note: 'C4' },
  { color: 'orange', note: 'D4' },
  { color: 'yellow', note: 'E4' },
  { color: 'green', note: 'F4' },
  { color: 'cyan', note: 'G4' },
  { color: 'blue', note: 'A4' },
  { color: 'magenta', note: 'B4' },
  { color: 'brown', note: 'C5' },
  { color: 'white', note: null },
  { color: 'black', note: null },
];

var synth, loop1, loop2, loop3;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  createPalette();
  synth = new Tone.Synth().toDestination();

  loop1 = new Tone.Loop((time) => {
    if (currentColor.note) {
      synth.triggerAttackRelease(currentColor.note, '8n', time);
    }
  }, '4n');

  loop2 = new Tone.Loop((time) => {
    if (currentColor.note) {
      synth.triggerAttackRelease(currentColor.note, '16n', time);
    }
  }, '2n');

  loop3 = new Tone.Loop((time) => {
    if (currentColor.note) {
      synth.triggerAttackRelease(currentColor.note, '4n', time);
    }
  }, '1m');

  Tone.Transport.start();
  loop1.start(0);
  loop2.start(0);
  loop3.start(0);

  // add click event listener to start audio playback
  document.addEventListener('click', () => {
    Tone.start();
  });
}

function draw() {
  if (mouseIsPressed) {
    stroke(currentColor.color);
    strokeWeight(5);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function createPalette() {
  var x = 10;
  var y = 10;
  for (var i = 0; i < colors.length; i++) {
    fill(colors[i].color);
    rect(x, y, 20, 20);
    setNote(i, colors[i].note); // set note for each color
    y += 25;
    if (y > height - 35) {
      y = 10;
    }
  }
}

function setNote(index, note) {
  colors[index].note = note;
}

function mouseClicked() {
  if (mouseX > 10 && mouseX < 30 && mouseY > 10 && mouseY < height - 25) {
    var index = floor((mouseY - 10) / 25);
    currentColor = colors[index];
    if (currentColor.note) {
      synth.triggerAttackRelease(currentColor.note, '8n');
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  createPalette();
}
