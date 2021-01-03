const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var divisions = [];
var divisionHeight=300;
var plinko=[];
var particles=[];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);
  for(var x=0; x<=width;x=x+80){
    divisions.push(new Divisions(x,height-divisionHeight/2,10,divisionHeight))
  }
 //console.log(divisions)
  for(var x=75; x<=width;x=x+50){
    plinko.push(new Plinko(x,75))
  }
  for(var x=50; x<=width-10;x=x+50){
    plinko.push(new Plinko(x,175))
  }
  for(var x=75; x<=width;x=x+50){
    plinko.push(new Plinko(x,275))
  }
  for(var x=50; x<=width-10;x=x+50){
    plinko.push(new Plinko(x,375))
  }
  
  
}

function draw() {
  background(0);
  
  Engine.update(engine);
  ground.display();
  
  for(i=0;i<plinko.length;i++){
    plinko[i].display();
  }

  for(j=0;j<divisions.length;j++){
    divisions[j].display();
  }
 
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for(var x=0; x <particles.length;x++){
    particles[x].display();
  }
}