class Block{
    constructor(x,y,width,height){
        var options={
            restitution : 0.8
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.visibility=255;
    }
    display(){
        //console.log(this.body.speed);
        if(this.body.speed<3){
        var angle = this.body.angle; 
        var pos = this.body.position
       
        push ();
        translate (pos.x,pos.y);
        angleMode (RADIANS);
        rotate (angle); 

        strokeWeight (3);
        rectMode (CENTER);
        rect(0,0,this.width,this.height);
        pop ();
        }
        else {
            World.remove(world,this.body);
            push ();
            this.visibility=this.visibility-5;
           // tint (255, this.visibility);
           /* var angle = this.body.angle; 
            var pos = this.body.position
            
            translate (pos.x,pos.y);
            angleMode (RADIANS);
            rotate (angle); 

            strokeWeight (3);*/
            rectMode (CENTER);
          //  rect(0,0,this.width,this.height);
            
          //  rect(this.body.position.x,this.body.position.y,this.width,this.height);
            pop ();
        }
    }
}