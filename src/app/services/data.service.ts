import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './../models/user';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getUserData(): Observable<any> {
    return this.http.get('../../assets/data/users.json');
  }

  public getActiveUsers(): User[] {
    const usrs: User[] = [];
    this.http.get('../../assets/data/users.json').subscribe(data => {
      data.map(usr => {
        if (Math.round(Math.random())) {
          usrs.push(usr);
        }
      });
    });
    return usrs;
  }
}
