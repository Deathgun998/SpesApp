import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { PrivateareaComponent } from '../components/privatearea/privatearea.component';
import { HomeComponent } from '../components/home/home.component';
import { UserComponent } from '../components/user/user.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'privateArea', component: PrivateareaComponent},
  { path: 'user', component: UserComponent},

  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: HomeComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PortaleRouterModule {
}