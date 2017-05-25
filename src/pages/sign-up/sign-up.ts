import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogInPage } from "../log-in/log-in";
import { HomePage } from "../home/home";
import { UserServiceProvider } from '../../providers/user-service/user-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public userService: UserServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  logInWithEmail(){
    this.userService.signUpUserWithEmail(this.user.email, this.user.password).then(data => {
      alert("Logged in: " + this.user.email);
      this.goToHome();
    },err => alert(err.message));
  }

  goToLogIn(){
    this.navCtrl.push(LogInPage);
  }

  goToHome(){
    this.navCtrl.push(HomePage);
  }

}
