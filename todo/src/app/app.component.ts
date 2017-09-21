import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { ConectFireBase } from './shared/connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  change = {};
  modifVariable = ''

  constructor(public ConnectFire: ConectFireBase, public af: AngularFireDatabase) {

  }

  ngOnInit() {

    this.user = this.ConnectFire.users();
    this.items = this.af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

  }

  loginFire() {
    this.ConnectFire.login();
  }

  logoutFire() {
    this.ConnectFire.logout();
  }

  Send(desc: string) {
    this.items.push({ message: desc });
    this.msgVal = '';
  }
  delete(msgVal: string) {
    this.items.remove(msgVal);
  }

  modify(msgVal: string, desc) {

    // this.items.set(msgVal, {message: desc});

    this.change[msgVal] = false;
    this.items.set(msgVal, {
      message: this.modifVariable
    });
  }
}
