import { Component, OnInit } from '@angular/core';
import { List } from '../../classes/List';
import { MockListService } from '../../services/mock-list.service';

@Component({
  selector: 'app-privatearea',
  templateUrl: './privatearea.component.html',
  styleUrls: ['./privatearea.component.css']
})
export class PrivateareaComponent implements OnInit {

  nOfListe: number;
  lista: List = new List("Spesa carne","SC");
  liste: List[];
  constructor(private listService: MockListService) {
    this.liste = listService.getLists();
   }

  ngOnInit() {
    this.liste = this.listService.getLists();
    this.nOfListe=this.liste.length;
  }

  save(name: string, sigla: string){

    this.listService.deleteList(new List(name, sigla));
    this.liste = this.listService.getLists();
    alert("Modifiche salvate!");
  }

  delete(list: List){
    this.listService.deleteList(list);
    this.liste = this.listService.getLists();
  }

}
