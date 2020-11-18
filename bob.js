class Bob{  
      constructor(x,y,r){
var option={
    isStatic:true,
    friction:0.5,
    restitution:0.3,
    density:1.2,
   
}

this.body=Bodies.circle(x,y,r,option);
this.x=x;
this.y=y;
this.r=r/2



World.add(world,this.body);
    }
    movement(){
        
    }
    display(){
var bobpos=this.body.position;
push();
translate(bobpos.x,bobpos.y);
ellipseMode(CENTER);
fill(255,0,255);
ellipse(0,0,this.r,this.r);
pop();
    }
}