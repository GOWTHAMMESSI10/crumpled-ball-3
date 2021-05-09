
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var paper, ground , dustbin;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(width/2,670,width,20);
  dustbin = new Dustbin(1200,650);
  paper = new Paper(400,450,40);
  launcher = new Launcher(paper.body,{x:400, y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);


  ground.display();
  dustbin.display();
  paper.display();
  launcher.display();

  
 
}

function keyPressed() {
	if(keyCode===32) {
		Matter.Body.setPosition(paper.body,{x:400,y:450})
    launcher.attach(paper.body);
	}
}

function mouseDragged() {
  Matter.Body.setPosition(paper.body,{x:mouseX, y:mouseY})
}

function mouseReleased() {
  launcher.fly();
}



