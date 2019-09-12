class Battle{
    constructor(party, enemies){
        this.party = party;
        this.enemies = enemies;
        this.allLiving = [];
        this.turnOrder = [];
        
    }

    initBattle(){
        for(let i = 0; i < this.party.length; i++){
            this.allLiving.push(this.party[i]);
        }
        for(let i = 0; i < this.enemies; i++){
            this.allLiving.push(this.enemies[i]);
        }
        for(let i = 0; i < this.allLiving.length; i++){
            if(i == 0){
                this.turnOrder.push(this.allLiving[i]);
            }else{
                for(let j = 0; j < this.turnOrder.length; j++){
                    if(this.allLiving[i].spd >this.turnOrder[j].spd){
                        this.turnOrder.splice(j, 0, this.allLiving[i]);
                    }
                    else{
                        this.turnOrder.push(this.allLiving[i]);
                    }
                }
            }
            
        }
    }
}