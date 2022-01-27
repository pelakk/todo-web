import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import './App.css';

function App() {

  const loadLocal = () => {
    let data = localStorage.getItem(JSON.stringify('todos'));
    if(data) return JSON.parse(localStorage.getItem('todos'))
    else return []
  }

  const [text, setText] = useState('');
  const [todos, setTodos] = useState(loadLocal());

  const changeHandler = (e) => {
    setText(e.target.value);
  }

  const addTodo = () => {
    setTodos([
      ...todos, {content: text, id: Math.random()*1000}
    ]);
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div id="container">
      <h3>Simple todo list</h3>
      <br/>
      <div className="formWrapper">
        <input type="text" className="input" onChange={changeHandler} />
        <div className="add" onClick={addTodo}> <span>+</span> </div>
      </div>
      {todos.map(todo => (
        <Todo key={todo.id} text={todo.content} todos={todos} todo={todo} setTodos={setTodos} />
        ))}
    </div>
  );
}

export default App;
