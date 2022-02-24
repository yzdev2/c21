const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;




var button_1
var button_2
var ball
var ground;
var left;
var right;
var top_wall;
var ball_options={
  restitution:0.7

}



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(400,390,800,20);
  right = new Ground(790,350,20,100);
  left = new Ground(600,350,20,100);

 ball = Bodies.circle(150,50,25,ball_options)
 World.add(world,ball)
 


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,25)
  Engine.update(engine);
}



function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:0.09,y:-0.09})
  }
}