import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-table-mobile',
  templateUrl: './student-table-mobile.component.html',
  styleUrls: ['./student-table-mobile.component.scss']
})
export class StudentTableMobileComponent implements OnInit {

  constructor() { }

  @Input() data?: any;

  ngOnInit(): void {
  }

}
