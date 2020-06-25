class Bob{
    constructor(x,y,img){
        this.bob=createSprite(x,y,50,50);
        this.bob.addImage(img);
        this.bob.scale=0.05;
        this.bob.x=x;
        this.bob.y=y;

    }

    remove(){
        this.bob.destroy();
    }
    setpos(x,y){
       
        this.bob.x=x;
        this.bob.y=y;
    }

    move(){

       

    if(keyDown("up")){
        this.bob.position.y=this.bob.position.y-20
        
      
         
       // console.log(this.bob);
     }
  
    
  if(keyDown("down")){
    this.bob.position.y=this.bob.position.y+20
    }
    
  if(keyDown("right")){
    this.bob.position.x=this.bob.position.x+20
     
     }
    
  if(keyDown("left")){
    this.bob.position.x=this.bob.position.x-20
    

    }
    }
}


