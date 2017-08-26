import { Component } from '@angular/core';

export class Product  { 
  id : number;
  title : string; 
  description : string;
}

/**
 * Defining mock Products.
 *  Eventually this app will fetch the list of products from a web service, for now we can display mock propducts.
 *  PRODUCT is the type Product, previusly defined.
 */
  const PRODUCT: Product[] = [
    { id: 1, title: 'Lipstick', description: 'Rouge Brillant Lipstick'},
    { id: 2, title: 'Eyeshadow', description: '4 Colour eyeshadow palette'},
    { id: 3, title: 'Mascara', description: 'Super Volume Mask'},
    { id: 4, title: 'Make-up Remover', description: 'Instant eye make-up remover'},
  ]

@Component({
  selector: 'my-app',
  template: `
    <h1>{{mainTitle}} details!</h1>
    <ul class="products">
      <li *ngFor="let product of products">
        <span class="badge">{{product.id}}</span> {{product.title}}
      </li>
    </ul>
    `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .products {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .products li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .products li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .products li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .products .text {
    position: relative;
    top: -3px;
  }
  .products .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

/**
 * The products type isn't defined because TypeScript infers it from the PRODUCT array.
 */
export class AppComponent  { 
/*   product: Product = {
    id: 1,
    title: 'Table',
    description: '32cmx48cm'
  }; */
  mainTitle = 'Products';
  products = PRODUCT; //public property in AppComponent that exposes the propducts for binding.
}

/**
 * two-way data binding: ==> This binding both displays the product's description and allows users to change it.<input> [(ngModel)]= product.description placeholder="description"
 * [(ngModel)] is the Angular syntax to bind the product.description property to the textbox. 
 * Data flows in both directions: from the property to the textbox, and from the textbox 
 * back to the property.
 */