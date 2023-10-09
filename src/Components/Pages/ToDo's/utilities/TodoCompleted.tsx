import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../redux/store'
import { Todo, removeAllCompletedTodos } from '../../../redux/slice/TodoSlice';
import { TodosList, TodoContainer, Span, ButtonClear } from './styles/todos.styles';

const TodoCompleted: React.FC = () => {

    const completedTodos: Todo[] = useSelector((state: AppState) => state.todos.completedTodos);
    const dispatch = useDispatch();

    const handleRemoveAllTodos = () => {
        dispatch(removeAllCompletedTodos());
    }

    const isCompletedListEmpty = completedTodos.length === 0;

    return (
        <TodosList>
            {completedTodos.length === 0 ? (
                <p>Ninguna tarea realizada</p>
            ) : (
            completedTodos.map((todoCompleted) => (
                <TodoContainer
                    key={todoCompleted.id}
                >
                    <Span>{todoCompleted.message}</Span>

                </TodoContainer>
                ))
            )}
            <ButtonClear onClick={() => handleRemoveAllTodos()} disabled={isCompletedListEmpty}>
                Borrar Lista
            </ButtonClear>
        </TodosList>
    )
}

export default TodoCompleted