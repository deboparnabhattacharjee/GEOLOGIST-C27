class Iron{
  constructor(x,y,width,height){
    var option = {
      'restitution' : 0.5,
      'friction': 1.0,
      'isStatic': false,
      'density': 5,
      'mass': 5
    }

    this.body = Bodies.rectangle(x,y,width,height,option);
    World.add(world,this.body);
        
    this.width = width;
    this.height = height;
  }

  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke("brown");
    fill("brown");
    rect(0,0,this.width,this.height);
    pop();     
  }
}