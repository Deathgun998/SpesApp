import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';
import { HeaderService } from '../../services/header.service';
import { Textbox } from '../modal/modalClass/textBox';
import { ModalItem } from '../../classes/modalItem';
import { Button } from '../modal/modalClass/button';
import { ModalDataService } from '../../services/modal-data.service';
import { LoginService } from '../../services/login.service';
import { User } from '../../classes/User';
import { Router } from '@angular/router';

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




  constructor(private headerService: HeaderService, private modalService: ModalDataService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }



  navigate(anchor: string) {
    this.anchor = anchor;
    this.headerService.setAnchor(this.anchor);

  }


  openModalLogin() {
    this.modalService.showModal(new ModalItem("Login", null, new Button("Accedi", () => { this.doLogin() }), new Button("Annulla", () => { this.modalService.hideModal() }), false, this.textboxsLogin));
    for (let i = 0; i < this.textboxsLogin.length; i++) {
      this.textboxsLogin[i].key = null;
    }
  }

  openModalRegister() {
    this.modalService.showModal(new ModalItem("Register", null, new Button("Registrati", null), new Button("Annulla", () => { this.modalService.hideModal() }), false, this.textboxsRegister));
    for (let i = 0; i < this.textboxsRegister.length; i++) {
      this.textboxsRegister[i].key = null;
    }
  }



  doLogin() {
    let user: User = new User(this.textboxsLogin[0].getValue(), this.textboxsLogin[1].getValue());
    this.loginService.executeLogin(user,
      (response) => {
        this.loginService.nextLogged(true);
        sessionStorage.setItem("user", "gino");
        this.modalService.hideModal();
        this.router.navigate(['privateArea']);
      }, (error) => {
        console.log("error");
      });


  }


}