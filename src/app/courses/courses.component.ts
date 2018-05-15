import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private coursesSerice: CoursesService) { }

  ngOnInit() {
    this.listAllCourses()
  }

  addCourse(para) {

  }

  listAllCourses() {
    this.coursesSerice.getCourses().subscribe((courses) => {
      console.log(courses)
    })
  }

}
