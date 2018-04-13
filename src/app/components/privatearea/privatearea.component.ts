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
    this.liste = this.listService.getList();
    
    console.log(this.liste[0].name);
    this.nOfListe=this.liste.length;
  }

  setSelectedList(list: List) {
    this.selectedList = list;
  }

  save(name: string, sigla: string){
    this.listService.updateList(name, sigla, this.selectedList);
    this.liste = this.listService.getList();
    alert("Modifiche salvate!");
  }

  delete(){
    this.listService.deleteList(this.selectedList);
    this.liste = this.listService.getList();
  }
  NavigateToDetail(list : List){
    this.router.navigate(["/dettaglio/"+this.listService.getListIndex(list)]);
  }

  alertTest(){
    alert("Test");
  }

}