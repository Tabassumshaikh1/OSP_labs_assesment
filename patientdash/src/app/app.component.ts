import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private fb: FormBuilder) {}
  patientDetails: FormGroup | any;


  ngOnInit() {
    this.patientDetails = this.fb.group({
      addressLine1: '',
      addressLine2: '',
      state: '',
      province: ''
    });
  }

  onSubmit() {
    console.log(this.patientDetails.value);
  }

}
