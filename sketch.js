
var movingrect,fixedrect;
function setup()
{
  createCanvas(500,500)
  movingrect=createSprite(200,200,50,50);
  movingrect.shapeColor="green";
  movingrect.debug=true;
  fixedrect=createSprite(300,300,50,30)
  fixedrect.shapeColor="green";
  fixedrect.debug=true;
}
function draw()
{
  background(0);
  movingrect.x=mouseX;
  movingrect.y=mouseY;

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 && 
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2

    )
  {
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";

  }
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";

  }



drawSprites();
}