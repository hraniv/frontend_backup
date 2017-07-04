/**
 * Created by xgalv00 on 29.06.17.
 */
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable} from 'angularfire2';

import {ArticlesService} from '../services/articles.service'
import {Article} from './content.component'


@Component({
  moduleId: module.id,
  selector: 'content',
  templateUrl: 'edit.component.html',
  styleUrls: ['edit.component.css'],
})

export class EditArticleComponent implements OnInit {

  article: FirebaseObjectObservable<Article>;

  constructor(private af: AngularFire, private router: Router, private service: ArticlesService, private route: ActivatedRoute) {
    // this.articlesService.getArticles().subscribe((articles:Article[]) => {
    //     this.articles = articles;
    // });
  }

  editArticle() {
    let article = {
      title: this.article.title,
      content: this.article.content,
      category: this.article.category,
    };
    this.service.updateArticle(this.article.$key, article);
    this.router.navigate([`category/${this.article.category}`]).catch(err => {
      console.error(err, 'Navigate error')
    });
  }

  ngOnInit() {
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getArticle(params['cid'], params['id']))
      .subscribe((article: FirebaseObjectObservable<Article>) => this.article = article);
  }
}
