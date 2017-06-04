import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth-provider';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myUser: any;
  userInfo: any;
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


  //navigate(){
    /*
     * Obviously you're not going to send them to the SignupPage after they're logged in.
     * I was just throwing in a navigation method using the built-in ionic 'stack' navigation. :)
     * You'll notice if you use nav.push, you'll get a 'Back' button in your main navigation bar.
     * Also sending random data along for fun, we'll retrieve it and write to console on SignupPage.
     */
 //   this.nav.push(SignupPage, 'carrying this random data from home to signup via navParams');
 // }

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
    console.log('whatever');
  }

  ionViewWillEnter(){

    // this is the magic code :D
    this.myUser = this.authProvider.getCurrentUser();
    this.myUser.subscribe(user => {
      //console.log(user);
     //this.userInfo = user;

      if(user){ this.email = user.providerData[0].email || user.email; }

      if (user.providerData[0].photoURL) {
        this.photoURL = user.photoURL;
      }else{
        console.log('using email based gravatar image');
         this.photoURL = "https://www.gravatar.com/avatar/" + Md5.hashStr(this.email);
      }
      //get user uid
      this.uid = user.uid;
      this.providerId = user.providerData[0].providerId;


    });



    // this is an Ionic method that will fire each time BEFORE the page is loaded
    // No caching issues
    // console.log('ionViewWillEnter - Home Page');
    // this.userInfo = this.navParams.data;  //this comes fromm app.component
    // console.log('navParams.data', this.navParams.data);
    // console.log('from home.ts=',this.userInfo);
    //this.buildUserObject();
    /*This builds a user object (currentUserInfo) which can then be used to make the user object
     homogenous over a wide range of auth providers. The data is fed by the userInfo object, which unfortunately has
     different forms depending on the provider. We also can fill in the blanks for any missing data, making the
     currentUserInfo object suitable for cross page data sharing and firebase user data for database store.

     notes on twitter avatars:
     If a user changes their profile settings, such as avatar, firebase has previously cached the twitter user details.
     This will expire at some point ??- I deleted the user in the Firebase dashboard and re-logged in, at which point
     all the profile changes are propagated. This likely applies to Facebook & Google methods as well.

     Pull the user email. This can come from 2 sources (userInfo.email or userInfo.providerData[0].email)
     depending on the auth provider. Specifically, for google auth, the email field in userInfo.email is blank on successful login,
     instead use the providerData array for google email.
     */

    // if (this.userInfo.providerData) {
    //   this.email = this.userInfo.providerData[0].email;
    //   //get the auth provider
    //   this.providerId = this.userInfo.providerData[0].providerId;
    // }else{
    //   this.email = this.userInfo.email;
    //   this.providerId = 0;
    // }

    // get avatar- if no photourl, pull from gravatar:
    // if gravatar doesn't resolve, you'll get a gravatar anonymous image returned.

  }

  ionViewWillLeave(){
    // this is an Ionic method that will fire each time BEFORE the user leaves the page
    console.log('ionViewWillLeave - Home Page');
  }

  ionViewDidUnload(){
    // this is an Ionic method that will fire each time AFTER the user leaves the page
  }



}
