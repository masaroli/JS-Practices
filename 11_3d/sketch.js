var x, cOffR, cOffG, r, g, detailX, detailXOff,vel;
function setup() {
  createCanvas(600, 600, WEBGL);
  x = 0;
  vel = 0
  cOffR = 0;
  cOffG = 10000;
  r = g = 0
  detailX = 4;
  detailXOff = 5000;
  frameRate(60)
}

function draw() {

  background(r*.75,0,r*.75, 255);
  rotateX(r*.5)
  rotateY(r)

  noStroke()
  r = map(noise(cOffR), 0, 1, 100, 255)
  g = map(noise(cOffG), 0, 1, 100, 255)
//  detailX = parseInt(map(noise(detailXOff), 0, 1, 12, 24));
 // fill(r, g, 0, 255)
  directionalLight(r,r,0, 200, 150,0)
  directionalLight(0,r,r, -200,150,0)
  directionalLight(g,g,0, 150, -200,0)
  directionalLight(0,g,g, 150,200,0)


    ambientLight(100);


  specularMaterial(0,0,100) 
  ellipsoid(400,400,100)

  vel+=0.0025
 x +=vel

 var fx = constrain(x, 0, 150)
//   push()
// translate(-fx, 0)
// //rotateX(g)

// box(200, 200, 100)
// // box(i*10, i*10, i*10)
// pop()

// push()
// translate(fx, 0)
// //rotateX(g)
// box(200, 200, 100)
// // box(i*10, i*10, i*10)
// pop()
  
  if(fx == 150){
  cOffR +=0.00015;
  cOffG +=0.00015;
  }

}

//For recording
const btn = document.querySelector('button'),
  chunks = [];

function record() {
  chunks.length = 0;
  let stream = document.querySelector('canvas').captureStream(30),
    recorder = new MediaRecorder(stream);
  recorder.ondataavailable = e => {
    if (e.data.size) {
      chunks.push(e.data);
    }
  };
  recorder.onstop = exportVideo;
  btn.onclick = e => {
    recorder.stop();
    btn.textContent = 'start recording';
    btn.onclick = record;
  };
  recorder.start();
  btn.textContent = 'stop recording';
}

function exportVideo(e) {
  var blob = new Blob(chunks);
  var vid = document.createElement('video');
  vid.id = 'recorded'
  vid.controls = true;
  vid.src = URL.createObjectURL(blob);
  document.body.appendChild(vid);
  vid.play();
}
btn.onclick = record;