const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,d1,d2,d3,ground;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,400,20);
	ground = new Ground(400,500,800,10);
	d1 = new Dustbin(500,460,10,50);
	d2 = new Dustbin(611,460,10,50);
	d3 = new Dustbin(555,490,100,10);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  Engine.update(engine);
 
	paper.display();
	ground.display();
	d1.display();
	d2.display();
	d3.display();

	if(keyDown ("UP")){

		Matter.Body.applyForce(paper.body, paper.body.position,{

			x: 20,
			y : -20

		});

	}

}



