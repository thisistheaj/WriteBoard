import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import {SignUpPage} from "../sign-up/sign-up";

/**
 * Generated class for the LogInPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {

  public user: any = {
    email:"",
    password:""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }

  logInWithEmail(){
    alert("Logged in: " + this.user.email);
    this.goToHome();
  }

  goToSignUp(){
    this.navCtrl.push(SignUpPage);
  }

  goToHome(){
    this.navCtrl.push(HomePage);
  }

  sendForgotPasswordEmail(){
    alert("Forgot password Email Sent to " + this.user.email)
  }

}
