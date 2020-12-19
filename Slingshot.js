class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(10);
            stroke(48,22,8);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x - 50, pointB.y - 10);
            image(this.sling3, pointA.x - 20, pointA.y - 10, 10,15 );
            pop()
        }
    image(this.sling1,180,20)
            image(this.sling2,150,20)
            
}
    
} 