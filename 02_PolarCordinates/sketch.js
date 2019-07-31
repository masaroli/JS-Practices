var a, x, y, r, aAcc, aVel;
function setup() {
  var canvas = createCanvas(600, 600);

  angleMode(DEGREES)
  a = 45;
  aAcc = .010;
  aVel = 1
  rr = getRandomValue(true, false)
}

function draw(){
 background(0);
  aVel = constrain(aVel + aAcc, 0, 4);
  
  if(aVel >= 4 || aVel <= 1){
  aAcc *= -1
  }
  
  a = a + aVel
  translate(width/2, height/2);
  rotate(cos(a)*45)
  circles()
};

function circles (){
    for(var j = 0; j <= 400; j+=40 ) {
      var r = j
      var alpha = map(j, 0, 400, 0, 255)
      var red = map(j, 0, 400, 0, 255)

    for(var i = 0; i < 360; i+=10) {
      x = r * cos(i);
      y = r * sin(i);
      if(i % 20){
      fill(255, 0, 0, alpha)
      ellipse(x, y, r*.10, r*.10);
      } else {
      fill(0, 0, 255, alpha) 
      ellipse(x, y, r*.10, r*.10);
      
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