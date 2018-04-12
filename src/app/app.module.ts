import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/appcomponent/app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderService } from './services/header.service';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule} from '@angular/forms'
import { ModalDataService } from './services/modalData.service';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    UserComponent,
    ModalComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeaderService, ModalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
