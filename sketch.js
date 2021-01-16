
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new Bob(475,210,60);
	bobObject2= new Bob(535,210,60);
	bobObject3= new Bob(595,210,60);
	bobObject4= new Bob(655,210,60);
	bobObject5= new Bob(715,210,60);

	roofObject= new Roof(600,10,400,25);
	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);

	Engine.run(engine)
}


function draw() {
  background(0);
  rectMode(CENTER);
 
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();

  drawSprites();
 
}


