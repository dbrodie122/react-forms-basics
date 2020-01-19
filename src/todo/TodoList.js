import React from 'react';
import Button from './Button';

export default function TodoList({ todos }) {
  const todoElements = todos.map((todo, i) => {
    return (
      <li className='list-group-item'>
        <div className='row'>
          <div className='col-8 col-md-8'>
            <p style={{ color: `${todo.completed ? 'green' : ''}` }}>
              {todo.todo}
            </p>
          </div>
          <div className='col-2 '>
            <div className='row justify-content-end'>
              <Button text='Finish' color='success' />
            </div>
          </div>
          <div className='col-2'>
            <Button text='Edit' color='secondary' />
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className='card'>
      <ul className='list-group list-group-flush'>
        {todoElements.length > 0 ? (
          todoElements
        ) : (
          <li className='list-group-item text-center'>Add a todo</li>
        )}
      </ul>
    </div>
  );
}
