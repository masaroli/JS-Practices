var a, x, yOff, xOff1, xOff2, inc, start;
function setup() {
  var canvas = createCanvas(600, 600);

xOff2 = 10000
inc = 0.01;

start = 0
}

function draw(){

background(0);



//translate(width/2, height/2)
// x = map(noise(xOff), 0, 1, 0, width);
// y = map(noise(xOff2), 0, 1, 0, height);
beginShape();
xOff1 = start;

stroke(255);
for (var x = 0; x < width; x++) {
  stroke(255);

  var n = map(noise(xOff1), 0, 1, -100, 100);
  var s = map(sin(xOff1), -1, 1, 150, 450);
  var y = s + n
  noFill();
  vertex(x, y);

  xOff1+=inc;
}

start += inc;

endShape();

//noLoop()

// xOff2+=0.01



};




function getRandomValue(a, b){
  var r = random(0,1)
  if(r > .5){
    return a
  } else{
    return b
  }
}

var flag = true;
function mousePressed(){
  flag = !flag
  !flag ? noLoop() : loop();
}