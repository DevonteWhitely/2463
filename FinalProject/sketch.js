let canvas;

let b1On = false;
let b2On = false;

let sensorData = {};
let parsedDatab1 = 0;
let parsedDatab2 = 0;
let reader;
let sound1;
let sound2;
let promptText = 'PRESS BLUE';
let audioStarted = false;

async function preload() {
  sound1 = new Tone.Player(
    'sounds/mixkit-retro-game-notification-212.wav'
  ).toDestination();
  sound2 = new Tone.Player(
    'sounds/mixkit-apartment-buzzer-bell-press-932.wav'
  ).toDestination();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  if ('serial' in navigator) {
    // The Web Serial API is supported.
    connectButton = createButton('connect');
    connectButton.position(50, 10);
    connectButton.mousePressed(connect);
  }
}

function draw() {
  serialRead();

  background(220);

  parsedDatab1 = sensorData.b1;
  parsedDatab2 = sensorData.b2;

  if (parsedDatab1 == 1) {
    b1On = true;
    sound1.start();
    updatePrompt();
  } else {
    b1On = false;
  }

  if (parsedDatab2 == 1) {
    b2On = true;
    sound2.start();
    updatePrompt();
  } else {
    b2On = false;
  }

  fill(b1On ? color(0, 0, 255) : color(0, 0, 150));
  noStroke();
  ellipse(width / 3, height / 2, 50, 50);

  textSize(20);
  textAlign(CENTER, TOP);
  text(b1On ? 'LED ON' : 'LED OFF', width / 3, height / 2 + 30);

  fill(b2On ? color(255, 0, 0) : color(150, 0, 0));
  noStroke();
  ellipse(width / 1.5, height / 2, 50, 50);

  textSize(20);
  textAlign(CENTER, TOP);
  text(b2On ? 'LED ON' : 'LED OFF', width / 1.5, height / 2 + 30);

  fill(promptText == 'PRESS BLUE' ? color(0, 0, 255) : color(255, 0, 0));
  stroke(0);
  textSize(30);
  textAlign(CENTER, TOP);
  text(promptText, width / 2, height / 3 + 30);
}

function updatePrompt() {
  promptText = random() < 0.5 ? 'PRESS BLUE' : 'PRESS RED';
}

function serialRead() {
  (async () => {
    while (reader) {
      const { value, done } = await reader.read();
      if (done) {
        reader.releaseLock();
        break;
      }
      try {
        sensorData = JSON.parse(value);
        // console.log(value);
      } catch (e) {
        console.log('bad json parse: ' + e);
      }
    }
  })();
}

async function connect() {
  port = await navigator.serial.requestPort();
  await port.open({ baudRate: 38400 });

  reader = port.readable
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new TransformStream(new LineBreakTransformer()))
    .getReader();
}

class LineBreakTransformer {
  constructor() {
    this.chunks = '';
  }

  transform(chunk, controller) {
    this.chunks += chunk;
    const lines = this.chunks.split('\n');
    this.chunks = lines.pop();
    lines.forEach((line) => controller.enqueue(line));
  }

  flush(controller) {
    controller.enqueue(this.chunks);
  }
}
