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
import { ModalComponent } from './components/modal/modal.component';
import { ModalDataService } from './services/modal-data.service';
import { LoginService } from './services/login.service';
import { GenericServiceService } from './services/generic-service.service';
import { UrlMockUtilsService } from './services/UrlMockUtils.service';
import { HttpClientModule } from '@angular/common/http';
import { UtilityService } from './services/utility.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PrivateareaComponent,
    PrivateheaderComponent,
    DetailComponent,
    DeleteModalComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    PortaleRouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HeaderService,
    MockListService,
    ModalDataService,
    LoginService,
    GenericServiceService,
    UrlMockUtilsService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
