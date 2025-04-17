import './App.css';
import { useState } from 'react';
import Todos from './Todos';

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState(["todo 1", "todo 2"])

  const increment = () => {
    setCount((prev) => {
      const newCount = prev + 1

      //setTodos(['todo ${newCount}', '${newCount - 1}'])

      return newCount
  })
  }

  return (
    <div className="App">
      <Todos todos={todos}/>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
