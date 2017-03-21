import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {ArticlesService} from '../services/articles.service'
import {Category} from "./category";

@Component({
    moduleId: module.id,
    selector: 'content',
    templateUrl: 'content.component.ng.html',
    providers: [ArticlesService]
})
export class ContentComponent implements OnInit{
    articles: Article[];
    category: Category;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ArticlesService
    ) {
        // this.articlesService.getArticles().subscribe((articles:Article[]) => {
        //     this.articles = articles;
        // });
    }

    ngOnInit() {
      this.route.params
        // (+) converts string 'id' to a number
        .switchMap((params: Params) => this.service.getArticles(+params['id']))
        .subscribe((articles:Article[]) => this.articles=articles);
    }
}

interface Article {
    id: number;
    title: string;
    content: string;
    img?: string;
}