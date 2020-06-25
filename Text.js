class Text{
    constructor(x,y,img){
        this.x=x
        this.y=y
        this.text=createSprite(x,y,50,50);
        this.text.addImage(img);
        this.text.scale=0.2;

    }

    display(str){
        this.text.depth=3
        if(keyDown("space")){
            text(str,this.x,this.y);
            if(keyDown("space")){
                gamestate=2;
            }

        }

    }
    remove(){
        this.text.destroy();
    }
}


