import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnChanges{

  constructor() { }

  @Input() schedule!: any; //from parent
  
  ngOnChanges(): void {
    console.log(this.schedule)
    
    
  }
  
}
