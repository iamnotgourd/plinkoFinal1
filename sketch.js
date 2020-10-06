const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles = []
var plinkos = []
var divisions = []
var ground

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
    for(var k = 0;k<=width;k = k+80){
      divisions.push(new Divisions(k,650,5,300))
    }
  
    for(var j = 6;j<width;j = j+50){
      plinkos.push(new Plinko(j,175,10))
    }
  
    for(var l = 25;l<width;l = l+50){
      plinkos.push(new Plinko(l,275,10))
      
    }

    for(var a = 0;a<width;a = a+50){
      plinkos.push(new Plinko(a,375,10))
    }
  
    
   ground = new Ground(240,800,480,5)

}

function draw() {
  background("black");  
  Engine.update(engine);

 
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-60,width/2 +60),10,10))
  }

  for(var j = 0;j<particles.length;j++){
    particles[j].display()
  }
  for(var k = 0;k<divisions.length;k++){
    divisions[k].display()
  }
  for(var i = 0;i<plinkos.length;i++){
    plinkos[i].display()
  }

}