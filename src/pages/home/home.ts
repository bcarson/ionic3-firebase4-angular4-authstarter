import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth-provider';
import {Md5} from 'ts-md5/dist/md5';
import * as Pages from '../../pages/pages'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myUser: any;
  user: any;
  email: any;
  password: any;
  providerId: any;
  photoURL: string;
  uid: any;

  constructor(
    public authProvider: AuthProvider,
    //public fb: FormBuilder,
    private nav: NavController,
    public navParams: NavParams
    )
  {
    //this.userInfo = this.navParams.data;  //this comes fromm app.component
  }


  navigate(page){
    /*
     * Obviously you're not going to send them to the SignupPage after they're logged in.
     * I was just throwing in a navigation method using the built-in ionic 'stack' navigation. :)
     * You'll notice if you use nav.push, you'll get a 'Back' button in your main navigation bar.
     * Also sending random data along for fun, we'll retrieve it and write to console on SignupPage.
     */
    this.nav.push(Pages[page], 'carrying this random data from home to signup via navParams');
  }

  logout(): void {
    this.authProvider.logout();
    console.log('logged out!');
  }

  ngOnInit(){
    // this is an Angular method which will fire when Angular is ready
    //console.log('ngOnInit - Home Page');
  }

  ngOnDestroy(){
    // this is an Angular met   hod which will fire when you navigate away from this page
  }

  ionViewDidLoad(){
    // this is an Ionic method that will fire ONCE after the page is loaded the first time
    // No guarantee this will fire, if its cached it will use that.
    console.log('ionViewDidLoad - Home Page');

    // this is the magic code :D
    this.myUser = this.authProvider.getCurrentUser();
    this.myUser.subscribe(user => {


      console.log(user);
      this.user = user;

    });

  }

  ionViewWillEnter(){
  // this is an Ionic method that will fire each time BEFORE the page is loaded
  }

  ionViewWillLeave(){
    // this is an Ionic method that will fire each time BEFORE the user leaves the page
    console.log('ionViewWillLeave - Home Page');
  }

  ionViewDidUnload(){
    // this is an Ionic method that will fire each time AFTER the user leaves the page
  }



}
