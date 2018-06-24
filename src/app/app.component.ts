import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      //'firstName': new FormControl(null, [Validators.required, CustomValidators.invalidPprojectName],CustomValidators.asyncInvalidProjectName),
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required],CustomValidators.asyncStrongPassword),
      'pincode': new FormControl(null, [Validators.required],CustomValidators.asyncInvalidPincode),
    })
  }

  onSaveProject() {
    console.log(this.projectForm.value);
  }
}
