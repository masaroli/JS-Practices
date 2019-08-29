var myp5 = new p5(function(p) {

 let part, img, canvas, text;
 let particles = []
  p.setup = function(){
  canvas = p.createCanvas(600,600);
  canvas.parent('sketch-holder');
  }
  
  p.draw = function(){  
  p.background(0);

  part = new Particle();
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
  
  constructor() {
   this.x = p.random(p.width)
   this.y = p.random(p.width)
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

