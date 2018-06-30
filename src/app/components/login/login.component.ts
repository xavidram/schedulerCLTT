import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../providers/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() loginEvent = new EventEmitter<boolean>();
  loginForm: FormGroup;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router, private route: ActivatedRoute) {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.compose([Validators.email, Validators.required])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  /**
   * Local User Login
   * TODO: Swith to API call for token auth
   */
  loginUser() {
   this.auth.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
     () => {
       this.loginEvent.emit(true);
       this.router.navigateByUrl(this.returnUrl);
     }, () => {
       this.loginForm.reset(); // reset all fields
     }
   );
  }

}
