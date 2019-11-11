import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  locale = 'en';
  selectedDate: any;

  constructor() { }

  ngOnInit() {
  }

  setSelectedDate(date) {
    this.selectedDate = date;
  }

  canChangeMonthLogic(num, currentDate) {
    currentDate.add(num, 'month');
    const minDate = moment().add(-3, 'year');
    const maxDate = moment().add(3, 'year');
    return currentDate.isBetween(minDate, maxDate);
  }

  isAvailableLogic(dateToCheck: any) {
    if (dateToCheck.isBefore(moment(), 'day')) {
      return false;
      } else {
          return true;
      }
  }

}

