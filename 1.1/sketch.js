function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);

  //Example #1
  strokeWeight(1);
  stroke(0, 255, 0);
  fill(0, 255, 0);
  rect(4, 6, 125, 70);

  stroke(0);
  fill(250);
  ellipse(35, 40, 55, 55);
  square(70, 15, 50);

  //Example #2
  noStroke();
  fill(0, 0, 255, 90);
  ellipse(50, 150, 80, 80);
  fill(0, 255, 0, 90);
  ellipse(100, 150, 80, 80);
  fill(255, 0, 0, 90);
  ellipse(75, 125, 80, 80);

  //Example #3
  fill(0);
  rect(4, 200, 150, 80);
  fill(255, 0, 0);
  square(85, 210, 60, 30, 30, 0, 0);
  fill(255);
  ellipse(100, 235, 20, 20);
  ellipse(130, 235, 20, 20);
  fill(0, 0, 255);
  ellipse(100, 235, 10, 10);
  ellipse(130, 235, 10, 10);
  fill(255, 255, 0);
  //ellipse(45, 240, 60, 60);
  arc(45, 240, 60, 60, 230, 185);

  //Example #4
  fill(0, 0, 150);
  rect(4, 300, 180, 200);
  strokeWeight(2.5);
  stroke(255);
  fill(0, 150, 0);
  ellipse(95, 400, 80, 80);
  fill(255, 0, 0);
  star(95, 400, 15, 40, 5);
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
