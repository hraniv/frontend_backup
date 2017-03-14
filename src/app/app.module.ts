import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app.component';
import { CategoryComponent }  from './components/category.component';
import { SideNavComponent }  from './components/sidenav.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CategoryComponent, SideNavComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
