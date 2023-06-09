import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() sidenav: MatSidenav;

  constructor() {}

  ngOnInit(): void {}

  public toggleMenu():void{
    this.sidenav.toggle();
  }
}
