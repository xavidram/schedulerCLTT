import { AuthService } from './../../providers/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  schedulerToggle = false as boolean;
  isAuthenticated: Observable<boolean>;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.isAuthenticated = this.auth.isLoggedIn();
  }

  logOut() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
