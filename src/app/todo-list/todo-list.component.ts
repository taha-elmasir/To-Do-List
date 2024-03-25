import { Component } from '@angular/core';
import { TodoService } from '../todo-service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todoList: { title: string; status: string }[] = [];
  hideSort = true;

  constructor(private todoService: TodoService) {
    this.todoList = todoService.todoList;
  }

  onSort(type: string) {
    this.hideSort = true;
    if (type !== 'all')
      this.todoList = this.todoService.todoList.filter(
        (todo) => todo.status === type
      );
    else this.todoList = this.todoService.todoList;
    console.log(this.todoList)
  }
}
