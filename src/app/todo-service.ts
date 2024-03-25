import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList = [
    {
      title: 'Moringing Exercises',
      status: 'completed',
    },
    {
      title: 'Healthy Breakfast',
      status: 'ongoing',
    },
    {
      title: 'Test 3',
      status: 'ongoing',
    },
  ];

  addTodo(title: string, status: string) {
    this.todoList.push({
      title,
      status,
    });
  }

  updateTodo(title: string, id: number) {
    this.todoList[id].title = title;
  }

  updateStatus(id: number, status: string) {
    this.todoList[id].status = status;
  }

  deleteTodo(id: number) {
    this.todoList.splice(id, 1);
  }
}
