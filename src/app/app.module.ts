import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app.component';
import { CategoryComponent }  from './components/category.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CategoryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
