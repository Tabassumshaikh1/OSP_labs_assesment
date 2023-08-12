import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  patientDetails: FormGroup | any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.patientDetails = this.fb.group({
      first_Name:'',
      last_name:'',
      phone:'',
      email:'',
      addressLine1: '',
      addressLine2: '',
      city:'',
      state: '',
      zipcode:''
    });
  }

  onSubmit() {
    console.log(this.patientDetails.value);
  }
}
