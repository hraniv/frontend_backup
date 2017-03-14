/**
 * Created by xgalv00 on 14.03.17.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './components/app.component';

const APPROUTES: Routes = [
    {
        path:'',
        component: AppComponent
    },
    {
        path: 'category/:slug',
        component: AppComponent
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APPROUTES);