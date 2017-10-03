import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hobbies : string[];
  constructor() { }

  ngOnInit() {
    this.hobbies = ["PLaying cricket","Watching movies","Travelling"];

  }

}
