var retFixo, retMovendo;
function setup() {
  createCanvas(1200, 800);
  retFixo = createSprite(1000, 400, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(400, 400, 80, 30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;
  retFixo.velocityX = -3;
  retMovendo.velocityX = 3;
}
function draw() {
  background(0, 0, 0);
  if (retMovendo.x - retFixo.x < retFixo.width / 2 + retMovendo.width / 2 
    && retFixo.x - retMovendo.x < retFixo.width/2 + retMovendo.width/2
    && retMovendo.y - retFixo.y < retFixo.height/2 + retMovendo.height/2
    && retFixo.y - retMovendo.y < retFixo.height/2 + retMovendo.height/2) {
    retMovendo.shapeColor = "red";
    retFixo.shapeColor = "red";
    retFixo.velocityX *=-1;
    retMovendo.velocityX *=-1;
  } else {
    retMovendo.shapeColor = "green";
    retFixo.shapeColor = "green";
  }
  

  drawSprites();
}
