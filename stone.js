class Stone {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':0,
          'friction':1,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 30, options);
      World.add(world, this.body);
      this.image = loadImage("MangoProjectImage/stone.png")
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("lime");
      ellipse(pos.x,pos.y,30,30);
      pop();
    }
  };