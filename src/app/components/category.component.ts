import {Component} from '@angular/core';
import {CategoriesService} from '../services/categories.service'

@Component({
    moduleId: module.id,
    selector: 'main-nav',
    templateUrl: 'category.component.ng.html',
    providers: [CategoriesService]
})
export class CategoryComponent {
    categories: Category[];

    constructor(private categoriesService: CategoriesService) {
        this.categoriesService.getCategories().subscribe(categories => {
            this.categories = categories;
        });
    }
}

interface Category {
    id: number;
    name: string;
    url: string;
}