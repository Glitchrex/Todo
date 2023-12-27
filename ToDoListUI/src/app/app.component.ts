import { Component,OnInit } from '@angular/core';
import { NewTaskComponent } from './Components/new-task/new-task.component';
import { RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewTaskComponent } from './Components/view-task/view-task.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgbNavModule ,NewTaskComponent,ViewTaskComponent,HttpClientModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){
  }
  
  
}
