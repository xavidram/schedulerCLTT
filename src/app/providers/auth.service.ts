import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean;
  isAnAdmin: boolean;

  localUsr = {
    email: 'user@local.com',
    password: 'localpwd'
  };

  constructor() { }

  /**
   *  Local User Authentication for login
   * @param {string} email - User Email
   * @param {string} password - User Password
   */
  login(email: string, password: string): boolean {
    if (this.localUsr.email === email && this.localUsr.password === password) {
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
}
