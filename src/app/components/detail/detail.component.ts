import { Component, OnInit } from '@angular/core';
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
  id: number;
  constructor(private listService: MockListService, private route: Router, private router: ActivatedRoute) {
    this.router.params.subscribe(params => {//
      if (params['id'] != '' && params['id'] != null) {
        this.id = Number(params['id']);
        let lists: List[] = this.listService.getMock("mockedList");
        this.itemList = lists[this.id].itemList;
      }
    });
   }

  ngOnInit() {
    
  }

}