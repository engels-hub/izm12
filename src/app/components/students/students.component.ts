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
  firstDate = "First day";
  secondDate = "Second day";

  constructor(private schedule: HttpGetService){}
  ngOnInit(){
    this.schedule.getData('students')?.subscribe(resp=>{
      this.a=resp.body;
      try {
        this.firstDate = this.schedule.getDate(parseInt(this.a.data.date));
      } catch (e) {}
    })
    this.schedule.getData('studentst')?.subscribe(resp=>{
      this.b=resp.body;
      try {
        this.secondDate = this.schedule.getDate(parseInt(this.b.data.date));
      } catch (e) {}
    })
  }
}
