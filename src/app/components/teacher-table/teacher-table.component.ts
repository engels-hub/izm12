import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-table',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.scss']
})
export class TeacherTableComponent implements OnInit {

  constructor() { }

  @Input() data?: any;

  ngOnInit(): void {
  }

}
