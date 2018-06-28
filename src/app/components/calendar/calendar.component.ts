import { Component, OnInit } from '@angular/core';
import {
  subDays,
  addDays,
  addMonths,
  subMonths
} from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  view: string = 'month';
  viewDate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  changeDateForward() {
    if(this.view === 'month') {
      this.viewDate = addMonths(this.viewDate, 1);
    } else if (this.view === 'week') {
      this.viewDate = addDays(this.viewDate, 7);
    }else if (this.view === 'day') {
      this.viewDate = addDays(this.viewDate, 1);
    }
  }

  changeDateBackward() {
    if(this.view === 'month') {
      this.viewDate = subMonths(this.viewDate, 1);
    } else if (this.view === 'week') {
      this.viewDate = subDays(this.viewDate, 7);
    }else if (this.view === 'day') {
      this.viewDate = subDays(this.viewDate, 1);
    }
  }

}
