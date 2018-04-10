import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  anchor: string;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
  }

  

navigate(anchor: string) {
  this.anchor = anchor;
  this.headerService.setAnchor(this.anchor);
  
}

}
