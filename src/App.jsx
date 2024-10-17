import { useState } from 'react';
import Posts from './Posts';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h3>React Core Concepts</h3>
    <ol>
      <li>Components</li>
      <li>JSX</li>
      <li>Props</li>
      <li>Event Handler</li>
      <li>State</li>
      <li>Load Data</li>
    </ol>
    <hr />
    <Posts></Posts>
    </>
  )
}

export default App
