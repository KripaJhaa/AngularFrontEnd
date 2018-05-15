import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../Models/Course';
import { Batch } from '../Models/Batch'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {

  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>("http://127.0.0.1:8800/courses")
  }

  addCourses(name: string): Observable<Course> {
    return this.http.post<Course>("http://127.0.0.1:8800/courses?name=" + name, name)
  }

  addbatch(name: string, id: number) {
    return this.http.post<Batch>("http://127.0.0.1:8800/courses/" + id + "/batches?name="+name,httpOptions)
  }

  viewbatch(id:number){
    
    return this.http.get<Batch[]>("http://127.0.0.1:8800/courses/" + id + "/batches",httpOptions)
  }
}
