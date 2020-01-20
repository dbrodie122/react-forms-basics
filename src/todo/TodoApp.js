import React, { useState } from 'react';
import InputControls from './InputControls';
import TodoList from './TodoList';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);
  const addTodo = text => {
    const newTodo = {
      todo: text,
      completed: false,
      id: Math.floor(Math.random() * 10000)
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const completeTodo = id => {
    const updatedTodos = todos.map((todo, i) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div className='container'>
      <h1>Todo</h1>
      <InputControls
        addTodo={addTodo}
        setShowCompleted={setShowCompleted}
        showCompleted={showCompleted}
      />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        showCompleted={showCompleted}
      />
    </div>
  );
}
