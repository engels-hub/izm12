import { Component, OnInit } from '@angular/core';
import { HttpGetService } from 'src/app/services/http-get.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  a:any;
  b:any;
  constructor(private schedule: HttpGetService){}
  ngOnInit(){
    this.schedule.getData('students')?.subscribe(resp=>{
      this.a=resp.body;
    })
    this.schedule.getData('studentst')?.subscribe(resp=>{
      this.b=resp.body;
    })
  }
}
