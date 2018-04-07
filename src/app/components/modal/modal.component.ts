import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  
  list : string = "Spesa al mercato";
  
  constructor() { }

  ngOnInit() {
  }


confirm(){

}

back(){

}

confirm_modal: boolean = true;
login_modal : boolean = false;

}