import React from 'react';
import Button from './Button';

export default function TodoList({ todos, completeTodo, showCompleted }) {
  const todoElements = todos.map((todo, i) => {
    const listStyle = {
      display: !showCompleted && todo.completed ? 'none' : ''
    };
    const pStyle = { textDecoration: todo.completed ? 'line-through' : '' };
    return (
      <li className='list-group-item' style={listStyle} key={todo.id}>
        <div className='row'>
          <div className='col-10 col-md-10'>
            <p style={pStyle}>{todo.todo}</p>
          </div>
          <div className='col-2 '>
            <div className='row justify-content-end'>
              <Button
                text={todo.completed ? 'Incomplete' : 'Complete'}
                color={todo.completed ? 'secondary' : 'success'}
                clickHandler={() => completeTodo(todo.id)}
              />
            </div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className='card'>
      {todoElements.length > 0 ? (
        <ul className='list-group list-group-flush'>{todoElements}</ul>
      ) : (
        <li className='list-group-item text-center'>Add a todo</li>
      )}
    </div>
  );
}
