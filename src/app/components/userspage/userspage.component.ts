import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { Observable } from 'rxjs';
import { User } from './../../models/user';

@Component({
  selector: 'app-userspage',
  templateUrl: './userspage.component.html',
  styleUrls: ['./userspage.component.scss']
})
export class UserspageComponent implements OnInit {

  Users: Observable<User[]>;
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      colttid: {
        title: 'COLTT ID'
      },
      department: {
        title: 'Department'
      },
      color: {
        title: 'Color Code'
      }
    }
  };

  constructor(private _dataService: DataService) {
    this._dataService.getUserData().subscribe(data => {
      this.Users = data;
    });
  }

  ngOnInit() {
  }

}
