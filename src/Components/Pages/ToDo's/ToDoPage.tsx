import TodoInput from './utilities/TodoInput'
import TodoContainer from './container/TodoContainer'
import { TodosPage } from './todoPage.styles'

const ToDoPage = () => {
    return (
        <TodosPage>
            <TodoInput />
            <TodoContainer />
        </TodosPage>
    )
}

export default ToDoPage