import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { PrivateareaComponent } from '../components/privatearea/privatearea.component';
import { HomeComponent } from '../components/home/home.component';
import { DetailComponent } from '../components/detail/detail.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'privateArea', component: PrivateareaComponent},
  { path: 'dettaglio/:id', component: DetailComponent},

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