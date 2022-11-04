import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input("todo") todo!: Todo;
  @Output("delete") deleteItem = new EventEmitter<string>;

  constructor() { }

  removeItem(id: string) {
    this.deleteItem.emit(id);
  }

  ngOnInit(): void {
  }


}
