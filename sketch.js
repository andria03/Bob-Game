var bob,poorhouse,text,poorhouse_img,bob_img,text_img,house,house_img;
var housearray=[];

var gamestate=2

var ph1,ph2,ph3,ph4,ph5,ph6
var poorhouse_group

var text1,text2,text3

var wall1,wall2,wall3,wall4,wall5,top,bottom,right,left
var Richhouse_img

var flag=0

var points=0

var bodyguard;

var houseaddflag=0;





function preload(){
  poorhouse_img=loadImage("Poorhouse.png");
  bob_img=loadImage("Bob.png");
  text_img=loadImage("Text.png")
  house_img=loadImage("House.png");
  Richhouse_img=loadImage("RichHouse.png");


}
function setup(){
  createCanvas(800,800)
  



  ph1= new Poorhouse(200,200,poorhouse_img)
  ph2= new Poorhouse(200,400,poorhouse_img)
  ph3= new Poorhouse(200,600,poorhouse_img)

  ph4= new Poorhouse(600,200,poorhouse_img)
  ph5= new Poorhouse(600,400,poorhouse_img)
  ph6= new Poorhouse(600,600,poorhouse_img)

  
  
 

  bob= new Bob(400,400,bob_img);

  text1= new Text(500,300,text_img);
  
  
  bodyguard=createSprite(400,700,10,30);

  bodyguard.velocityY=8
  bodyguard.velocityX=8
 
housegroup=new Group() ;




  
}


function draw(){
background(247,247,247);


if(gamestate===1){
  text1.display("OK");
}




if(gamestate===2){
 ph1.remove();
 ph2.remove();
 ph3.remove();
 ph4.remove();
 ph5.remove();
 ph6.remove();
 
 text1.remove();

 //console.log("x="+mouseX)
 //console.log("y="+mouseY)

 

 top1= new Wall(400,10,800,20);

 bottom= new Wall(400,790,800,20);

 left1= new Wall(10,170,20,350);

 left2=new Wall(10,630,20,350);

 right1= new Wall(790,170,20,350);
 right2= new Wall(790,630,20,350);

if(bodyguard.isTouching(bottom.wall)){
 bodyguard.bounceOff(bottom.wall);
 
}

if(bodyguard.isTouching(top1.wall)){
  bodyguard.bounceOff(top1.wall);
  
 }


 if(bodyguard.isTouching(left1.wall)){
  bodyguard.bounceOff(left1.wall);
  
 }


 if(bodyguard.isTouching(left2.wall)){
  bodyguard.bounceOff(left2.wall);
  
 }


 if(bodyguard.isTouching(right1.wall)){
  bodyguard.bounceOff(right1.wall);
  
 }


 if(bodyguard.isTouching(right2.wall)){
  bodyguard.bounceOff(right2.wall);
  
 }
 




if(flag===0){
  bob.setpos(400,400);
  flag=1;
}



var i=8
if(houseaddflag!==1){
  for(var x=50;x<=750;x=x+100){
    //console.log("working")
    for(var y=50;y<=750;y=y+100){
      if(housearray[i]=== undefined){
          housearray[i]={};
      }
      if(y===x){
        
        housearray[i]=new RichHouse(x,y,Richhouse_img);
       
       // console.log(housearray[i].RichHouse);
       // console.log((housearray[i].RichHouse).type);
        //housegroup.add(housearray[i].RichHouse);
        
      }
      else{
        housearray[i]=new House(x,y,house_img);
       // housegroup.add(housearray[i].house)
      }
    
    i++
      
    }
    houseaddflag=1;
    
  }
}


for(i=8;i<housearray.length;i++)
{
  
  if(housearray[i].house){
    if(bob.bob.isTouching(housearray[i].house)){
    //  console.log(housearray[i].house);
      points = points+1;
      console.log(points)
      
      housearray[i].house.remove();
      housearray[i].house=null;
    }
    
  }
  else if(housearray[i].RichHouse){
    if(bob.bob.isTouching(housearray[i].RichHouse)){
      //  console.log(housearray[i].house);
        points = points+10;
        console.log(points)
        housearray[i].RichHouse.remove();
        housearray[i].RichHouse=null;
      }
  }
  
  

}



bob.move();

if(bob.bob.x>800){
  gamestate=3
  console.log(gamestate);
}



if(gamestate===3){

 
console.log(housearray.length)
  for(i=9;i<housearray.length;i++)  
{
 console.log(housearray[i]);

 housearray[i].House.lifetime=0;

    
  
  console.log("h");
}


housearray=[];
//console.log(housearray)
  
 
}

  

 


  
 

}

drawSprites();




}