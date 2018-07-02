import { User } from './../../models/user';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  activeUsrs: User[];

  constructor(private _dataSevice: DataService) { }

  ngOnInit() {
    this.activeUsrs = this._dataSevice.getActiveUsers();
  }

}
