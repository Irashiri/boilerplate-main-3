

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;// The value engine can't be changed
let world;// The value world can't be changed
var ball;
var ground;
var wall;
var wedge;
var angle;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();// you have to create the engine, not just take it from Matter.js
 world = engine.world; // the world is inside of the engine

var ball_options = {
restitution : 1, //How high or low it bounces ,the bigger the number the more it bounces
frictionAir : 0.01 //How slow or fast it falls ,the bigger the number the slower it falls

}

var ground_options = {
isStatic : true //Static = not not moving

};

var wedge_options = {
  isStatic : true
}

ball = Bodies.circle(100,10,30,ball_options);
World.add(world,ball);

ground = Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,ground);

wall = Bodies.rectangle(300,150,50,10,ground_options);
World.add(world,wall);

wedge = Bodies.rectangle(100,150,70,20,wedge_options);
World.add(world,wedge);

rectMode(CENTER);//  you measure the x and y or the rectangle from the center
ellipseMode(RADIUS);// you measure the x and y of the circle in the middle

}


function draw() 
{
  background(51);
  Engine.update(engine);// like arrays you have to reset the engine again

  // Matter.Body.rotate(wedge,angle);
  // push();
  // translate(wedge.position.x,wedge.position.y);
  // rotate(angle);
  // rect(0,0,70,20);
  // pop();
  // angle += 0.1; 

// Matter.Body.rotate(wedge,angle);
// push();
// translate(wedge.position.x,wedge.position.y);
// rotate(angle);
// rect(0,0,70,20);
// pop(); 
// angle = angle + 0.1;

  ellipse(ball.position.x, ball.position.y,20);// ellipse = circle
  rect(ground.position.x,ground.position.y,400,20);// rect = rectangle
  rect(wall.position.x,wall.position.y,50,10);
  rect(wedge.position.x,wedge.position.y,70,20);
}

