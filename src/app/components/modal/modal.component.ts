import { Component, OnInit, Input } from '@angular/core';
import { ModalItem } from '../../classes/modalItem';
import { ModalDataService } from '../../services/modal-data.service';

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