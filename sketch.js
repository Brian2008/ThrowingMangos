
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree
var stone
var ground
var mango1,mango2,mango3,mango4,mango5
var boy

function preload()
{
  boy = loadImage("MangoProjectImage/boy.png");
}

function setup() {
  createCanvas(800, 800);
  
	engine = Engine.create();
	world = engine.world;
  tree = new Tree(600,500,50,50)
  //mango1 = new Mango()
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  drawSprites();
 
}



