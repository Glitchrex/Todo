import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { todo } from '../../Models/todo.model';
import { TodoserviceService } from '../../Services/todoservice.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-task',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,CommonModule],
  templateUrl: './view-task.component.html',
  styleUrl: './view-task.component.css'
})
export class ViewTaskComponent implements OnInit {
  status : String = "New";
  done:boolean=false;
  tasks:todo[]=[];
  Uid:string="";

  constructor(private todoservice:TodoserviceService){}
  ngOnInit(): void {
  this.getalltask();  
  }

  getalltask(){
    this.todoservice.gettasks().subscribe({
      next:(task)=>this.tasks=task
    });
  }

  completetask(id:string){
    this.done=true;
    this.todoservice.updatetask(id).subscribe({
      next:(s)=>this.getalltask()
    })
}

  deletetask(id:string){
    this.todoservice.deletetask(id).subscribe({
      next:(s)=>this.getalltask()
    })
  }
}
