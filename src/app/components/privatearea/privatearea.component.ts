import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privatearea',
  templateUrl: './privatearea.component.html',
  styleUrls: ['./privatearea.component.css']
})
export class PrivateareaComponent implements OnInit {

  nOfListe: number = 11;
  constructor() { }

  ngOnInit() {
  }

}
