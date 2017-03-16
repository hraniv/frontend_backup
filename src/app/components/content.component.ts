import {Component} from '@angular/core';

import {ArticlesService} from '../services/articles.service'

@Component({
    moduleId: module.id,
    selector: 'content',
    templateUrl: 'content.component.ng.html',
    providers: [ArticlesService]
})
export class ContentComponent {
    articles: Article[];

    constructor(private articlesService: ArticlesService) {
        this.articlesService.getArticles().subscribe(articles => {
            this.articles = articles;
        });
    }
}

interface Article {
    id: number;
    title: string;
    content: string;
    img?: string;
}