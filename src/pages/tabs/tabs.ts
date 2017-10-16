import { Component } from '@angular/core';

import { CarritoPage } from '../carrito/carrito';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CarritoPage;

  constructor() {

  }
}
