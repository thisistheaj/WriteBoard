import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public image: any;

  constructor(public navCtrl: NavController, public userService: UserServiceProvider) {

  }

  public takePicture() {
    this.userService.takePicture().then(data => {
      this.image = data;
    }, err => alert(err.message)).catch(err => alert(err.message + "(caught)"));
  }

  public takeImageFromGallery() {

  }

}
