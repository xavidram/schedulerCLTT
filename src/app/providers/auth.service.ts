import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean;
  isAnAdmin: boolean;

  credentials: {
    email: 'user@local.com',
    password: 'localpwd',
  };

  localUsr = {
    id: 4123123,
    name: 'John Doe',
    colttid: 'colttjdoe',
    approle: 'helpdesk',
    role: 'user',
    color: 'ffffff'
  } as User;

  COLTTAPI = 'https://testcolttapps.test-utrgv.net/calendar_API/API/';
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/x-www-form-urlencoded' })
  };

  constructor(private http: HttpClient) { }

  /**
   *  Local User Authentication for login
   * @param {string} email - User Email
   * @param {string} password - User Password
   */
  login(email: string, password: string): any {
    /*
    if (this.credentials.email === email && this.credentials.password === password) {
      this.isAuth = true;
      return true;
    }
    return false;
    */
    return this.http.post(
      this.COLTTAPI + 'login',
      { // Data
        username: email,
        password: password
      },
      { // Options
        headers: new HttpHeaders({ 'content-type': 'application/x-www-form-urlencoded' })
      }
    ).subscribe(console.log);
  }

  get isAuthenticated(): boolean {
    return true ? this.isAuth : false;
  }

  get isAdmin(): boolean {
    return true ? this.isAnAdmin : false;
  }

  get userData(): User {
    return this.localUsr;
  }
}
