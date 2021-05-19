const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var sand;
var hammer, stone, rubber;
var iron;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;


	sand = new Sand(600,height,1200,20);
  hammer = new Hammer(200, 300, 200, 50);
  stone = new Stone(400, 320, 70, 70);
  rubber = new Rubber(300, 200, 70);
  iron = new Iron(520, 200, 70, 50);
	
	Engine.run(engine);
  
}


function draw() {
 
  background("skyblue");
  rectMode(CENTER);

  Engine.update(engine);	
  
  sand.display();
  hammer.display();
  stone.display();
  rubber.display();
  iron.display();

  drawSprites();
}


