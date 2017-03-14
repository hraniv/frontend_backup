import { Component } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './app/components/sidenav.component.ng.html',
})
export class SideNavComponent  {
  categories: Category[];

    constructor() {
        this.categories = [{id: 1, url: 'test', name: 'psum dolor sit amet, consectetur adipiscing elit.'}, {
            id: 1,
            url: 'test',
            name: 'eu diam eu augue vehicula finibus et sed urna'
        }, {
            id: 1,
            url: 'test',
            name: 'aculis ex eget elementum vehicula.'
        }, {id: 1, url: 'test', name: 'uis lorem vel augue aliquet feugiat'}, {
            id: 1,
            url: 'test',
            name: 'libero mollis, mollis odio eu, porta ex.'
        }]
    }
}

interface Category{
    id: number;
    name: string;
    url: string;
}