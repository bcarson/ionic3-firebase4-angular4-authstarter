import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider} from '../providers/auth/auth-provider';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePicker } from '@ionic-native/date-picker';
import { Keyboard } from '@ionic-native/keyboard';

import { 
  AboutPage,
  ContactPage,
  HomePage,
  LoginPage,
  ProfilePage,
  RequestPage,
  ResetPasswordPage,
  SignupPage,
  TabsPage
} from '../pages/pages';

import {
  HeaderComponent
} from '../common/components'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


export const firebaseConfig = {
  apiKey: "AIzaSyDKTk6VjHbMofnmH_oUOaAbU1hQxoxQSA0",
  authDomain: "jabberdawg.firebaseapp.com",
  databaseURL: "https://jabberdawg.firebaseio.com",
  storageBucket: "jabberdawg.appspot.com",
  messagingSenderId: "919173773458"
};

@NgModule({
  declarations: [
    MyApp,
    // PAGES:
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    ProfilePage,
    RequestPage,
    ResetPasswordPage,
    SignupPage,
    TabsPage,
    // COMPONENTS:
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    ProfilePage,
    RequestPage,
    ResetPasswordPage,
    SignupPage,
    TabsPage
  ],
  providers: [
    DatePicker,
    Keyboard,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
