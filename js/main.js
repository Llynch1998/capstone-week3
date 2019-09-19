let attacks = [];
let punch = new Attack("Punch","Physical",100,0,5);
attacks.push(punch);



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