function setup() {

  createCanvas(600, 600);

}

function draw() {

  background(100);
  stroke(232);
  noFill();
  rectMode(CENTER);

  for (var x = 0; x <= 400; x += 100) {
    for (var y = 20; y <= 80; y += 20) {
      rect(100 + x, 300, y, y);
    }
  }
}
