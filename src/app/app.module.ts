import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './components/app.component';
import {CategoryComponent}  from './components/category.component';
import {ContentComponent}  from './components/content.component';
import {ROUTING} from './app.routing';

@NgModule({
    imports: [BrowserModule, ROUTING],
    declarations: [AppComponent, CategoryComponent, ContentComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
