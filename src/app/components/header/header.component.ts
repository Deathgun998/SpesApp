import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';
import { HeaderService } from '../../services/header.service';
import { Textbox } from '../modal/modalClass/textBox';
import { ModalDataService } from '../../services/modalData.service';
import { ModalItem } from '../../classes/modalItem';
import { Button } from '../modal/modalClass/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  anchor: string;
  textboxsLogin: Textbox[] = [
    new Textbox("", "Email", true, "email", "text"),
    new Textbox("", "Password", true, "password", "password")
  ];

  textboxsRegister: Textbox[] = [
    new Textbox("", "Nome e Cognome", true, "name", "text"),
    new Textbox("", "Email", true, "email", "text"),
    new Textbox("", "Password", true, "password", "password")
  ]

  constructor(private headerService: HeaderService, private modalService: ModalDataService) { }

  ngOnInit() {
  }

  

navigate(anchor: string) {
  this.anchor = anchor;
  this.headerService.setAnchor(this.anchor);
  
}


openModalLogin() {
  this.modalService.showModal(new ModalItem("Login", null, new Button("Accedi"), null, true, this.textboxsLogin));
  for (let i = 0; i < this.textboxsLogin.length; i++) {
    this.textboxsLogin[i].key = null;
  }
}

openModalRegister(){
this.modalService.showModal(new ModalItem("Register", null, new Button("Registrati"), null, true, this.textboxsRegister));
for (let i = 0; i < this.textboxsRegister.length; i++) {
  this.textboxsRegister[i].key = null;
}
}
}
