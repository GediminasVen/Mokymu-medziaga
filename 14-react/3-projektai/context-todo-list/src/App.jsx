
import './App.css'
import AddTodo from './components/AddToDo'
import Filter from './components/Filter'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='todo-app'>
      <h1>Todo list</h1>
      <AddTodo/>
      <TodoList/>
      <Filter/>
    </div>
  )
}

export default App