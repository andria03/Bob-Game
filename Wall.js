class Wall{
    constructor(x,y,width,height){
        this.wall=createSprite(x,y,width,height);
        this.wall.shapeColor="Orange";
       // this.wall.addImage(img);
        

    }

    remove(){
        this.wall.destroy();
    }
    
}

