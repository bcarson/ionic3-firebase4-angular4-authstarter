import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage, ProfilePage } from '../../../pages/pages';
import { AuthProvider } from '../../../providers/auth/auth-provider'

@Component({
  selector: 'app-header',
  templateUrl: 'header.html'
})
export class HeaderComponent implements OnInit {
  user: Object;

  constructor(
      private authProvider: AuthProvider,
      private nav: NavController,
      public navParams: NavParams
    ){ }

    profile(){
      this.nav.push(ProfilePage, this.user);
    }

    logout(): void {
      this.authProvider.logout();
      console.log('logged out!');
      this.nav.setRoot(LoginPage);
    }

    ngOnInit(){
      this.authProvider.getCurrentUser()
        .subscribe(data => {
          this.user = data;
        })
      console.log('this.user', this.user);
    }

}
