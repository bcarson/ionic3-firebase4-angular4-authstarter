import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth-provider';
/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  public signupForm: FormGroup;
  email: any;
  password: any;
  username: any;
  error: any;
  public loading:Loading;

  constructor(public nav: NavController, public navParams: NavParams, private fb: FormBuilder,  public authProvider: AuthProvider,public loadingCtrl: LoadingController,) {

    console.log('I got this from the navParams:', this.navParams.data);
    this.signupForm = this.fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'username': ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });

    this.email = this.signupForm.controls['email'];
    this.password = this.signupForm.controls['password'];
    this.username = this.signupForm.controls['username'];
  }


  //Initiate the Signup
  submit(): void {

    if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else {

      this.authProvider.registerUser(this.email.value, this.password.value).subscribe(registerData => {
        console.log(registerData);
        this.loading.dismiss();
        console.log('User is registered and logged in.');

      }, registerError => {
        console.log(registerError);
        if (registerError.code === 'auth/weak-password' || registerError.code === 'auth/email-already-in-use')
        {
          alert(registerError.message);
        }
        this.error = registerError;
      });

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
}
