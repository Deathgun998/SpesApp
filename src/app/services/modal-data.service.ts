import { Injectable } from "@angular/core";
import {ModalItem } from "../classes/modalItem";
import { Subject } from "rxjs/Subject";
import { LoginService } from "./login.service";



@Injectable()
export class ModalDataService{


   constructor(private loginService: LoginService){}
  private modalData: Subject<ModalItem> = new Subject<ModalItem>();

  public modalData$ = this.modalData.asObservable();

  public showModal(modalData: ModalItem){
    this.modalData.next(modalData);
  }

  public hideModal(){
    this.modalData.next(null);
  }

  email : string;
}
