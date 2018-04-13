import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Item } from '../../classes/Item';
import { MockListService } from '../../services/mock-list.service';
import { List } from '../../classes/List';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  itemList: Item[];
  list: List;
  id: number;
  selectedItem: Item;

  @ViewChild('options') options: ElementRef;
  constructor(private listService: MockListService, private route: Router, private router: ActivatedRoute) {
    this.router.params.subscribe(params => {//
      if (params['id'] != '' && params['id'] != null) {
        this.id = Number(params['id']);
        let lists: List[] = this.listService.getList();
        this.list = lists[this.id];
        this.itemList = lists[this.id].itemList;
      }
    });
   }

   showOptions(item: Item){
    item.select = true;
   }

   setItem(item: Item){
    this.selectedItem = item;
   }

   deleteItem(){
     let item: Item = this.selectedItem;
      this.listService.deleteItem(item,this.list);
      this.itemList = this.listService.getList()[this.id].itemList;
   }

   save(name: string, quantity: string) {
     this.listService.updateItem(name, quantity, this.selectedItem, this.list);
     this.itemList = this.listService.getList()[this.id].itemList;
   }

   insertItem(name: string, quantity: string){
     this.listService.insertItem(name, quantity, this.list);
     this.itemList = this.listService.getList()[this.id].itemList;
   }

  ngOnInit() {
    
  }


}
