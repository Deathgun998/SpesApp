import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuardService implements CanActivate{

 
  private sectionSelected: Subject<boolean> = new Subject<boolean>();
  public sectionSelected$ = this.sectionSelected.asObservable();


  canActivate(nome: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.loginService.isLogged()) {
      return true;
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }

    logOut() {
      this.sectionSelected.next(false);
    }

  constructor(private loginService: LoginService,private router:Router) { 
    
  }

}
