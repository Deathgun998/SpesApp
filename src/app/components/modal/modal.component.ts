import { Component, OnInit, Input } from '@angular/core';
import { ModalDataService } from '../../services/modalData.service';
import { ModalItem } from '../../classes/modalItem';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  email: string;
  password: string;

  @Input()
  modalData: ModalItem;

  // private loginService: LoginService
  modalDelete: Object;
  constructor(private modalDataService: ModalDataService) {
  }

  ngOnInit() {
  }

  addPhoto(){
  }

  close() {
    this.modalDataService.hideModal();
  }

}