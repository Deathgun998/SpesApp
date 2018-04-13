import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-privateheader',
  templateUrl: './privateheader.component.html',
  styleUrls: ['./privateheader.component.css']
})
export class PrivateheaderComponent implements OnInit {

  isProfileClicked: boolean=false;
  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }
  isProfileClickedFun() {
    if (this.isProfileClicked) {
      this.isProfileClicked = false;

    } else {
      this.isProfileClicked = true;
    }
  }
  doLogout() {
    this.loginService.logout();
  }

}
