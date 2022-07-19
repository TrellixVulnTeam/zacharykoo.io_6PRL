import { Component, HostListener, OnInit } from '@angular/core';
import { TablesService } from '../tables.service';

@Component({
  selector: 'tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  title = "Table of contents";
  contents;

  constructor(service: TablesService) {
    this.contents = service.getTables();
  }

  navbarfixed:boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll() {
    if(window.scrollY > 100) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }
  ngOnInit(): void {
  }

}
