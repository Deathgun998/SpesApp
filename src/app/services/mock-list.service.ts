import { Injectable } from '@angular/core';
import { List } from '../classes/List';

@Injectable()
export class MockListService {

  
  lists: List[] = [
    new List("Lista capodanno", "LC"),
    new List("Lista farmacia", "FA"),
    new List("Carne", "CA"),
    new List("Pesce", "PE"),
    new List("Frutta e Verdura", "FV")
  ];
  constructor() { 

  }

  getLists(): List[]{
    return this.lists;
  }

  deleteList(list: List) {
    //remove
  }

}
