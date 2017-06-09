import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth-provider';
import { ResetPasswordPage } from '../reset-password/reset-password';
import {SignupPage} from '../signup/signup';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  email: any;
  password: any;
  error: any;
  signupPage = SignupPage;
  resetPasswordPage = ResetPasswordPage; //Added reset password page

  constructor(
    public nav: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public fb: FormBuilder,
    public keyboard: Keyboard
  ){

    this.loginForm = this.fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
    this.keyboard.onKeyboardShow().subscribe(data => console.log('keyboard!',data));
  };




  login(method){
    this.authProvider.login(method, this.email.value, this.password.value).subscribe(data =>{
      console.log(data);
    }, error=>{
      console.log(error);
      if (error.code == 'auth/user-not-found') {
        alert('User not found');
      }
    });
  }

  logout(): void {
    this.authProvider.logout();
    console.log(' logged out !');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

