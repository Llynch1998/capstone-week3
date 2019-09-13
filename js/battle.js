class Battle{
    constructor(party, enemies){
        this.party = party;
        this.enemies = enemies;
        this.allLiving = [];
        this.turnOrder = [];
        this.livingCounter = 0;
    }

    init(){
        this.initLiving();
        this.initBattle();
    }

    initLiving(){
        this.livingCounter = this.party.length + this.enemies.length;
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
        this.turnOrder.push(this.allLiving[this.livingCounter]);
        this.livingCounter++;
        this.initRecursion();
        
        // for(let i = 0; i < this.allLiving.length; i++){
        //     if(i == 0){
        //         this.turnOrder.push(this.allLiving[0]);
        //     }
        //     else{
        //         for(let j = 0; j < this.turnOrder.length; j++){
        //             if(this.allLiving[i].spd >this.turnOrder[j].spd){
        //                 this.turnOrder.splice(j, 0, this.allLiving[i]);
        //             }
        //             else{
        //                 this.turnOrder.push(this.allLiving[i]);
        //             }
        //         }
        //     }
            
        // }
    }

    initRecursion(){
        for(let j = 0; j < this.turnOrder.length; j++){
            if(this.allLiving[this.livingCounter].spd >this.turnOrder[j].spd){
                this.turnOrder.splice(j, 0, this.allLiving[i]);
            }
            else{
                this.turnOrder.push(this.allLiving[this.livingCounter]);
            }
        }
        if(this.livingCounter < this.allLiving.length){
            this.initRecursion();
        }
        else{
            this.livingCounter = 0;
        }
    }
}