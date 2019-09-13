class Character{
    constructor(hp,atk,def,spd,mp,sprites,name,xp,lvl){
        this.name = name;
        this.lvl = lvl;
        this.xp = xp;
        this.reqXp = 30;
        this.hp = hp;
        this.maxHp = hp;
        this.mp = mp;
        this.maxMp = mp;
        this.atk = atk;
        this.def = def;
        this.spd =spd;
        this.sprites = sprites;//this is an array to store battleSprites
        this.abilities = [];
        this.isAlive = true;
    }

    levelUp(){
        if(this.xp>=this.reqXp){//checks if the threshold for xp is met
            this.xp-=this.reqXp;//adds overflow xp to next xp goal
            this.reqXp = this.reqXp * 1.3;//increases xp req
            this.lvl += 1;//Level Up!
            this.hp += 5;
            this.mp += 1;
            this.atk += Math.floor(Math.random() * 4) + 1;
            this.def += Math.floor(Math.random() * 10) + 1;
            this.spd += Math.floor(Math.random() * 10) + 1;
            if(this.xp >= this.reqXp){//in case the xp is still higher than req
                this.levelUp();//this is to control overfow in case of huge xp gain.
            }
        }
    }
}