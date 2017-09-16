//you imported the Angular Injectable function and applied that function as an @Injectable() decorator.
//@Injectable() decorator == to emit metadata about the service. 
//The metadata specifies that Angular may need to inject other dependencies into this service.
import { Injectable } from '@angular/core';
import { Product } from "./product";
import { PRODUCT } from "../json/mock-products";


//The ProductService could get Product data from anywhere—a web service, local storage, or a mock data source.
//Export ProductService for others to import.
@Injectable()
export class ProductService {
    
    getProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCT); //return mock products.
    }  

    /*To simulate a slow connection*/
    getProductsSlowly(): Promise<Product[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getProducts()), 5000);
        });
    }

    getProduct(id: number): Promise<Product> {
    return this.getProducts()
                .then(products => products.find(product => product.id === id));
    }
}

