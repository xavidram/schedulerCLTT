import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

/** RXJS Operators */
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/share';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
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
  login(email: string, password: string) {
    /*
    if (this.credentials.email === email && this.credentials.password === password) {
      this.isAuth = true;
      return true;
    }
    return false;
    */
    const body = `username=${email}&password=${password}`;
    return this.http.post(
      this.COLTTAPI + 'login',
      body,
      { // Options
        headers: new HttpHeaders({ 'content-type': 'application/x-www-form-urlencoded' })
      }
    ).do((res) => this.setSession(res)).shareReplay();
  }

  /**
   * Set user Session
   * @param authResult login querey result
   */
  private setSession(authResult) {
    // set expiration date 2 minute for testing
    const expiresAt = moment().add(120, 'seconds');
    localStorage.setItem('token', authResult.auth_token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    this.isLoggedInSubject.next(true);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  /**
   * Sign User Out, Delete Token
   */
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    this.isLoggedInSubject.next(false);
  }

  /**
   * Get Token Expiration
   */
  get expires() {
    return moment(JSON.parse(localStorage.getItem('expires_At')));
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable().share();
  }

  isAdmin(): boolean  {
    return false;
  }

}
