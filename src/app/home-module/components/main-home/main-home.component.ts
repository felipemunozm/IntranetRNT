import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  title = "Home page"
  constructor() { }

  ngOnInit(): void {
  }

}
