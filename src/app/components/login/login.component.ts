import { Router } from '@angular/router';
import { AuthService } from './../../providers/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.compose([Validators.email, Validators.required])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {
  }

  /**
   * Local User Login
   * TODO: Swith to API call for token auth
   */
  loginUser() {
    /*
    if (this.auth.login(this.loginForm.value.email, this.loginForm.value.password)) {
      this.router.navigate(['']);
    } else {
      this.loginForm.reset();
    }
    */
   this.auth.login(this.loginForm.vallue.email, this.loginForm.value.password);
  }

}
