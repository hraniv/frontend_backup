/**
 * Created by xgalv00 on 14.03.17.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContentComponent} from './components/content.component';
import {AuthComponent} from './components/auth.component';
import {AddArticleComponent} from './components/add.component';
import {EditArticleComponent} from './components/edit.component';
import {DetailArticleComponent} from './components/detail.component';

// add named routing from solution https://stackoverflow.com/questions/37999286/angular2-named-routes
export class Url {
    // todo understand how move dict with urls to this.dict[routingName]
    public static to(routingName: string, values?: any) {
        return {
          'edit-article': '/articles/:id/edit',
          'add-article': '/articles/add',
        }[routingName];
    }

}

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
    },
    {
        path: 'articles/add',
        component: AddArticleComponent
    },
    {
        path: 'articles/:cid/:id/edit',
        component: EditArticleComponent
    },
    {
        path: 'articles/:cid/:id',
        component: DetailArticleComponent
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APPROUTES);
