import { AuthService } from './../../providers/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  schedulerToggle = false as boolean;
  isAuthenticated: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isAuthenticated = this.auth.isAuthenticated;
  }

}
