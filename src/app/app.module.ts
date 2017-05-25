import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EntryPage } from '../pages/entry/entry';
import { LogInPage } from '../pages/log-in/log-in';
import { SignUpPage } from '../pages/sign-up/sign-up';

import { UserServiceProvider } from '../providers/user-service/user-service';
import { WhiteBoardsServiceProvider } from '../providers/white-boards-service/white-boards-service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EntryPage,
    LogInPage,
    SignUpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDIX9h1XPh3A84v_OrT35R4vANTTLj-zQg",
      authDomain: "followers-e0e8d.firebaseapp.com",
      databaseURL: "https://followers-e0e8d.firebaseio.com",
      projectId: "followers-e0e8d",
      storageBucket: "followers-e0e8d.appspot.com",
      messagingSenderId: "758989306245"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EntryPage,
    LogInPage,
    SignUpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    WhiteBoardsServiceProvider
  ]
})
export class AppModule {}
