//https://editor.p5js.org/tlu30/full/Ulv-Z7pkRL
function setup() {
  createCanvas(400, 400);
  background(220)
}

function draw() {
  noStroke()
  fill(mouseX%255, mouseY%255, mouseY%255)
  circle(4002, 4004, 75)
  stroke(0)
  if(mouseIsPressed == true){
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}

function mousePressed(event){
  if(event.shiftKey){
    strokeWeight(10)
  }
  else{
    strokeWeight(1)
  }
  if(event.ctrlKey){
    strokeWeight(0)
    fill(mouseX%255, mouseX%255, mouseY%255)
    circle(mouseX, mouseY, 30)
  }
}