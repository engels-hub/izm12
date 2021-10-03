import { Component, Input, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-student-table-mobile',
  templateUrl: './student-table-mobile.component.html',
  styleUrls: ['./student-table-mobile.component.scss']
})
export class StudentTableMobileComponent implements OnChanges {

  constructor() { }

  @Input() schedule!: any; //from parent
  columns = new Array();
  search: any;
  filtered: any;
  loaded = false;

  ngOnChanges(): void {
    if (this.schedule && !this.loaded) {
      this.loaded = true;
      this.filtered = this.schedule.data.classes;

    }
  }

  onFilterChange(query: any, time: number) {
    let target = query.target.value.toLowerCase();

    target.split(" ").forEach((element: String) => {

      this.filtered = [];
      let all = this.schedule.data.classes;
      for (let i = 0; i < all.length; i++) {
        let sum = all[i].class;
        sum += this.getClassName(all[i].class);
        if(this.getGrade(all[i].class)<10){
          sum+="pamatskola"
        }else{
          sum+="vidusskola"
        }
        for (let j = 0; j < all[i].lessons.length; j++) {
          sum += this.getRoomSum(all[i].lessons[j]);
        }
        sum = sum.toLowerCase();
        if (sum.includes(element)) {
          this.filtered.push(all[i]);
        }
      }
    });
  }

  public getRoomSum(lesson: any) {
    let lessonSum = lesson.lessonNumber + ".";
    for (let i = 0; i < lesson.rooms.length; i++) {
      lessonSum += lesson.rooms[i].room + ".";
      lessonSum += lesson.rooms[i].subject;
      lessonSum += lesson.rooms[i].teacherName;
      lessonSum += this.tryNote(lesson.rooms[i].note);
    }
    if (!lesson.rooms.length)
      lessonSum += "stundanenotiek";
    return lessonSum;
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

  public getGrade(className: any) {
    let number = className.replace(/[a-zA-Z]/i, '');
    return number;
  }

  public emptySearch(){
    this.search='';
    this.filtered=this.schedule.data.classes;
  }





}
