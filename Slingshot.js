class Slingshot{
    constructor(body1,point2){
        var options ={
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:0.05
        }
        this.pointb=point2
        this.slingshot = Matter.Constraint.create(options)
        World.add(world,this.slingshot)  
    }
    fly(){
        this.slingshot.bodyA=null;

    }
    display(){
        if(this.slingshot.bodyA){
            var point1=this.slingshot.bodyA.position
            var point2=this.pointb
            strokeWeight(3)
            line(point1.x,point1.y,point2.x,point2.y) 
        }
     }
}