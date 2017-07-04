/**
 * Created by xgalv00 on 16.03.17.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

import {Article} from '../components/content.component'

@Injectable()
export class ArticlesService {
    constructor(private http: Http, private af: AngularFire){
        console.log('ArticlesService Initialized...');
        //todo uncomment this when will rewrite organization of articles and categories
        // this.articles = this.af.database.list('/articles') as FirebaseListObservable<Article[]>
    }
    articles: FirebaseListObservable<any[]>;

    getArticles(id:number){
        //todo when replaced with slug use home and make home slug global setting constant for project
        if (!id){
            id = 1;
        }
        //todo replace query by category instead of id
        return this.af.database.list(`/articles/${id}`);
    }

    getArticle(cid:string, id:string){
        //todo make urls more consistent. Remove category grouping and list articles by category
        return this.af.database.object(`/articles/${cid}/${id}`);
    }

    deleteArticle(id:any){
      // return this.articles.remove(id);
      console.log(`call to firebase remove ${id}`);
    }

    updateArticle(id:any, article:any){
      // return this.articles.remove(id);
      console.log(`call to firebase update ${id}`);
      console.log(`data ${article}`);
    }

    //todo replace any with interface
    addArticle(article:any){
      let cid = article.category;
      const promise = this.af.database.list(`/articles/${cid}`).push(article);
      promise.then(_ => console.log('Success')).catch(err => console.error(err, "Test error"));
      return promise;
    }
}
