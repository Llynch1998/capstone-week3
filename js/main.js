let rows = 12;
let columns = 16;
let attacks = [];

let size = 40;
let tiles = []; // array for tiles
let party = [];
let enemyParty = [];
let battle;
let goblinImg,kingSlimeImg,chickenImg,skelboiImg,slimeImg;
let downImg,rightImg,leftImg,upImg;

//hp,atk,def,spd,mp,sprites,name,lvl,abilities
// let goblin = {
//     hp:20,
//     atk:5,
//     def:5,
//     spd:10,
//     mp:0,
//     sprites:goblinImg,
//     name:"Goblin",
//     lvl:1,
//     abilities = [punch = new Attack("Punch","Physical",20,0,5),
//     poke = new Attack("Poke","Physical",5,0,15),
//     new Attack("Chomp","Physical",10,0,10)]
//     //name, type, uses, cost, power
// }

// let Skeleton = {
//     hp:10,
//     atk:15,
//     def:0,
//     spd:20,
//     mp:0,
//     sprites:skelboiImg,
//     name:"Skeleton",
//     lvl:1,
//     abilities = [new Attack("Slam","Physical",20,0,5),
//     new Attack("Stab","Physical",5,0,15)]
//     //name, type, uses, cost, power
// }

// let Chicken = {
//     hp:30,
//     atk:5,
//     def:10,
//     spd:10,
//     mp:0,
//     sprites:chickenImg,
//     name:"Chicken",
//     lvl:1,
//     abilities = [new Attack("Peck","Physical",20,0,10),
//     new Attack("Neck Whip","Physical",5,0,15),
//     new Attack("Tail Slap","Physical",10,0,20)]
//     //name, type, uses, cost, power
// }

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

    //Part Fight Sprites

    //map tiles
}

function setup(){
    let theCanvas = createCanvas(720,640);
    //theCanvas.parent(""); // uncomment when have div name; id requires no "#"
    for (let j = 0; j < rows; j++) { //nested loop to create tiles
        for (let i = 0; i < columns; i++) {
        
            tiles.push(t = new Tile(i * size, j*size, size));
        }
    }//creates tiles

}

function draw(){
    
}
