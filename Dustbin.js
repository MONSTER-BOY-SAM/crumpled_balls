class Dustbin{

    constructor(x,y,width,height,angle){

        var o2 = {

            isStatic : true

        }

        this.width = width;
        this.height = height;
        this.angle = angle;
        this.body = Matter.Bodies.rectangle(x,y,width,height,o2);
        Matter.Body.setAngle(this.body,this.angle)
        World.add(world,this.body);

    }

    display(){

        fill("white");
        push();
        translate(this.body.position.x,
                  this.body.position.y);
        rotate(this.angle);
        rect(0,0,this.width,this.height);
        pop();

    }

}