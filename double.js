const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

function setup(){
createCanvas(400,400);

engine = Engine.create();
world = engine.world;


var ball_options = {
restitution : 3,
frictionAir : 0.02
}

var ground_options = {
isStatic : true
}

ball = Bodies.circle(100,10,30,ball_options);
World.add(ball,world);

ground = Bodies.rectangle(200,390,400,20,ground_options);
World.add(ground,world);

rectMode(CENTER);
ellipseMode(RADIUS);

}



function draw(){
background(50);

Engine.update(engine);

ellipse(ball.position.x, ball.position.y,20);
rect(groung.position.x, ground.position.y,400,20);



}