//https://editor.p5js.org/tlu30/full/a5_3dZOjN
let font;
function preload(){
  font1 = loadFont('PressStart2P-Regular.ttf')
  font2 = loadFont('PottaOne-Regular.ttf')
}
function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(50);
  textFont(font1);
  fill(255)
  textSize(15)
  text(`(${mouseX}, ${mouseY})` , mouseX - 150, mouseY - 200)
  
  textFont(font2);
  textSize(width/10)
  textAlign(CENTER, CENTER)
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  text('Coordinate',0 ,0)

}