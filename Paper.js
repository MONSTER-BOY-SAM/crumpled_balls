class Paper{

    constructor(x,y,radius){

        var o1 = {

            restituition : 0.5,
            friction : 0.5,
            density : 1.2

        }

        this.body = Matter.Bodies.circle(x,y,radius,o1);
        World.add(world,this.body);

    }

    display(){

        fill("pink")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,
                this.body.position.y,
                20,20);

    }

}