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

  constructor() { }

  /**
   *  Local User Authentication for login
   * @param {string} email - User Email
   * @param {string} password - User Password
   */
  login(email: string, password: string): boolean {
    if (this.credentials.email === email && this.credentials.password === password) {
      this.isAuth = true;
      return true;
    }
    return false;
  }

  /**
   * Logs user out Locally
   */
  logout() {
    this.isAuth = false;
    return false;
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
