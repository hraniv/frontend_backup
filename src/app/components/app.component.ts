import {Component} from '@angular/core';
import {AngularFire} from "angularfire2";



@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.ng.html',
})
export class AppComponent {
  constructor(private af: AngularFire){}

  logout(){
    this.af.auth.logout();
  }
}
