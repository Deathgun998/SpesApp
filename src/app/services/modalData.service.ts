import { Injectable } from "@angular/core";
import { modalItem } from "../classes/modalItem";
import { Subject } from "rxjs/Subject";



@Injectable()
export class ModalDataService{


    private modalData: Subject<modalItem> = new Subject<modalItem>();

    public modalData$ = this.modalData.asObservable();
  
    public showModal(modalItem: modalItem){
      this.modalData.next(modalItem);
    }
  
    public hideModal(){
      this.modalData.next(null);
    }
  
    email : string;
  }

