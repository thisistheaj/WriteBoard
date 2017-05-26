import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , FirebaseObjectObservable} from 'angularfire2/database';

import { FirebaseApp } from 'angularfire2';

import { Camera } from '@ionic-native/camera';

import firebase from 'firebase/app';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserServiceProvider {

  public user: FirebaseObjectObservable<any>;
  public id: any;

  constructor(public afAuth: AngularFireAuth, public afDb: AngularFireDatabase, public camera: Camera, public fbApp: FirebaseApp) {
    console.log('Hello UserServiceProvider Provider');
  }

  public logInUserWithEmail(email:string,password:string): Promise<any>{
    return new Promise((resolve,reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,password)
        .then(data => {
          this.user = this.afDb.object('/WriteBoard/v1/en/users/' + data.uid);
          this.id = data.uid;
          resolve(data);
        }, err => reject(err));
    });
  }

  public signUpUserWithEmail(email:string, password:string): Promise<any> {
    return new Promise((resolve,reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(data => {
          this.user = this.afDb.object('/WriteBoard/v1/en/users/' + data.uid);
          this.id = data.uid;
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

  public takePicture(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.camera.getPicture({
        quality : 25,
        destinationType : this.camera.DestinationType.DATA_URL,
        sourceType : this.camera.PictureSourceType.CAMERA,
        allowEdit : true,
        encodingType: this.camera.EncodingType.PNG,
        targetWidth: 100,
        targetHeight: 100,
        saveToPhotoAlbum: false
      }).then(imageData => {
        this.user.update({image: imageData})
          .then(data => console.log(data),err => alert('err'))
          .catch(err => alert('catch'));
        resolve(imageData);
      }, error => {
        reject({message:JSON.stringify(error)});
      });
    });
  }

  public getUser():FirebaseObjectObservable<any> {
    return this.user;
  }

}
