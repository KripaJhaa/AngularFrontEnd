import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../Models/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private http: HttpClient) { 
    
  }
  
  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>("http://127.0.0.1:8800/teachers")
  }
}
