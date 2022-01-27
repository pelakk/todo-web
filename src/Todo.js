import React from 'react';
import './App.css';

function Todo({ text, todo, todos, setTodos }) {
    
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

  return (
    <div style={{width: 360, paddingTop: 10}}>
        <div style={{background: '#f4f4f4', display: 'flex', flexDirection: 'row', width: 280, margin: 'auto', borderRadius: 8, padding: 5}}>
            <span style={{height: '100%', width: 260, textAlign: 'left', inlineSize: 260, overflow: 'hidden'}}>{text}</span>
            <span style={{height: '100%', width: 20, fontWeight: 600, cursor: 'pointer'}} onClick={deleteHandler}> X </span>
        </div>
    </div>
  );
}

export default Todo;
