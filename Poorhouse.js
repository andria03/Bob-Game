class Poorhouse{
    constructor(x,y,img){
        this.poorhouse=createSprite(x,y,50,50);
        this.poorhouse.addImage(img);
        this.poorhouse.scale=0.2;

    }

    remove(){
        this.poorhouse.destroy();
    }
}


