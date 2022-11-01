import { state } from "@angular/animations";
import { identifierName } from "@angular/compiler";
import { discardPeriodicTasks } from "@angular/core/testing";
import { createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/services/todo-list.service";
import { addTodo, loadTodos, loadTodosFailure, loadTodosSuccess, removeTodo } from "./todo.actions";

export interface TodoState {
    todos: Todo[];
    error: string | null;
    status: "pending" | "loading" | "error" | "success";
}

export const initialState: TodoState = {
    todos: [],
    error: null,
    status: 'pending'
}

export const todoReducer = createReducer(
    initialState,
    on(addTodo, ( state, { task }) => ({
        ...state,
        todos: [...state.todos, { id: Date.now().toString(), task: task, done: false }]
    })),

    on(removeTodo, (state, { id }) => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
    })),

    on(loadTodos, (state) => ({ ...state, status: "loading" })),
    
    on(loadTodosSuccess, (state, { todos }) => ({
        ...state,
        todos: todos,
        error: null,
        status: "success"
    })),

    on(loadTodosFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: "error"
    })),
)