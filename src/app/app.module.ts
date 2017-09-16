/**
 * AppModule is focused on identifying the key pieces of the app.
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here. The ng module for forms.
import { RouterModule }   from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from "./app/app.component";
import { ProductComponent } from "./product/product.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductService } from "./product/product.service";

/**
 * The @NgModule metadata's imports array, which contains the list of external modules that the app uses.
 * NgModule contiene un array 'imports' que lista los modulos exteernos que usa la app.
 */
@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProductComponent,
    //Add ProductDetailComponent to the module's declarations array.
    ProductDetailComponent,
    DashboardComponent 
  ],
  providers: [
    ProductService
  ],
  bootstrap: [ 
    AppComponent 
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
