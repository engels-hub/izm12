import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FofComponent } from './components/fof/fof.component'; //404
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { ImportantComponent } from './components/important/important.component';
const routes: Routes = [
  {path: '', redirectTo: '/student', pathMatch: 'full'}, //default redirect
  {path: 'student', component: StudentsComponent},
  {path: 'teacher', component: TeachersComponent},
  {path: 'important', component: ImportantComponent},
  {path: '**', component: FofComponent} //every other page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
