let rows = 12;
let columns = 16;
let attacks = [];
let walkLeft = false;//move stuff
let walkRight = false;//^
let walkUp = false;//^^
let walkDown = false;//^^^
let size = 40;
let tiles = []; // array for tiles
let party = [];
let enemyParty = [];
let battle;
let goblinImg,kingSlimeImg,chickenImg,skelboiImg,slimeImg;
let downImg,rightImg,leftImg,upImg;
let mainSprite,warSprite,SorcSprite;
let inCombat = false;
let chance = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,,2,2,2,2,2,2,2,2,,3,3,3,3,3,3,3,3,,4,4,4,4,4,4,4,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//hp,atk,def,spd,mp,sprites,name,lvl,abilities
let encounter = 0;
let moveCount = 0;
let moving = false;
let goblin = {
    hp:20,
    atk:5,
    def:5,
    spd:10,
    mp:0,
    sprites:goblinImg,
    name:"Goblin",
    lvl:1,
    abilities:[new Attack("Punch","Physical",20,0,5),
    poke = new Attack("Poke","Physical",5,0,15),
    new Attack("Chomp","Physical",10,0,10)]
    //name, type, uses, cost, power
}

let Skeleton = {
    hp:10,
    atk:15,
    def:0,
    spd:20,
    mp:0,
    sprites:skelboiImg,
    name:"Skeleton",
    lvl:1,
    abilities:[new Attack("Slam","Physical",20,0,5),
    new Attack("Stab","Physical",5,0,15)]
    //name, type, uses, cost, power
}

let Chicken = {
    hp:30,
    atk:5,
    def:10,
    spd:10,
    mp:0,
    sprites:chickenImg,
    name:"Chicken",
    lvl:1,
    abilities:[new Attack("Peck","Physical",20,0,10),
    new Attack("Neck Whip","Physical",5,0,15),
    new Attack("Tail Slap","Physical",10,0,20)]
    //name, type, uses, cost, power
}
let player;
let main;
let war;
let sorc;

function preload(){//loads images for use later
    //enemies
    goblinImg = loadImage("./assets/goblin.png");
    kingSlimeImg = loadImage("./assets/king-slime.png");
    chickenImg = loadImage("./assets/octo-cock.png");
    skelboiImg = loadImage("./assets/skelboi.png");
    slimeImg = loadImage("./assets/slime.png");
    //map sprites
    downImg = loadImage("./assets/down.png");
    rightImg = loadImage("./assets/right.png");
    leftImg = loadImage("./assets/left.png");
    upImg = loadImage("./assets/up.png");

    //Party Fight Sprites
    mainSprite = loadImage("./assets/Main.png");
    warSprite = loadImage("./assets/Warrior.png");
    SorcSprite = loadImage("./assets/Sorcerer.png");
    //map tiles
}

function setup(){
    let theCanvas = createCanvas(720,640);
    theCanvas.parent("screen"); // uncomment when have div name; id requires no "#"
    background(255);
    for (let j = 0; j < rows; j++) { //nested loop to create tiles
        for (let i = 0; i < columns; i++) {
        
            tiles.push(t = new Tile(i * size, j*size, size));
        }
    }//creates tiles
    player = new Player([downImg,rightImg,leftImg,upImg],0,240,320,size)
    main = new Character(30,10,10,15,10,mainSprite,"Main Character",0,1);
    war = new Character(40,5,15,10,5,warSprite,"Warrior",0,1);
    sorc = new Character(20,10,10,15,10,mainSprite,"Sorcerer",0,1);
    party.push(main);
    party.push(war);
    party.push(sorc);
}

function draw(){
    background(255);
    if(walkLeft){
        player.moveLeft();
        if(player.x == 0){
            return
        }
        else if(moveCount <40){
            player.x -= 1;
            moveCount++;
        }
        else{
            moveCount = 0;
            walkLeft = false;
            encounter = random(chance);
            checkEncounter();
        }
    }
    if(walkRight){
        player.moveRight();
        if(player.x == canvas.width){
            
            return
        }
        else if(moveCount <40){
            player.x += 1;
            moveCount++;
        }
        else{
            moveCount = 0;
            walkRight = false;
            encounter = random(chance);
            checkEncounter();
        }
    }
    if(walkUp){
        player.moveUp();
        if(player.y == 0){
            return
        }
        else if(moveCount <40){
            player.y -= 1;
            moveCount++;
        }
        else{
            moveCount = 0;
            walkUp = false;
            encounter = random(chance);
            checkEncounter();
        }
    }
    if(walkDown){
        player.moveDown();
        if(player.y == canvas.height){
            return
        }
        else if(moveCount <40){
            player.y += 1;
            moveCount++;
            console.log(moveCount);
        }
        else{
            moveCount = 0;
            walkDown = false;
            encounter = random(chance);
            checkEncounter();
            console.log(moveCount);
        }
    }
    player.displaySprite();
    // image(goblinImg,player.x,player.y,40,40);
}

function keyPressed(){
	if(keyCode === LEFT_ARROW || keyCode === 65){//move left
        walkLeft = true;
        
	}
	if(keyCode === RIGHT_ARROW || keyCode === 68){//move right
		walkRight = true;
	}
	if(keyCode === UP_ARROW || keyCode === 87){//move up
		walkUp = true;
	}
	if(keyCode === DOWN_ARROW || keyCode === 83){//move down
		walkDown = true;
	}
}

function checkEncounter(){
    if(encounter == 1){
        //goblin //hp,atk,def,spd,mp,sprites,name,lvl,abilities
        let gobbo1 = new Enemy(goblin.hp, goblin.atk,goblin.def,goblin.spd,goblin.mp,goblinImg,goblin.name + " A",1,goblin.abilities);
        let gobbo2 = new Enemy(goblin.hp, goblin.atk,goblin.def,goblin.spd,goblin.mp,goblinImg,goblin.name + " B",1,goblin.abilities);
        enemyParty[0] = gobbo1;
        enemyParty[1] = gobbo2;
        battle = new Battle(party,enemyParty);
        battle.initBattle();
    }
    else if(encounter == 2){
        //skele
    }
    else if(encounter == 3){
        //slime
    }
    else if(encounter == 4){
        //chimken
    }
    else if(encounter == 5){
        //kingslime
    }
    else{

    }
}