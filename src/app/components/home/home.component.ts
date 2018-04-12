import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('contatti') el: ElementRef;
  @ViewChild('scarica') scarica: ElementRef;
  @ViewChild('funzionalita') funzionalita: ElementRef;
  anchor: string = "ciao";

  constructor(private headerService: HeaderService) {
    this.headerService.anchor$.subscribe(id => {
      this.anchor = id;
      if (this.anchor == "contatti")
        this.scrollToContatti();
      else if (this.anchor == "scarica")
        this.scrollToScarica();
      else if (this.anchor == "funzionalita")
        this.scrollToFunzionalita();
    });
  }

  ngOnInit() {
  }

  scrollToScarica() {
    window.scrollTo(0,0);
  }
  scrollToContatti() {

    this.el.nativeElement.scrollIntoView();
  }
  scrollToFunzionalita() {
    this.funzionalita.nativeElement.scrollIntoView();
  }

}
