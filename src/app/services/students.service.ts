import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Student } from '../Models/Student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { 
    
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>("http://127.0.0.1:8800/students")
  }

  addStudents(name: string): Observable<Student> {
    return this.http.post<Student>("http://127.0.0.1:8800/students?name="+name,name)
  }
}
