import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../../redux/slice/TodoSlice'
import { AppDispatch } from '../../../redux/store'
import { TodoFormContainer, Title, Input, Label, Button, From, BtnInpContainer } from './styles/todoInput.styles'

const TodoInput: React.FC = () => {
    
    const dispatch: AppDispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            dispatch(addTodo({message: inputValue}));
            setInputValue('');
        }
    }

    return (
        <TodoFormContainer>
            <Title>ToDo's</Title>
            <From 
                onSubmit={handleSubmit}
            >
                <Label htmlFor="todo-input">
                    Ingrese su tarea aquí
                </Label>
                <BtnInpContainer>
                    <Input 
                        id='todo-input'
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Button type="submit">
                        +
                    </Button>
                </BtnInpContainer>
            </From>
        </TodoFormContainer>
    )
}

export default TodoInput