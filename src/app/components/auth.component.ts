/**
 *
 * Created by xgalv00 on 13.04.17.
 */

import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {AngularFire} from 'angularfire2';


@Component({
  moduleId: module.id,
  selector: 'content',
  templateUrl: 'auth.component.html',
})
export class AuthComponent {

  constructor(private af: AngularFire) {
    // this.articlesService.getArticles().subscribe((articles:Article[]) => {
    //     this.articles = articles;
    // });
  }

  login() {
    this.af.auth.login();
  }
}
