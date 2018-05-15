import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../Course';




@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {

  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>("http://127.0.0.1:8800/courses")
  }

}
