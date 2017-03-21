import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../services/categories.service'
import {Category} from './category'
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'main-nav',
    templateUrl: 'category.component.ng.html',
})
export class CategoryComponent implements OnInit{
    categories: Category[];

    constructor(
        private router: Router,
        private categoriesService: CategoriesService
    ) {}
    ngOnInit(){
        this.categoriesService.getCategories().subscribe(categories => {
            this.categories = categories;
        });
    }

    isCategoryActive(category: Category): boolean {
        if (this.router.url === "/"){
            return category.isDefault;
        }else{
            return this.router.url === "/category/" + category.id;
        }
    }
}
