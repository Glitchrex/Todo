import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { todo } from '../Models/todo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor(private http:HttpClient) { }

  gettasks():Observable<todo[]>{
    return this.http.get<todo[]>("https://localhost:7207/api/Todo");
  }
  addtask(newTask:todo):Observable<todo>{
    newTask.id = '00000000-0000-0000-0000-000000000000';
    newTask.status = 'New';
    return this.http.post<todo>("https://localhost:7207/api/Todo",newTask);
  }
  updatetask(id:string):Observable<todo>{
    return this.http.put<todo>(`https://localhost:7207/api/Todo/${id}`,'');
  }
  deletetask(id:string):Observable<todo>{
    return this.http.delete<todo>(`https://localhost:7207/api/Todo/${id}`);
  }
}
