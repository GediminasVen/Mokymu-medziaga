import { useTodoStore } from '../store/store'; c
const Todo = ({ todo }) => {
    const toggleToDo = useTodoStore(state => state.toggleToDo);

    const onTodoClick = (id) => {
        toggleToDo(id);
    };

    return (
        <>
            {todo && (
                <span onClick={() => onTodoClick(todo.id)}>
                    <input 
                        type="checkbox" 
                        checked={todo.completed} 
                        readOnly
                    />
                    {todo.name}
                </span>
            )}
        </>
    );
};

export default Todo;
