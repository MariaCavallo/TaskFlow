import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../redux/store'
import { removeTodo, completedTodo } from '../../../redux/slice/TodoSlice'
import { FaTrashAlt, FaCheck } from 'react-icons/fa'
import { BtnsContainer, Buttons, TodosList, TodoContainer, Span } from './styles/todos.styles'

const TodoList: React.FC = () => {

    const todos = useSelector((state: AppState) => state.todos);
    const dispatch = useDispatch();

    const handleRemoveTodo = (id: string) => {
        dispatch(removeTodo(id));
    }

    const handleCompletedTodo = (id: string) => {
        dispatch(completedTodo(id));
    }

    return (
        <TodosList>
            {todos.todos.length === 0 ? (
                <p>Ninguna tarea pendiente</p>
            ) : (
            todos.todos.map((todo) => (
                <TodoContainer
                    key={todo.id}
                >
                    <Span>{todo.message}</Span>
                    <BtnsContainer>
                        <Buttons
                            $primary={false}
                            onClick={() => handleRemoveTodo(todo.id)}
                        >
                            <FaTrashAlt />
                        </Buttons>
                        <Buttons
                            $primary={true}
                            onClick={() => handleCompletedTodo(todo.id)}
                        >
                            <FaCheck />
                        </Buttons>
                    </BtnsContainer>
                </TodoContainer>
            ))
        )}
        </TodosList>
    )
}

export default TodoList;