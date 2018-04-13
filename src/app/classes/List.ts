import { Item } from "./Item";

export class List{
    id: number;
    name: string;
    sigla: string;
    user:string;
    itemList: Item[];
    constructor(id: number, name: string, sigla: string, user:string,itemList:Item[]){
        this.id = id;
        this.name = name;
        this.sigla = sigla;
        this.user = user;
        this.itemList = itemList;
    }

    changeName(name: string){
        this.name = name;
    }
    changeSigla(sigla: string){
        this.sigla = sigla;
    }
}