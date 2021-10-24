const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var back;
var child1, child2, childWalk;

function preload() {
  back = loadImage("snow1.jpg")
childWalk=loadAnimation("Walk (1).png", "Walk (2).png", "Walk (3).png", "Walk (4).png", "Walk (5).png", "Walk (6).png", "Walk (7).png", "Walk (8).png", "Walk (9).png", "Walk (10).png" )
  }

function setup() {
  createCanvas(800,450);
 engine = Engine.create();
 world = engine.world;

  child1 = createSprite(200,300,5,5);
  child1.addAnimation("Walk", childWalk)
  child1.scale=0.35;

  snow1 = new Snow(100,200,10,10)
  snow2 = new Snow(300,300,10,10)
}



function draw() {
  background(back);  
 Engine.update(engine);
  snow1.display();
  snow2.display();

  drawSprites();
}