import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ConectFireBase {
    user: Observable<firebase.User>;
    constructor(public afAuth: AngularFireAuth) {


    };


    users() {
        return this.afAuth.authState;
    }

    login() {
        this.afAuth.auth.signInAnonymously();
    }

    logout() {
        this.afAuth.auth.signOut();
    }

}