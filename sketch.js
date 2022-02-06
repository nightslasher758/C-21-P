
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

     
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(width/2, 670, width, 20);

	//Create the Bodies Here.

	var ball_options={
     isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2


	}

	ball = Bodies.circle(260, 100, 20, ball_options);
	World.add(world, ball);




	Engine.run(engine);
  
}


function draw() {

  background(0);

  ellipse(ball.position.x, ball.position.y, 20, 20);
 ground.display()  
  drawSprites();
 
}



