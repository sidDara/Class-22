
const ENGINE = Matter.Engine;
const WORLD = Matter.World;
const BODIES = Matter.Bodies;

var myEngine,myWorld,ground;
var ball;

function setup() {
  createCanvas(600,600);

  myEngine = ENGINE.create(); 
  myWorld = myEngine.world;

  var options = {
    isStatic: true
  }

  ground= BODIES.rectangle(300,590,600,10,options);
  WORLD.add(myWorld,ground);

  var ballOptions = {
    restitution: 1
  }

  ball = BODIES.circle(200,200,10, ballOptions);
  WORLD.add(myWorld, ball);

  console.log(ground);
  
}

function draw() {
  background(0);  
  ENGINE.update(myEngine);
  rectMode(CENTER);
  rect(300,300,50,50);
  rect(ground.position.x, ground.position.y,600,10);

  ellipse(ball.position.x, ball.position.y, 20,20);
}