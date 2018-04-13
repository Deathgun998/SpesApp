import { Component, OnInit } from '@angular/core';
import { Textbox } from '../modal/modalClass/textBox';
import { ModalItem } from '../../classes/modalItem';
import { Button } from '../modal/modalClass/button';
import { ModalDataService } from '../../services/modal-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  textboxsLogin: Textbox[] = [
    new Textbox("", "Email", true, "email", "text"),
    new Textbox("", "Password", true, "password", "password")
  ];

  textboxsRegister: Textbox[] = [
    new Textbox("", "Nome e Cognome", true, "name", "text"),
    new Textbox("", "Email", true, "email", "text"),
    new Textbox("", "Password", true, "password", "password")
  ]

  constructor(private modalService: ModalDataService) { }

  ngOnInit() {
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  openLoginModalFromFooter() {
    this.modalService.showModal(new ModalItem("Login", null, new Button("Accedi", null), new Button("Annulla", () => { this.modalService.hideModal() }), false, this.textboxsLogin));
    for (let i = 0; i < this.textboxsLogin.length; i++) {
      this.textboxsLogin[i].key = null;
    }
  }

  openRegisterModalFromFooter() {
    this.modalService.showModal(new ModalItem("Register", null, new Button("Registrati", null), new Button("Annulla", () => { this.modalService.hideModal() }), false, this.textboxsRegister));
    for (let i = 0; i < this.textboxsRegister.length; i++) {
      this.textboxsRegister[i].key = null;
    }
  }


}
