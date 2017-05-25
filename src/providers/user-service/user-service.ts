import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , FirebaseObjectObservable} from 'angularfire2/database';

import * as firebase from 'firebase/app';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserServiceProvider {

  public user: FirebaseObjectObservable<any>;

  constructor(public afAuth: AngularFireAuth, public afDb: AngularFireDatabase) {
    console.log('Hello UserServiceProvider Provider');
  }

  public logInUserWithEmail(email:string,password:string): Promise<any>{
    return new Promise((resolve,reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,password)
        .then(data => {
          this.user = this.afDb.object('/WriteBoard/v1/en/users/' + data.uid);
          resolve(data);
        }, err => reject(err));
    });
  }

  public signUpUserWithEmail(email:string, password:string): Promise<any> {
    return new Promise((resolve,reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(data => {
          this.user = this.afDb.object('/WriteBoard/v1/en/users/' + data.uid);
          this.user.update({email: email});
          resolve(data);
        },err => reject(err));
    });
  }

  public logInUserWithFaceBook(): Promise<any>{
    return new Promise((resolve,reject) => {
      this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(data => resolve(data),err => reject(err));
    });
  }

  public sendForgotPasswordEmail(email:string): Promise<any> {
    return new Promise((resolve,reject) => {
      this.afAuth.auth.sendPasswordResetEmail(email)
        .then(data => resolve(data), err => reject(err));
    });
  }

}
