class Player{
    constructor(mapSprites,characters,x,y,size){
        this.mapSprites = mapSprites;
        this.characters = characters;
        this.x = x;
        this.y = y;
        this.size = size;
        this.row = this.y/this.size
        this.column = this.x/this.size
        this.currentImage = this.mapSprites[0];
    }
    moveUp(){
		this.column -= 1;
		this.currentImage = this.mapSprites[3];
	}
	moveDown(){
		this.column += 1;
		this.currentImage = this.mapSprites[0];
	}
	moveRight(){
		this.row += 1;
        this.currentImage = this.mapSprites[1];
	}
	moveLeft(){
		this.row -= 1;
		this.currentImage = this.mapSprites[2];
    }
    position(){ // resets x and y based on column or row
		this.x = this.row *this.size;
		this.y = this.column * this.size;
    }
    displaySprite(){
		image(this.currentImage,this.x,this.y,this.size,this.size);
	}
}