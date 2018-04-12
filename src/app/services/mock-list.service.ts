import { Injectable } from '@angular/core';
import { List } from '../classes/List';
import { Item } from '../classes/Item';

@Injectable()
export class MockListService {

  constructor() { 

  }

  deleteList(list: List) {
    //remove
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
    new List(1, "Lista Spesa", "LS", sessionStorage.getItem('username'), ListSpesa),
    new List(2, "Lista Farmacia", "LF", sessionStorage.getItem('username'), ListFarmacia),
    new List(3, "Lista Carne", "LC", sessionStorage.getItem('username'), ListCarne),
    new List(4, "Lista Pesce", "LP", sessionStorage.getItem('username'), ListPesce),
    new List(5, "Frutta e Verdura", "FV", sessionStorage.getItem('username'), ListFV),
  ];
