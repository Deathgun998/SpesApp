import { Injectable } from '@angular/core';
import { GenericServiceService } from './generic-service.service';
import { HttpHeaders} from '@angular/common/http';
import { User } from '../classes/User';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {


 
  private logged: Subject<boolean> = new Subject<boolean>();
  private logged$ = this.logged.asObservable();

  constructor(private genericService: GenericServiceService,private router : Router) { }

 executeLogin(user : User,callback: (response:any)=>void = null, errorCallBack: (error:any)=>void = null){
    let header = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(user.email)
    });
    this.genericService.callGet(
      'loginService', 
      header, 
      (response)=>{
        if(callback)
        callback(response)
      }, 
      (error)=>{
        if(errorCallBack)
        errorCallBack(error)
      });
  }
  nextLogged(logged : boolean){
    this.logged.next(true);
  }
  isLogged(): boolean {
    if (sessionStorage.getItem('user') === null) {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    sessionStorage.removeItem('user');
    this.logged.next(false);
    this.router.navigate(["home"]);
  }
}
