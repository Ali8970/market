import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;
  loginMode = true;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.signupForm = new FormGroup({
        username: new FormControl(null, [Validators.required]),
        email: new FormControl(null,[Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required]),
      })
  }

  onSwitchMode(){
    this.loginMode = !this.loginMode;
  }
  onSubmit(){}

}





