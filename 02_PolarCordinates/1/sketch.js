var a, x, y, r, aAcc, aVel;
function setup() {
  var canvas = createCanvas(600, 600);

  angleMode(DEGREES)
  a = 45;
  aAcc = .02;
  aVel = 0.2
  rr = getRandomValue(true, false)
}

function draw(){
 background(0);
  aVel = constrain(aVel + aAcc, 0, 1);
  
  if(aVel >= 1 || aVel <= 1){
  aAcc *= -1
  }
  
   a += aVel
  translate(width/2, height/2);
  rotate(cos(a)*45)
  circles()
};

function circles (){
    for(var j = 0; j <= 400; j+=40 ) {
      if(j<100){
        var r = j-10
      }else{
        var r = j
      }
      var alpha = map(j, 0, 400, 0, 255)
      var red = map(j, 0, 400, 0, 255)

        var circleRadius = r *.10

    for(var i = 0; i < 360; i+=10) {
      x = r * cos(i);
      y = r * sin(i);
      if(i % 20){
      fill(alpha, alpha, alpha, alpha)
      noStroke()
      ellipse(x, y, circleRadius);
      } else {
      fill(255, 255, 255, alpha) 
      ellipse(x, y, circleRadius);
      
      }
    }
  }
}

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