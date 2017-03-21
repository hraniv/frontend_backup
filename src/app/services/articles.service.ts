/**
 * Created by xgalv00 on 16.03.17.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {SERVER_HOST} from '../app.module'

@Injectable()
export class ArticlesService {
    constructor(private http: Http){
        console.log('ArticlesService Initialized...');
    }

    getArticles(id:number){
        //todo when replaced with slug use home and make home slug global setting constant for project
        if (!id){
            id = 1;
        }
        return this.http.get(SERVER_HOST + '/articles?category='+id)
            .map(res => res.json());
    }
}