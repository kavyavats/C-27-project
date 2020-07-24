class box{
    constructor(x,y,width,height){

        var options={
            isStatic:true,

        }

        this.body=rectangle(x,y,width,height);
        this.width=width;
        this.height=height
        World.add(world,this.body)


    }

    display(){
        pos=this.body.position;

        rect(pos.x,pos.y,this.width,this.height);
        
    }
}