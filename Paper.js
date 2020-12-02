class BaseClass {
    constructor(x, y,radius) {
      var options = {
          'isStatic':false,
        'density':1.2,
        'friction': 0.5,
        'restitution':0.3
      }
      this.body = Bodies.cirlce(x, y,radius,options);
        this.radius = radius
        
        World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      fill("pink");
      
  }


}
     