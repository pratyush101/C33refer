
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var divisionHeight=250;
var divisions=[];
var plinkos=[];
var particles=[particle];
var particle;
var line;
var gameState="PLAY";
var count=0;
var score=0;
function preload()
{
	
}
function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
  ground1 = new Ground(width/2,690,800,15);

  for(var i=0; i<=width; i=i+80){
  divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight))
}

  for(var j=40; j<=width-40; j=j+50){
  plinkos.push(new Plinko(j,105,10))
  }


  for(var j=40; j<=width-40; j=j+50){
    plinkos.push(new Plinko(j,145,10))
    }

    for(var j=40; j<=width-40; j=j+50){
      plinkos.push(new Plinko(j,185,10))
      }

      for(var j=40; j<=width-40; j=j+50){
        plinkos.push(new Plinko(j,225,10))
        }
        Engine.run(engine);
}
function draw() {
  background(0);
  Engine.update(engine);
  createEdgeSprites();
  rectMode(CENTER);
  textSize(35);
  text("Score:  "+score,20,40);
  fill(225);
  
  textSize(35);
  text("500",5,550);
  text("500",80,550);
  text("500",160,550);
  text("500",240,550);
  text("100",320,550);
  text("100",400,550);
  text("100",480,550);
  text("200",560,550);
  text("200",640,550);
  text("200",720,550);
  ground1.display();
  if(gameState=="END"){
    background("black");
    fill("red");
    textSize(95);
    text("Game Over",200,400);
  }

  

  for(j=0; j <plinkos.length;j++){
    plinkos[j].display();
  }
  
  if(frameCount%50===0){
    particles.push(new Particles(random(250,450),10,10))
  
  }
  
  for(i=0; i <divisions.length;i++){
    divisions[i].display();
  }
  
  for(j=0; j <particles.length;j++){
    particles[j].display();
  }

  if(particle!=null){
    particle.display();
  if(particle.body.position.y>700){
      if(particle.body.position.x<300){
        score=score+500;
        particle=null;
        if(count>=5) gameState="END";
      }
  }
}
else if(particle.body.position.x < 600 && particle.body.position.x > 300){
  score=sccore+100;
  particle=null;
  if(count>=5) gameState="END";
}
else if(particle.body.position.x < 900 && particle.body.position.x > 600){
  score=score=+ 200;
  particle=null;
  if(count>=5) gameState="END";
}
  
 
  
 drawSprites();
 
}
function mousePressed(){
  if(gameState!="END"){
    count++;
    particle = new Particles(mouseX,50,10,10);
  }
}