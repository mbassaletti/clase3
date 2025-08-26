var d;
function setup() {
  createCanvas(windowWidth, windowHeight);
background(0,0,255);
  frameRate(250);
  //lento frameRate(5)
}

function draw() {
  d = random (10,100);
  noStroke();
  fill(250,d);
  ellipse (mouseX, mouseY, d, d);
}
