let testC = new Character(50,5,3,10,10,0,"Wyatt",0,1);
let testE = new Enemy(10,1,1,20,10,0,"bat",1);

let testP = [];
testP.push(testC);
let testEG = [];
testEG.push(testE);

let battle = new Battle(testP,testEG);
battle.init();