class Ground {

    constructor(x,y,width,height){

        var option = {

            isStatic : true

        }

        this.width = width;
        this.height = height;
        this.body = Matter.Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);

    }

    display(){
    
        fill("yellow")
        rectMode(CENTER);
        rect(this.body.position.x,
            this.body.position.y,
            this.width,this.height);
        

    }

}