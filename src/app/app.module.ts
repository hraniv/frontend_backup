import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent}  from './components/app.component';
import {CategoriesService} from './services/categories.service'
import {CategoryComponent}  from './components/category.component';
import {ContentComponent}  from './components/content.component';
import {ROUTING} from './app.routing';

@NgModule({
    imports: [BrowserModule, HttpModule, ROUTING],
    declarations: [AppComponent, CategoryComponent, ContentComponent],
    bootstrap: [AppComponent],
    providers: [CategoriesService]
})
export class AppModule {
}

export const SERVER_HOST = 'http://localhost:3001';