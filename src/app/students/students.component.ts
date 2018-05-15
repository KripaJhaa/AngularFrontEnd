import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Student } from '../Models/Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentList:Student[]

  constructor(private studentService:StudentsService) { }

  ngOnInit() {
  }

  listAllStudents(){
    this.studentService.getStudents().subscribe((students) => {
      console.log(students)
      this.studentList = students
    })}

    addStudents(name:string){
      this.studentService.addStudents(name).subscribe((b)=>{  
        alert("Added")
      })  
    }

  }


