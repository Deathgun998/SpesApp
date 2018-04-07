import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  confirm_modal: boolean = false;
  login_modal: boolean = false;
  register_modal: boolean = true;

  list: string = "Spesa al mercato";

  constructor() { }

  ngOnInit() {
  }


  confirm() {

  }

  back() {

  }

}