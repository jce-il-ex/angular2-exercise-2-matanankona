import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  buttons = [
              { id: "home", name: "Home" }, 
              { id: "page", name: "Page" },     
              { id: "about", name: "About" },     
              { id: "contactUs", name: "Contact Us" }
            ]

  constructor() { }

  ngOnInit() {
  }

}
