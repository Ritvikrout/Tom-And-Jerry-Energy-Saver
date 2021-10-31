var bg, wallImg, applianceImg;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, 
wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wallsGroup;
var appliancesGroup;
var jerry, tom;
var score = 0;
var jerryImg, tomImg, gameImg;
var end, gameImage;
var gameState = "play";


function preload() {
  bg = loadImage("images/background.jpg");
  wallImg = loadImage("images/wall.jpg");
  applianceImg = loadImage("images/appliance.png")
  jerryImg = loadImage("images/jerry.png")
  tomImg = loadImage("images/tom.png")
  gameImg = loadImage("images/gameName.jpg")
}

function setup() {
  createCanvas(1000,1000);

  wallsGroup = new Group();
  appliancesGroup = new Group();

  wall1 = createSprite(390, 165, 6, 70);
  wall1.visible = false
  wallsGroup.add(wall1);

  wall2 = createSprite(472, 165, 6, 60);
  wall2.visible = false
  wallsGroup.add(wall2);

  wall3 = createSprite(463, 290, 155, 10);
  wall3.visible = false
  wallsGroup.add(wall3);

  wall4 = createSprite(290, 376, 245, 6);
  wall4.visible = false
  wallsGroup.add(wall4);

  wall5 = createSprite(170, 350, 10, 430);
  wall5.shapeColor = "brown";
  wall5.visible = false
  wallsGroup.add(wall5);

  wall6 = createSprite(774, 450, 325, 6);
  wall6.shapeColor = "brown";
  wall6.visible = false
  wallsGroup.add(wall6);

  wall7 = createSprite(542, 348, 150, 6);
  wall7.visible = false
  wallsGroup.add(wall7);

  wall8 = createSprite(475, 828, 825, 6);
  wall8.visible = false
  wallsGroup.add(wall8);

  wall9 = createSprite(463, 290, 155, 10);
  wall9.visible = false
  wallsGroup.add(wall9);

  wall10 = createSprite(550, 130, 750, 6);
  wall10.visible = false
  wallsGroup.add(wall10);

  wall11 = createSprite(100, 290, 155, 6);
  wall11.visible = false
  wallsGroup.add(wall11);

  wall12 = createSprite(408, 410, 6, 80);
  wall12.visible = false
  wallsGroup.add(wall12);

  wall13 = createSprite(60, 700, 6, 270);
  wall13.visible = false
  wallsGroup.add(wall13);

  wall14 = createSprite(50, 430, 10, 270);
  wall14.visible = false
  wallsGroup.add(wall14);

  wall15 = createSprite(850, 502, 10, 100);
  wall15.visible = false
  wallsGroup.add(wall15);

  wall16 = createSprite(935, 290, 6, 320);
  wall16.visible = false
  wallsGroup.add(wall16);

  wall17 = createSprite(935, 650, 6, 200);
  wall17.visible = false
  wallsGroup.add(wall17);

  wall18 = createSprite(790, 825, 200, 6);
  wall18.visible = false
  wallsGroup.add(wall18);

  wall19 = createSprite(887, 800, 6, 100);
  wall19.visible = false
  wallsGroup.add(wall19);

  wall20 = createSprite(907, 750, 60, 6);
  wall20.visible = false
  wallsGroup.add(wall20);

  wall21 = createSprite(850, 555, 200, 6);
  wall21.visible = false
  wallsGroup.add(wall21);

  jerry = createSprite(80, 500, 10, 10)
  jerry.addImage("jerryImage", jerryImg)
  jerry.scale = 0.15

  tom = createSprite(200, 200, 29, 20);
  tom.addImage("tomImage", tomImg)
  tom.scale = 0.2
  tom.velocityX = random(-3, 3);
  tom.velocityY = random(-4, 4);


  end = createSprite(845, 500, 10, 90);
  end.visible = false;

  gameImage = createSprite(520, 525, 10, 10);
  gameImage.addImage("gameImage", gameImg);

  appliance1  = new Appliance(500, 500, 10, 10)
  appliance2  = new Appliance(450, 374, 10, 10)
  appliance3  = new Appliance(720, 749, 10, 10)
  appliance4  = new Appliance(264, 536, 10, 10)
  appliance5  = new Appliance(870, 586, 10, 10)
  appliance6  = new Appliance(763, 423, 10, 10)
  appliance7  = new Appliance(590, 300, 10, 10)
  appliance8  = new Appliance(246, 678, 10, 10)
  
}

function draw() {
  background(bg);
  textSize(30)

  text("You Saved " + score + "W", 100, 100)
  //console.log(frameCount)
  
  tom.bounceOff(wallsGroup)
  if (gameState === "play") {

    gameImage.visible = false;

    if (frameCount % 10 === 0 && score !== 0) {
      score -= 1
    }

    if(keyIsDown(UP_ARROW)) {
    jerry.y -= 2
  }

  if(keyIsDown(DOWN_ARROW)) {
    jerry.y += 2
  }

  if(keyIsDown(LEFT_ARROW)) {
    jerry.x -= 2
  }

  if(keyIsDown(RIGHT_ARROW)) {
    jerry.x += 2
  }

  if(jerry.isTouching(wallsGroup)) {
     jerry.bounceOff(wallsGroup)
  }

  if(jerry.isTouching(appliancesGroup)) {
    jerry.overlap(appliancesGroup, function(collector, collected) {
      score += 100;
      collected.remove();
    });
  }

  if (tom.isTouching(jerry)) {
    gameState = "caught";
  }

  if (jerry.isTouching(end)) {
    gameState = "end"
  }

}

  else if (gameState === "caught") {

    tom.velocityX = 0;
    tom.velocityY = 0;

    fill("red")
    text("Oops, Tom caught you", 400, 500);
  }

  else if (gameState === "end") {
    fill("lime")
    text("Yay!! you won in", 400, 400);
    text("Energy Saver", 437, 675);

    tom.velocityX = 0;
    tom.velocityY = 0;
    console.log(1);
    gameImage.visible = true;

    /*if (mousePressedOver(gameImage)) {
      jerry.x = 80;
      jerry.y = 500
      gamestate = "play";
      tom.velocityX = random(-3, 3);
      tom.velocityY = random(-4, 4);
      score = 0

  }*/
  }

  

  

  drawSprites();
}