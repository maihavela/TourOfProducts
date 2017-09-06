/**
 * AppModule is focused on identifying the key pieces of the app.
 */

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here. The ng module for forms.
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
//import the ProductDetailComponent so you can refer to it.
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { DashboardComponent } from "./dashboard.component";

import { AppRoutingModule }     from './app-routing.module';
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
