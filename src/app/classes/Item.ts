export class Item{
    id: number;
    imgUrl: string;
    name:string;
    quantity:string;
    buyed:boolean;
    select: boolean;
    constructor(id:number, imgUrl:string, name:string, quantity:string, buyed:boolean){
        this.id = id;
        this.imgUrl = imgUrl;
        this.name = name;
        this.quantity = quantity;
        this.buyed = buyed;
        this.select = false;
    }
}