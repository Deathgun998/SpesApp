import { Component, OnInit } from '@angular/core';
import { List } from '../../classes/List';
import { MockListService } from '../../services/mock-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privatearea',
  templateUrl: './privatearea.component.html',
  styleUrls: ['./privatearea.component.css']
})
export class PrivateareaComponent implements OnInit {

  nOfListe: number;
  liste: List[];
  selectedList: List;
  constructor(private listService: MockListService, private router:Router) {
    
   }

  ngOnInit() {
    this.liste = this.listService.getMock("mockedList");
    
    console.log(this.liste[0].name);
    this.nOfListe=this.liste.length;
  }

  setSelectedList(list: List) {
    this.selectedList = list;
  }

  save(name: string, sigla: string){

    this.listService.deleteList(this.liste[0]);
    this.liste = this.listService.getMock("mockedList");
    alert("Modifiche salvate!");
  }

  delete(list: List){
    this.listService.deleteList(list);
    this.liste = this.listService.getMock("mockedList");
  }
  NavigateToDetail(list : List){
    this.router.navigate(["/dettaglio/"+list.id]);
  }

  alertTest(){
    alert("Test");
  }

}