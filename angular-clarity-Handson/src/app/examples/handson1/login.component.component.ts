import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent  {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // create our form group with all the inputs we will be using in the template
    this.form = this.formBuilder.group({
      fEmail: ['', [Validators.required, Validators.email]],
      fPassword: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      alert(this.form.value);
    }
  }

}
