import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slice/TodoSlice';

const store = configureStore({
    reducer: {
        todos: todosReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>

export default store;