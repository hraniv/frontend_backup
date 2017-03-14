import { Component } from '@angular/core';

@Component({
  selector: 'main-nav',
  templateUrl: './app/components/category.component.ng.html',
})
export class CategoryComponent  {
  categories: Category[];
  constructor(){
    this.categories = [{id: 1, url: 'test', name: 'Home'}, {id: 1, url: 'test', name: 'Business'}, {
      id: 1,
      url: 'test',
      name: 'Culture'
    }, {id: 1, url: 'test', name: 'Administrative'}, {id: 1, url: 'test', name: 'About'}]
  }
}

interface Category{
    id: number;
    name: string;
    url: string;
}