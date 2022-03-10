//https://editor.p5js.org/tlu30/full/iGoQmPMOa
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill()
}

function draw() {
  background(0,0,0);
  strokeWeight(15)
  stroke(255,255,255)
  rect(windowWidth/2, windowHeight/4, 75, 75)
  line(windowWidth/2 + 75/2, windowHeight/4 + 75 , windowWidth/2 + 75/2, windowHeight/4 + 275);
  line(windowWidth/2 + 75/2, windowHeight/4 + 75 , windowWidth/2 - 75, windowHeight/4 + 200);
  line(windowWidth/2 + 75/2, windowHeight/4 + 75 , windowWidth/2 + 150, windowHeight/4 + 200);
  line(windowWidth/2 + 75/2, windowHeight/4 + 275, windowWidth/2 - 75/2, windowHeight/4 + 500);
  line(windowWidth/2 + 75/2, windowHeight/4 + 275, windowWidth/2 + 150, windowHeight/4 + 500);
}