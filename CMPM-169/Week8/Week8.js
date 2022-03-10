//https://editor.p5js.org/tlu30/full/chbTmagih
let model;
let previous_pen = 'down';
let x, y;
let strokePath;

function preload() {
  model = ml5.sketchRNN('face');
}

function setup() {
  createCanvas(800, 800);
  
  background(255);

  let button = createButton('New');
  button.mousePressed(SketchRNN);
  
  SketchRNN();
}

function SketchRNN() {
  background(50);
  x = width / 2;
  y = height / 2;
  model.reset();
  model.generate(gotStroke);
}

function draw() {
  if (strokePath) {
    if (previous_pen == 'down') {
      stroke(255);
      strokeWeight(5);
      line(x, y, x + strokePath.dx, y + strokePath.dy);
    }
    x += strokePath.dx;
    y += strokePath.dy;
    previous_pen = strokePath.pen;
    model.generate(gotStroke);

    if (strokePath.pen == 'end') {
      return;
    }
  }
}

function gotStroke(error, path) {
  strokePath = path;
}
