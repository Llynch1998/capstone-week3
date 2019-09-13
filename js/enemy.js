class Enemy{
    constructor(hp,atk,def,spd,mp,sprites,name,lvl){
        this.name = name;
        this.lvl;
        this.hp = hp;
        this.maxHp = hp;
        this.atk = atk;
        this.def = def;
        this.spd = spd;
        this.mp = mp;
        this.maxMp = mp;
        this.sprites = sprites;//this is to store battleSprites
        this.isAlive = true;
        this.abilities = [];
    }
    
    giveXP(){
        
    }
}