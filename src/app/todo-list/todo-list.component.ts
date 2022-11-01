import { Component, OnInit } from '@angular/core';
import { Todo } from '../services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  inputField: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  todos: Todo[] = [
    {
      id: 1,
      task: "test",
      done: false
    },
    {
      id: 2,
      task: "test2",
      done: true
    }
  ]

  addTodo() {
    if (this.inputField === "") {
      return
    }

    this.todos.push(
      {
        id: this.todos[this.todos.length].id + 1,
        task: this.inputField,
        done: false
      });
    this.inputField = "";
  }

}
