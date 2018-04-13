import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/appcomponent/app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderService } from './services/header.service';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { ModalDataService } from './services/modalData.service';
import { ModalComponent } from './components/modal/modal.component';
import { DetailComponent } from './components/detail/detail.component';
import { PrivateareaComponent } from './components/privatearea/privatearea.component';
import { PrivateheaderComponent } from './components/privateheader/privateheader.component';
import { MockListService } from './services/mock-list.service';
import { AuthGuardService } from './services/auth-guard.service';
import { PortaleRouterModule } from './routing/router.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ModalComponent,
    DetailComponent,
    PrivateareaComponent,
    PrivateheaderComponent
    
  ],
  imports: [
    BrowserModule,
    PortaleRouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeaderService, ModalDataService, MockListService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
