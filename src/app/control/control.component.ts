import { Component } from '@angular/core';
import { TodoService } from '../todo-service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
})
export class ControlComponent {
  todoTitle: string;
  status: string;

  constructor(private todoService: TodoService) {}

  onAddTodo(title: string, status: string) {
    if (!this.todoTitle) return;
    else this.todoTitle = '';
    this.todoService.addTodo(title, status);
  }
}
