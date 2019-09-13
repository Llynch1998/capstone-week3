class Battle{
    constructor(party, enemies){
        this.party = party;
        this.enemies = enemies;
        this.allLiving = [];
        this.turnOrder = [];
        this.participants;
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
    }

    encounter(){//this will test possible combat with more than 2 entities;

    }
}