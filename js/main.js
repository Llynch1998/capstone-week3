let rows = 18;
let columns = 16;
let attacks = [];
let punch = new Attack("Punch","Physical",100,0,5);
attacks.push(punch);
let size = 20;
let tiles = []; // array for tiles

function setup(){
    createCanvas(720,640);
    for (let j = 0; j < rows; j++) { //nested loop to create tiles
        for (let i = 0; i < columns; i++) {
        
            tiles.push(t = new Tile(i * size, j*size, size));
        }
    }//creates tiles

    let testC = new Character(50,5,3,10,10,0,"Wyatt",0,1);
    let testC2 = new Character(50,5,3,30,10,0,"Speed",0,1)
    let testE = new Enemy(10,1,1,20,10,0,"bat",1,attacks);
    let testE2 = new Enemy(5,2,3,40,10,0,"goblin",1,attacks);
    let testP = [];
    testP.push(testC);
    let testEG = [];
    testEG.push(testE);
    testEG.push(testE2);
    testP.push(testC2);
    let battle = new Battle(testP,testEG);
    battle.init();
}

function draw(){

}
