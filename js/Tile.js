class Tile{
    constructor(x,y,size,type,imgArray){
        this.x = x;
        this.y = y;
        this.size = size;
        this.row = y/size
        this.column = x/size
    }
}