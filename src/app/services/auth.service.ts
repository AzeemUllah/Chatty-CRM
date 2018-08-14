import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';



import {AngularFireDatabase} from "angularfire2/database";


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  items: Observable<any>;



  constructor(private firebaseAuth: AngularFireAuth, private _db: AngularFireDatabase) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string):string {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        return("Done");
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
        return(err.message);
      });
    return("a");
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {

      })
      .catch(err => {
        console.log('Something went wrong:',err.message);

      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  test(): Observable<any>{
    this.items = this._db.object('data').valueChanges();
    this.items.subscribe(function(action){
      return action;
    });
    return this.items;
  }
}
