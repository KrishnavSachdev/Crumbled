
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, paper;
var test;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,700,20);

	dustbin = new Dust(200,200,70,70);

	test = createSprite(200, 200, 30, 30);
	//box2 = new Dust(700,320,70,70);
	//box3 = new Dust(700,320,70,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  //box2.display();
  //box3.display();

  test.display();
  
  drawSprites();
 
}



