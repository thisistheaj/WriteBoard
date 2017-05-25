import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LogInPage} from "../log-in/log-in";
import {HomePage} from "../home/home";

/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  public user: any = {
    email:"",
    password:""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  logInWithEmail(){
    alert("Logged in: " + this.user.email);
    this.goToHome();
  }

  goToLogIn(){
    this.navCtrl.push(LogInPage);
  }

  goToHome(){
    this.navCtrl.push(HomePage);
  }

}
