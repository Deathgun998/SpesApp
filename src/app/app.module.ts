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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PrivateareaComponent,
    PrivateheaderComponent
  ],
  imports: [
    BrowserModule,
    PortaleRouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
