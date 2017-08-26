import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here. The ng module for forms.

import { AppComponent }  from './app.component';

/**
 * The @NgModule metadata's imports array, which contains the list of external modules that the app uses.
 * NgModule contiene un array 'imports' que lista los modulos exteernos que usa la app.
 */
@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
