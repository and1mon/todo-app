import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input("todo") todo!: Todo;

  constructor() { }

  ngOnInit(): void {
  }
}
