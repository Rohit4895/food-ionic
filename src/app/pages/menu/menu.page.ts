import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menu: Categories[];
  cart: any[] = [];
  total: number;

  constructor() { }

  ngOnInit() {
  }

}
