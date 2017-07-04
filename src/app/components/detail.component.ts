/**
 * Created by xgalv00 on 29.06.17.
 */
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

import {ArticlesService} from '../services/articles.service'
import {Article} from './content.component'


@Component({
  moduleId: module.id,
  selector: 'content',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css'],
})

export class EditArticleComponent implements OnInit{

  article: Article;

  constructor(private af: AngularFire, private router: Router, private service: ArticlesService, private route: ActivatedRoute) {
    // this.articlesService.getArticles().subscribe((articles:Article[]) => {
    //     this.articles = articles;
    // });
  }
  editArticle(){
    // let article = {
    //         title: this.title,
    //         content: this.content,
    //         category: this.category,
    //     };
    //     this.service.addArticle(article);
    //     this.router.navigate([`category/${this.category}`]).catch(err => {console.error(err, 'Navigate error')});
  }
  ngOnInit(){
        this.route.params
        // (+) converts string 'id' to a number
        .switchMap((params: Params) => this.service.getArticle(params['cid'], params['id']))
        .subscribe((article:Article) => this.article=article);
    }
}
/**
 * Created by xgalv00 on 30.06.17.
 */
