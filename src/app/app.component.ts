import { Component } from '@angular/core';

import { ProductComponent } from './product.component';

import { ProductService } from "./product.service";

@Component({
    selector: 'my-app',
    template: `
        <h1>{{mainTitle}} details!</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/products">Products</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: [ './app.component.css' ],
    providers:  [ 
        ProductService 
    ],
})

export class AppComponent {
  mainTitle = 'List of products';
}
