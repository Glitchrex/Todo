import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { todo } from '../../Models/todo.model';
import { HttpClientModule } from '@angular/common/http';
import { TodoserviceService } from '../../Services/todoservice.service';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  newTaskForm! : FormGroup;
  status : String = "New";
  done:boolean = false;
  created!:boolean;
  tasks:todo[] = [];

  constructor(private formBuilder:FormBuilder,private todoservice:TodoserviceService){
    this.newTaskForm = this.formBuilder.group({
      taskName: ['',Validators.required],
      dueDate : ['',Validators.required],
    });
  }
  createTask(){
    if(this.newTaskForm.valid){
      this.created = true;
      this.todoservice.addtask(this.newTaskForm.value).subscribe({
        error:(e)=>console.log("Error",e)
      })
    }
  }
}
