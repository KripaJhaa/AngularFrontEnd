import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course } from '../Models/Course';
import { Batch } from '../Models/Batch';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesList: Course[]
  batchList:Batch[]


  constructor(private courseService: CoursesService) {
    this.coursesList = []
    this.batchList=[]
  }

  ngOnInit() {

  }

  selected(id: number) {
    let name = prompt("Enter the Name Of Batch", "")
    this.courseService.addbatch(name,id).subscribe(()=>{
      alert("done")
    })
  }

  seeBatch(id:number){
    this.courseService.viewbatch(id).subscribe((b) => {
      this.batchList=b
    })
  }


  addCourses(name: string) {
    this.courseService.addCourses(name).subscribe((b) => {
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
