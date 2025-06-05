import AddToDo from '../components/AddToDo'
import Filter from '../components/Filter'
import TodoList from '../components/TodoList'
import './App.css'

function App() {

  return (
    <div className='todo-app'>
      <h1>Todo list</h1>
      <AddToDo />
      <TodoList />
      <Filter />
    
    </div>
  )
}

export default App
