import { Component, OnInit, Input } from '@angular/core';
import { modalItem } from '../../classes/modalItem';
import { ModalDataService } from '../../services/modalData.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  email: string;
  password: string;

  @Input()
  modalData: modalItem;

  // private loginService: LoginService
  modalDelete: Object;
  constructor(private modalDataService: ModalDataService) {
  }

  ngOnInit() {
  }

  chargePhoto(){
    console.log("photooo");
  }

  close() {
    this.modalDataService.hideModal();
  }

}