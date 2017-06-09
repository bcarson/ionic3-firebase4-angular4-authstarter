import { Component, ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireAuth} from "angularfire2/auth";
import { LoginPage, HomePage, TabsPage } from '../pages/pages';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  //rootPage:any = TabsPage;
  //rootPage = LoginPage;
  //nav:Nav;
  pages: Array<any>;

  constructor(
    public platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    public auth: AngularFireAuth
    )
  {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    //Check if user is authenticated
    /* authState is a property that returns an observable.
     We'll subscribe to it so we are notified whenever the authState has changed.
     */

    auth.authState.subscribe((authState)=>{
      if (authState){
        console.log('Logged in user :', authState.email);


        //if I nav to TabsPage here all hell breaks
        this.nav.setRoot(TabsPage, authState); //pass authState to homepage & nav there
      }else{
        this.nav.setRoot(LoginPage);
      }
    });

    /*
    * this.pages is used in the main nav menu in app.html 
    * (top left corner hamburger icon in the application)
    * You'll likely change this list, just getting you started here.
    */
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Home', component: HomePage }
    ];
  }


    /*
    *   This is the method called from the main menu in app.html.
    *   We can navigate between pages with nav.push and nav.pop.
    *   Since this is the main menu, we'll use nav.setRoot here
    *   which will reset the navigation stack, no back button.
    */
    openPage(page) {
      this.nav.setRoot(page.component);
    }
}
