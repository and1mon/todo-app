import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/services/todo-list.service";

export const addTodo = createAction(
    "[Todo Page] Add Todo",
    props<{ task: string }>()
);

export const removeTodo = createAction(
    "[Todo Page] Add Todo",
    props<{ id: string }>()
);

export const loadTodos = createAction(
    "[Todo Page] Load Todos"
);

export const loadTodosSuccess = createAction(
    "[Todo API] Todo Load Success",
    props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
    "[Todo API] Todo Load Failure",
    props<{ error: string }>()
)