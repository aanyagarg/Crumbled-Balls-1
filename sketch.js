
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper;
var ground;
var bottomRect,leftRect,rightRect;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=Matter.Bodies.circle(100,200,7);
	World.add(world, paper);

	ground = createSprite(400,height,800,50);

	bottomRect=createSprite(600,height-35,200,20);
	bottomRect.shapeColor="red";

	leftRect=createSprite(510,610,20,100);
	leftRect.shapeColor="red";

	rightRect=createSprite(690,610,20,100);
	rightRect.shapeColor="red";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});
    
  }
  drawSprites();
  
}



