import { Component } from '@angular/core';
import { ModalItem } from '../../classes/modalItem';
import { ModalDataService } from '../../services/modalData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  modal : ModalItem;
  showModal: boolean;

  constructor(private modalDataService : ModalDataService){ 
    this.modalDataService.modalData$.subscribe(modal => {
      this.modal = modal;
      this.showModal = modal != null && modal != undefined;

     
    });
  }



}
