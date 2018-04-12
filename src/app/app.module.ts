import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule} from '@angular/forms';
import { ModalDataService } from './services/modalData.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ModalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
