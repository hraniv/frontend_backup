import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import {AppComponent}  from './components/app.component';
import {CategoriesService} from './services/categories.service'
import {CategoryComponent}  from './components/category.component';
import {ContentComponent}  from './components/content.component';
import {AuthComponent}  from './components/auth.component';
import {ROUTING} from './app.routing';

// Must export the config
export const firebaseConfig = {
      apiKey: "AIzaSyDLqqUCwq-5ghrZJ4xpLExdE7TfxOmCsXM",
      authDomain: "village-57ea4.firebaseapp.com",
      databaseURL: "https://village-57ea4.firebaseio.com",
      // projectId: "village-57ea4",
      storageBucket: "village-57ea4.appspot.com",
      messagingSenderId: "708193878590"
    };
const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
    imports: [BrowserModule, HttpModule, ROUTING,
        AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    ],
    declarations: [AppComponent, CategoryComponent, ContentComponent, AuthComponent],
    bootstrap: [AppComponent],
    providers: [CategoriesService]
})
export class AppModule {
}

export const SERVER_HOST = 'http://localhost:3001';
