const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var bob1,sling;

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,300,100,20,ground_options);
    World.add(world,ground);

    bob1=new Bob(400,500,50)
    box2= new Bob(450,400,50);
    box3= new Bob(500,400,50);
    box4= new Bob(550,400,50);
    box5= new Bob(600,400,50);
   



    sling= new SlingShot(bob1.body,ground.body);


}

function draw(){
    background(225);
    Engine.update(engine);
    rectMode(CENTER);
    fill ("red")
    rect(ground.position.x,ground.position.y,400,20);
    bob1.display();
    box2.display();
box3.display();
box4.display();
box5.display();
}



