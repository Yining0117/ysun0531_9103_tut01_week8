let img;

function preload() {
  img = loadImage('assets/sunrise.jpg');
}
function setup() {
  createCanvas(1000, 450);

  // Resize the image so it fits on the screen
  img.resize(width, height);

  noStroke();
}

function draw() {

  // Get the color of a random pixel.
  img.loadPixels();
  for (let i=0;i<50;i++){
  const pixelX = random(width);
  const pixelY = random(height);
  const pixelColor = img.get(pixelX, pixelY);

  // Paint that pixel with a circle.
  fill(pixelColor);
  ellipse(pixelX, pixelY, 10, 10);
 }
}