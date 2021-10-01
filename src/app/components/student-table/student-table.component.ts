import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  constructor() { }

  @Input() data?: any;

  ngOnInit(): void {
  }

}
