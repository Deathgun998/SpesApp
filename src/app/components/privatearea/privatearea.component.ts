import { Component, OnInit } from '@angular/core';
import { List } from '../../classes/List';

@Component({
  selector: 'app-privatearea',
  templateUrl: './privatearea.component.html',
  styleUrls: ['./privatearea.component.css']
})
export class PrivateareaComponent implements OnInit {

  nOfListe: number = 11;
  lista: List = new List("Spesa carne","SC");
  liste: List[];
  constructor(/*private listService: ListService*/) {
   }

  ngOnInit() {
  }

  save(){
    alert("Modifiche salvate!");
  }

}
