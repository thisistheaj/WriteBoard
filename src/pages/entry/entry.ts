import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LogInPage } from '../log-in/log-in';
import {HomePage} from "../home/home";

import {UserServiceProvider} from '../../providers/user-service/user-service';

/**
 * Generated class for the EntryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-entry',
  templateUrl: 'entry.html',
})
export class EntryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntryPage');
  }

  logInWithFaceBook(){
    this.userService.logInUserWithFaceBook().then(data => {
      this.goToHome();
    }, err => alert(err.message));
  }

  goToLogIn(){
    this.navCtrl.push(LogInPage);
  }

  goToHome(){
    this.navCtrl.push(HomePage);
  }

}
