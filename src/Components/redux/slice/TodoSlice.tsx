import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';



export interface Todo {
    id: string,
    message: string,
    completed: boolean
}

export interface TodoPayload {
    message: string
}

export interface TodosState {
    todos: Todo[];
    completedTodos: Todo[]; 
}

const initialState: TodosState = {
    todos: [],
    completedTodos: []
}

const TodoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoPayload>) => {
            const newTodo: Todo = {
                id: uuidv4(),
                message: action.payload.message,
                completed: false,
            }
            state.todos.push(newTodo);
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        removeAllCompletedTodos: (state) => {
            state.completedTodos = [];
        },
        completedTodo: (state, action: PayloadAction<string>) => {
            const completedTodo = state.todos.find(todo => todo.id === action.payload);
            if (completedTodo) {
                completedTodo.completed = true;
                state.completedTodos.push(completedTodo);
                state.todos = state.todos.filter(todo => todo.id !== action.payload)
            }
        }
    }  
})

export const { addTodo, removeTodo, removeAllCompletedTodos, completedTodo } = TodoSlice.actions;
export default TodoSlice.reducer;