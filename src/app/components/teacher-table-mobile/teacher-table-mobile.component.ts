import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teacher-table-mobile',
  templateUrl: './teacher-table-mobile.component.html',
  styleUrls: ['./teacher-table-mobile.component.scss']
})
export class TeacherTableMobileComponent implements OnInit {

  constructor() { }

  @Input() schedule!: any; //from parent
  columns = new Array();
  search: any;
  filtered: any;
  loaded = false;

  ngOnInit():void{
    this.columns[0] = new Array();
    this.columns[1] = new Array();
  }
  ngOnChanges(): void {
    if (this.schedule && !this.loaded) {
      this.loaded = true;
      this.filtered = this.schedule.data.teachers;
    }

  }

  onFilterChange(query: any, time: number) {
    let target = query.target.value.toLowerCase();

    target.split(" ").forEach((element: String) => {

      this.filtered = [];
      let all = this.schedule.data.teachers;
      for (let i = 0; i < all.length; i++) {
        let sum = all[i].teacherName.replace(' ', '');
        for (let j = 0; j < all[i].lessons.length; j++) {
          sum+=all[i].lessons[j].lessonNumber+".";
          sum+=all[i].lessons[j].class;
          sum+=this.getClassName(all[i].lessons[j].class);
          sum+=all[i].lessons[j].room+".";
          sum+=this.tryNote(all[i].lessons[j].note);
        }
        sum = sum.toLowerCase();

        if (sum.includes(element)) {
          this.filtered.push(all[i]);
        }
      }


    });
  }


  public tryNote(note: any) {
    try {
      return note.noteText
    } catch (error) { //room.note or room.note.noteText might be null
      return ''
    }
  }

  public getClassName(className: any) { //13a -> 13.a
    let number = className.replace(/[a-zA-Z]/i, '');
    let letter = className.replace(number, '');
    return number + "." + letter;
  }

  public emptySearch(){
    this.search='';

    this.filtered=this.schedule.data.teachers;
  }

}
