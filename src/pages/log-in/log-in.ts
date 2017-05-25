import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SignUpPage } from "../sign-up/sign-up";
import { UserServiceProvider } from '../../providers/user-service/user-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }

  logInWithEmail(){
    this.userService.logInUserWithEmail(this.user.email, this.user.password).then(data => {
      alert("Logged in: " + this.user.email);
      this.goToHome();
    },err => alert(err.message));
  }

  goToSignUp(){
    this.navCtrl.push(SignUpPage);
  }

  goToHome(){
    this.navCtrl.push(HomePage);
  }

  sendForgotPasswordEmail(){
    alert("Forgot password Email Sent to " + this.user.email);
    this.userService.sendForgotPasswordEmail(this.user.email).then(data => {

    },err => alert(err.message));
  }

}
