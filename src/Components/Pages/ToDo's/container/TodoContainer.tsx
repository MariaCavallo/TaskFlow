import TodoList from '../utilities/TodoList';
import TodoCompleted from '../utilities/TodoCompleted';
import { PendingAndCompletedTodosContainer, SubTitle, TodosContainerAll } from './todoContainer.styles';

const TodoContainer: React.FC = () => {

    return (
        <TodosContainerAll>
            <PendingAndCompletedTodosContainer>
                <SubTitle>ToDo's Pendientes</SubTitle>
                <TodoList />
            </PendingAndCompletedTodosContainer>
            <PendingAndCompletedTodosContainer>
                <SubTitle>ToDo's Realizadas</SubTitle>
                <TodoCompleted />
            </PendingAndCompletedTodosContainer>
        </TodosContainerAll>
    )
}

export default TodoContainer