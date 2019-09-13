class Attack{
    constructor(name, type, uses, cost, power){
        this.name = name;
        this.type = type;
        this.uses = uses;
        this.maxUses = uses;
        this.cost = cost;
        this.power = power;
    }

    
    use(user){
        if(this.type === "Physical" || this.type === "physical"){
            this.usePhysical(user);
        }
        else{
            this.useMagical(user);
        }
    }
    
    
    usePhysical(user){
        if(this.uses>0){    
            this.uses-=1;
            return this.power;
        }
        else{
            return "You're out of uses!";
        }
        
    }

    useMagical(user){
        if(user.mp > this.cost){
            user.mp -= this.cost;
            return this.power;
        }
        else{
            return "Not enough mana!";
        }
    }

}