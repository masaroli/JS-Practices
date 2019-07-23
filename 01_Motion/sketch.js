
function setup() {
  createCanvas(600, 600);
  background(0);
  noStroke();
  smooth()
}

function draw(){
  var alpha = frameCount;
  if (alpha < 255) {
   alpha++
  }
  var red =  alpha;

  console.log(frameCount)

if (frameCount % 5 == 0) {
    fill(red, 0, 0, red);
    push();
    translate(width/2, height/2);
    rotate(radians(frameCount * 2  % 360));
    rect(0, 0, 160, 60);
    pop();
  }
}