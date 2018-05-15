import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachers/teachers.component';


const routes: Routes = [
    { path: 'Course',  component: CoursesComponent },
    { path: 'Student',  component: StudentsComponent },
    { path: 'Subject',  component: SubjectsComponent },
    { path: 'Teacher',  component: TeachersComponent },
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    
  })
  export class AppRoutingModule {
    static components = [ 
      CoursesComponent,
      StudentsComponent,
      SubjectsComponent,
      TeachersComponent
    ];
  }