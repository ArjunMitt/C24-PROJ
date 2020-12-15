class Ground {
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        function setup(){
            Matter.Bodies.circle(x,y,radius,[options],[maxSides])
            this.body=Bodies.rectangle(x,y,radius,options,[setStatic])
            this.width=width;
            this.height=height;
            this.radius=radius;
        }
    }

    }
    function keyPressed(){
    if (keyCode===UP_ARROW){

        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    }
    }
