import { Component, Input } from '@angular/core';
import { TodoService } from '../../todo-service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input('todoInfo') todo: { title: string; status: string };
  @Input() id: number;
  updatedTitle: string;
  isUpdating: boolean = false;
  @Input() isChecked: boolean;

  constructor(private todoService: TodoService) {}

  onUpdateTodo() {
    if (!this.updatedTitle) return;
    this.todoService.updateTodo(this.updatedTitle, this.id);
    this.updatedTitle = '';
    this.isUpdating = false;
  }

  onUpdateStatus(event: Event) {
    const checked = event.target['checked'];
    this.todoService.updateStatus(this.id, checked ? 'completed' : 'ongoing');
    this.isChecked = checked;
  }

  onDeleteTodo() {
    this.todoService.deleteTodo(this.id);
  }
}
