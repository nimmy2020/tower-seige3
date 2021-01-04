class Ball{
    constructor(x,y){
        var options={
            restitution:0.8,
            

        }
        this.body=Bodies.rectangle(x,y,10,10,options);
         this.image=loadImage("polygon.png");
        World.add(world,this.body);

    }
    display(){
        push ();
        imageMode (CENTER);
        image (this.image,this.body.position.x,this.body.position.y,50,50);
        pop ();
    }
    
}