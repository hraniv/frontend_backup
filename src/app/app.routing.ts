/**
 * Created by xgalv00 on 14.03.17.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContentComponent} from './components/content.component';
import {AuthComponent} from './components/auth.component';

const APPROUTES: Routes = [
    {
        path:'',
        component: ContentComponent
    },
    {
        path:'category/:id',
        component: ContentComponent
    },
    {
        path:'login',
        component: AuthComponent
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APPROUTES);
