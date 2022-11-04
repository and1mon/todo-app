import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Todo } from '../services/todo-list.service';
import { AppState } from '../state/app.state';
import { addTodo, loadTodos, removeTodo } from '../state/todos/todo.actions';
import { selectAllTodos } from '../state/todos/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  inputField: string = '';
  allTodos$ = this.store.select(selectAllTodos);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
   this.store.dispatch(loadTodos());
  }

  addTodo() {
    if (this.inputField === '') {
      return;
    }

    this.store.dispatch(addTodo({ task: this.inputField }));
    this.inputField = '';
  }

  removeTodo(id: string) {
    this.store.dispatch(removeTodo({ id: id }));
  }
}
