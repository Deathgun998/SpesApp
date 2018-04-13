import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './components/appcomponent/app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderService } from './services/header.service';
import { FooterComponent } from './components/footer/footer.component';
import { PrivateareaComponent } from './components/privatearea/privatearea.component';
import { PortaleRouterModule } from './Routing/router.module';
import { PrivateheaderComponent } from './components/privateheader/privateheader.component';
import { MockListService } from './services/mock-list.service';
import { DetailComponent } from './components/detail/detail.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PrivateareaComponent,
    PrivateheaderComponent,
    DetailComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    PortaleRouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeaderService, MockListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
