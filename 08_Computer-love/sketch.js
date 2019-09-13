var myp5 = new p5(function(p) {

 let part, img, canvas, text, morePart;
 let particles = []
 let moreParticles = []
   p.setup = function(){
  canvas = p.createCanvas(600,600);
  canvas.parent('sketch-holder');
  }
  
  p.draw = function(){  
  p.background(63,99,174);
//   morePart = new Particle(100,250);

//   if(p.random(0,1) < .1){
//   moreParticles.push(morePart)
//   for(let i = moreParticles.length-1; i >= 0; i--) {
//     moreParticles[i].show()
//     moreParticles[i].update()
    
//     if(moreParticles[i].finished()) {
//         moreParticles.splice(i, 1)
//       }
  

//   }
// }
part = new Particle(300,p.random(0, 350));

  particles.push(part)

    for(let i = particles.length-1; i >= 0; i--) {
    particles[i].show()
    particles[i].update()
      if(particles[i].finished()) {
        particles.splice(i, 1)
      }
    }
}
  
class Particle {
  
  constructor(x, y) {
   this.x = x
   this.y = y
   this.r = p.random(10, 130);
   this.vx = p.random(-1, 1);
   this.vy = p.random(-1  , 1);
   this.alpha = 255;
   this.colors = [{r:105, g:210, b:185}, {r:50, g:210, b:230}, {r:232, g:232, b:232}];
   this.randomPos = parseInt(p.random(this.colors.length));
   this.color = this.colors[this.randomPos]
   
  }
  
  finished() {
    return this.alpha < 0;
  }
  
  update(){
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    this.alpha -=.5; 
  }
  
  show() {
    p.stroke(this.color.r,this.color.g,this.color.b, this.alpha);
    p.noFill();
    p.ellipse(this.x, this.y, this.r)
  }

}
});

