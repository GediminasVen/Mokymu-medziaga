import { useTodoStore } from "../store/store";
import Todo from "./Todo";

const TodoList = () => {
    const todos = useTodoStore(state => state.todos);
    const filter = useTodoStore(state => state.filter);
    const addTodo = useTodoStore(state => state.addTodo);

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'incompleted') return !todo.completed;
        return true;
    });

 

    return (
        <ul className="todo-list">
            {filteredTodos.map(todo => (
                <li key={todo.id}>
                    <Todo todo={todo} />
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
