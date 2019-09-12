class Battle{
    constructor(party, enemies){
        this.pary = party;
        this.enemies = enemies;
        this.allLiving = [];
        this.turnOrder = [];
        
    }

    initBattle(){
        for(let i = 0; i < this.party.length; i++){
            this.allLiving.push(party[i]);
        }
        for(let i = 0; i < this.enemies; i++){
            this.allLiving.push(this.enemies[i]);
        }
        for(let i = 0; i < this.allLiving.length; i++){
            if(i == 0){
                this.turnOrder.push(this.allLiving[i]);
            }
            for(let j = 0; j < this.turnOrder.length; j++){
                //this will assign based on speed
            }
    }
}