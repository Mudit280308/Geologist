class Gum {
    constructor(x, y) {
      var options = {
        'density':60,
        'friction':90,
        'restitution':0
      }
      this.body = Bodies.rectangle(x, y, 40, 5, options);
      this.width = 40;
      this.height = 5;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('pink');
      fill('pink');
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  