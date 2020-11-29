var bottomRect,leftRect,rightRect;
var ground;
var paper,paperObject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	leftRect = new Box(800,600,10,100);
	rightRect = new Box(1000,600,10,100);
	bottomRect = new Box(900,650,200,10);

	paper = new Paper(100,100,20);
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  leftRect.display();
  rightRect.display();
  bottomRect.display();
  paper.display();



  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){

        Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-2});

	}
}



