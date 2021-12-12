const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, box1, box2, ground


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  var options_gr = {isStatic : true}

  box1 = new Box(200,300,50,50);
  box2 = new Box(200,100,50,100);
  console.log(box1)

  ground = Bodies.rectangle(10,350,800,40,options_gr)
  World.add(world,ground);
  console.log(ground)

}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  //rect(CENTER)
  fill("brown");
  rect(ground.position.x, ground.position.y, 500,40)
}