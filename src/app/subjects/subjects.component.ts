import { Component, OnInit } from '@angular/core';
import { Subject } from '../Models/Subject';
import { SubjectsService } from '../services/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjectList:Subject[]

  constructor(private subjectService:SubjectsService) { }

  ngOnInit() {
  }

  listAllSubjects(){
    this.subjectService.getSubjects().subscribe((subjects) => {
      console.log(subjects)
      this.subjectList = subjects
    })
  }


  addSubjects(name:string){
    this.subjectService.addSubjects(name).subscribe((b)=>{  
      alert("Added")
    })  
  }

}
