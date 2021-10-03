import {
  Component,
  Input,
  OnChanges,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnChanges {

  constructor() {}

  @Input() schedule!: any; //from parent
  columns = new Array();
  search: any;

  ngOnChanges(): void {
    this.columns[0] = new Array();
    this.columns[1] = new Array();
    if (this.schedule){

      for (let i = 0; i < this.schedule.data.classes.length; i++) //divide data into two columns
      {
        this.columns[i % 2].push(this.schedule.data.classes[i])
      }
    }
  }



  onFilterChange(query: any, time: number) {
    let target = query.target.value.toLowerCase();

    target.split(" ").forEach((element: String)  => {
      console.log(element);
      let all = this.schedule.data.classes;
      for (let i = 0; i < all.length; i++) {
        let sum = all[i].class;
        sum += this.getClassName(all[i].class);
        for (let j = 0; j < all[i].lessons.length; j++) {
          sum += this.getRoomSum(all[i].lessons[j]);
        }
        sum = sum.toLowerCase();
        console.log(sum.includes(element))
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
    return number + "." + letter
  }







}
