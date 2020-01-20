import React, { useState } from 'react';
import Button from './Button';

export default function InputControls({
  showCompleted,
  setShowCompleted,
  addTodo
}) {
  const [inputVal, setInputVal] = useState('');
  return (
    <div className='row mb-3'>
      <input type='text' onChange={e => setInputVal(e.target.value)} />
      <Button
        text='Add Todo'
        color='primary'
        clickHandler={() => addTodo(inputVal)}
      />
      <Button
        text={showCompleted ? 'Hide Completed' : 'Show Completed'}
        color='info'
        clickHandler={() => setShowCompleted(!showCompleted)}
      />
    </div>
  );
}
