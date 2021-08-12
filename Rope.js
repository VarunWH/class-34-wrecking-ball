class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.sling);
    }

    

    display(){
        //null check "to check whether we have bird in bodyA"
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("white")
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
       
    
    
}