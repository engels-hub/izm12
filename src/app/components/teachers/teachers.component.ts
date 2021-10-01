import { Component, OnInit } from '@angular/core';
import { HttpGetService } from 'src/app/services/http-get.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  a:any;
  b:any;

  constructor(private schedule: HttpGetService){}
  ngOnInit(){
    this.schedule.getData('teachers')?.subscribe(resp=>{
      this.a=resp.body;
    })
    this.schedule.getData('teacherst')?.subscribe(resp=>{
      this.b=resp.body;
    })
  }

}
