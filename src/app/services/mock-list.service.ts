import { Injectable } from '@angular/core';
import { List } from '../classes/List';
import { Item } from '../classes/Item';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class MockListService {


  
  liste:List[];

  constructor() { 
    this.liste = this.getMock("mockedList");
  }

  deleteList(list: List) {
    let ind: number = this.getListIndex(list);
    this.liste.splice(ind,1);
  }

  getList(): List[]{
    return this.liste;
  }

  getListIndex(list:List): number{
    let index: number = 0;
    for(let lista of this.liste){

      if (lista.id == list.id){
        return index;
      }
      index++;
    }

    return null;
  }

  updateList(name: string, sigla: string, list: List): any {
    let index: number= this.getListIndex(list);
    this.liste[index].changeName(name);
    this.liste[index].changeSigla(sigla);

  }

  deleteItem(item:Item, list:List){
    let listIndex: number = this.getListIndex(list);
    let itemIndex: number = this.getItemIndex(item, listIndex);
    this.liste[listIndex].itemList.splice(itemIndex,1);
  }

  updateItem(name:string, quantity:string, item:Item, list:List){
    let listIndex: number = this.getListIndex(list);
    let itemIndex: number = this.getItemIndex(item, listIndex);
    this.liste[listIndex].itemList[itemIndex].name = name;
    this.liste[listIndex].itemList[itemIndex].quantity =  quantity;
  }

  insertItem(name: string, quantity:string, list:List){
    let listIndex: number = this.getListIndex(list);
    let newItem: Item = new Item(this.liste[listIndex].itemList.length, "", name, quantity, false);
    this.liste[listIndex].itemList[this.liste[listIndex].itemList.length] = newItem;
  }

  getItemIndex(item: Item, listIndex:number){
    let index: number = 0;
    let items: Item[] = this.liste[listIndex].itemList;
    for(let searchItem of items){
      if (item.id == searchItem.id){
        return index;
      } 
      index ++;
    }
    return null;
  }






  getMock(id: string): any {
    return this.serviceMap[id] ? this.serviceMap[id].mock : "";
  }

  getUrlService(id: string): any {
    
    return this.serviceMap[id] ? this.serviceMap[id].url : "";
  }

  serviceMap: { [key: string]: any } = {
    mockedList: { 
      mock: ListMock, 
      url: 'updateList' 
    }
  }
}

export const ListSpesa: Item[] = [
  new Item(1, "../../assets/image-profile.png", "pere", "100g", false),
  new Item(2, "../../assets/image-profile.png", "mele", "100g", true),
  new Item(3, "../../assets/image-profile.png", "pane", "1Kg", false),
  new Item(4, "../../assets/image-profile.png", "acqua", "6 bottiglie", false)
]

export const ListFarmacia: Item[] = [
  new Item(5, "../../assets/image-profile.png", "Macatussi", "200g", false),
  new Item(6, "../../assets/image-profile.png", "Tachipirina", "500g", true),
  new Item(7, "../../assets/image-profile.png", "Moment", "200g", false),
  new Item(4, "../../assets/image-profile.png", "acqua", "12 bottiglie", false)
]

export const ListCarne: Item[] = [
  new Item(8, "../../assets/image-profile.png", "Salsiccia", "2kg", false),
  new Item(10, "../../assets/image-profile.png", "Salamelle", "500grammi", false),
  new Item(9, "../../assets/image-profile.png", "Costata", "2Kg", false),
  new Item(11, "../../assets/image-profile.png", "Costine", "6Kg", true)
  
]

export const ListPesce: Item[] = [
  new Item(12, "../../assets/image-profile.png", "Seppia", "2kg", false),
  new Item(13, "../../assets/image-profile.png", "Polpo", "500grammi", false),
  new Item(14, "../../assets/image-profile.png", "Gamberi", "2Kg", false),
  new Item(15, "../../assets/image-profile.png", "Cozze", "6Kg", true)
  
]

export const ListFV: Item[] = [
  new Item(16, "../../assets/image-profile.png", "Salsiccia", "2kg", false),
  new Item(17, "../../assets/image-profile.png", "Salamelle", "500grammi", false),
  new Item(18, "../../assets/image-profile.png", "Costata", "2Kg", false),
  new Item(19, "../../assets/image-profile.png", "Costine", "6Kg", true)
  
]

export const ListMock: List[] =

  [
    new List(0, "Lista Spesa", "LS", sessionStorage.getItem('username'), ListSpesa),
    new List(1, "Lista Farmacia", "LF", sessionStorage.getItem('username'), ListFarmacia),
    new List(2, "Lista Carne", "LC", sessionStorage.getItem('username'), ListCarne),
    new List(3, "Lista Pesce", "LP", sessionStorage.getItem('username'), ListPesce),
    new List(4, "Frutta e Verdura", "FV", sessionStorage.getItem('username'), ListFV),
  ];
