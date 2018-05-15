import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course } from '../Models/Course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesList: Course[]


  constructor(private courseService: CoursesService) {
    this.coursesList = []
  }

  ngOnInit() {

    
  }

  addCourses(name:string ){
    this.courseService.addCourses(name).subscribe((b)=>{  
      alert("Added ")
    })
    
  }

  listAllCourses() {
    this.courseService.getCourses().subscribe((courses) => {
      console.log(courses)
      this.coursesList = courses
    })
  }

}
