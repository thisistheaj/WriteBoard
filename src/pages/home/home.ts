import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserServiceProvider } from '../../providers/user-service/user-service';
import {FirebaseObjectObservable} from "angularfire2/database";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, public userService: UserServiceProvider) {
    this.user = userService.getUser();
  }

  public takePicture() {
    this.userService.takePicture().then(data => {
      // this.image = data;
    }, err => alert(err.message)).catch(err => alert(err.message + "(caught)"));
  }

  public takeImageFromGallery() {

  }

}
