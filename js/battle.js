class Battle{
    constructor(party, enemies){
        this.party = party;
        this.enemies = enemies;
        this.allLiving = [];
        this.turnOrder = [];
        this.participants;
        this.turnCounter = 0;
    }

    init(){
        this.initLiving();
        this.initBattle();
    }

    initLiving(){
        if(this.party.length>this.enemies.length){
            for(let i = 0; i < this.party.length; i++){
                this.allLiving.push(this.party[i]);
                if(i < this.enemies.length){
                    this.allLiving.push(this.enemies[i])
                }
            }
        }
        else if(this.party.length<this.enemies.length){
            for(let i = 0; i < this.enemies.length; i++){
                this.allLiving.push(this.party[i]);
                if(i < this.party.length){
                    this.allLiving.push(this.enemies[i])
                }
            }
        }
        else{
            for(let i = 0; i < this.enemies.length; i++){
                this.allLiving.push(this.party[i]);
                this.allLiving.push(this.enemies[i]);
            }
        }
        this.initBattle();
    }
    initBattle(){
        this.turnOrder = this.allLiving;
        this.turnOrder.sort(function(a,b){return b.spd - a.spd});//sorts the array with anonymous function by the speed (spd) of the obj
        if(this.turnOrder[this.turnCounter] instanceof Enemy){
            this.encounter(this.turnOrder[this.turnCounter].abilities[Math.floor(Math.random() * this.turnOrder[this.turnCounter].abilities.length)],this.party[Math.floor(Math.random() * this.party.length)])
        }
    }

    encounter(attack, target){//this will test possible combat with more than 2 entities;
        if(this.turnOrder[this.turnCounter] instanceof Character){
            console.log("Character");
            console.log(target.hp);
            target.hp -= attack.power;
            console.log(target.hp);
            this.turnCounter++;
            if(this.turnCounter == this.turnOrder.length){
                this.turnCounter = 0;
            }
        }
        else if(this.turnOrder[this.turnCounter] instanceof Enemy){
            console.log("Enemy");
            console.log(target.hp);
            target.hp -= attack.power;
            console.log(target.hp);
            this.turnCounter++;
            if(this.turnCounter == this.turnOrder.length){
                this.turnCounter = 0;
            }
        }
        if(this.turnOrder[this.turnCounter] instanceof Enemy){
            this.encounter(this.turnOrder[this.turnCounter].abilities[Math.floor(Math.random() * this.turnOrder[this.turnCounter].abilities.length)],this.party[Math.floor(Math.random() * this.party.length)]);
        }
        else{
            
        }
    }
}