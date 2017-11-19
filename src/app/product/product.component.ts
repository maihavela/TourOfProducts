import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'my-products',
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.css' ]
})
export class ProductComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(
    private router: Router,
    private productService: ProductService) { }

  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }
//the OnInit interface has a hook method ngOnInit method with the initialization logic inside. 
//initialize by calling getProducts().
  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }
}
