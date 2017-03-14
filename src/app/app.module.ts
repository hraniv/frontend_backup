import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app.component';
import { CategoryComponent }  from './components/category.component';
import { ContentComponent }  from './components/content.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CategoryComponent, ContentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
