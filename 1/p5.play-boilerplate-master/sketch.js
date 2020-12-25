const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true,
        density:1.2,
      friction:1.2
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var options ={
      restitution: 0.5,
      density:1.2,
      friction:1.2
  }

    box1=Bodies.rectangle(300,300,50,150,options);
    World.add(world,box1);


    var ball_options ={
      restitution: 0.5
  }

    ball = Bodies.circle(100,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    fill("green")
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
  fill("brown")
    rectMode(CENTER);
    rect(box1.position.x,box1.position.y,50,150);
  var pos=ball.position;
  pos.x=mouseX;
  pos.y=mouseY;
  fill("yellow")
    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, 20, 20);
}
