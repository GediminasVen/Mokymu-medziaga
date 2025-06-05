
import { useState } from 'react'
import './App.css'
import { store } from './store';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  // let [count, setCount] = useState(0);
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  


  const increment = () => {
    dispatch({type: 'INCREMENT'})
  }

  const decrement = () => {
    dispatch({type: 'DECREMENT'})

    // setCount(prevState => prevState - 1)
  }

  const reset = () => {
    dispatch({type: 'RESET'})

    // setCount(0)
  }

  
  return (
    <div className='container'>
      <h1>
        <input type="number" disabled value={count} />
      </h1>
      <div>
        <button className='btn incBtn' onClick={increment}>+</button>
        <button className='btn decBtn' onClick={decrement}>-</button>
      </div>

      <div>
        <button className='btn resetBtn' onClick={reset}>Reset</button>
      </div>

    </div>
  )
}

export default App
