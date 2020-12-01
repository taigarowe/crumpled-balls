
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, dustbin, paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new DustBin(720, 390, 100, 10);
	paper = newPaper(100, 300, 10);
	ground = Bodies.rectangle(width / 2, 400 , width, 10,{
		isStatic: true
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  background("black");

  dustbin.display;
  paper.display;
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {
			x: 12,
			y: 13
		})
	}
}



