import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
  selector: 'main-nav',
  templateUrl: 'category.component.ng.html',
})
export class CategoryComponent  {
  categories: Category[];
  constructor(){
    this.categories = [{id: 1, url: 'test', name: 'Home'}, {id: 2, url: 'test', name: 'Business'}, {
      id: 3,
      url: 'test',
      name: 'Culture'
    }, {id: 4, url: 'test', name: 'Administrative'}, {id: 5, url: 'test', name: 'About'}]
  }
}

interface Category{
    id: number;
    name: string;
    url: string;
}