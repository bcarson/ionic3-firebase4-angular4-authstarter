import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Request, Volunteer } from '../../common/models';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'page-request',
  templateUrl: 'request.html'
})
export class RequestPage implements OnInit {
  requestForm: FormGroup;


  constructor(
    public datePicker: DatePicker,
    public navCtrl: NavController,
    public fb: FormBuilder
  ) {

  }

  ngOnInit(): void{
    this.requestForm = this.fb.group({
      date: ''
    })
  }

  pickDate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date'
    }).then(
      date => console.log('Got date: ', date),
      error => console.log('Oops', error)
    );
  }

}
