class Ground
{
    constructor(x, y, w, h) {

     this.x = x;
     this.y = y;
     this.w = w;
     this.h = h;
     
     var ground_options={
      isStatic:true

     }
     
     this.body = Bodies.rectangle(x,y,w,h, ground_options)
    World.add(World, this.body)

    

    }


display(){

push()
rectMode(CENTER)
fill("blue")
stroke = 0
rect(this.body.position.x, this.body.position.y, this.body.position.w, this.body.position.h);
pop()



}
}
