import React, { useState } from 'react';
import Button from './Button';

export default function InputControls({ hideCompleted, addTodo }) {
  const [inputVal, setInputVal] = useState('');
  return (
    <div>
      <input type='text' onChange={e => setInputVal(e.target.value)} />
      <Button
        text='Add Todo'
        color='primary'
        clickHandler={() => addTodo(inputVal)}
      />
      <Button text='Hide Completed' color='info' clickHandler={hideCompleted} />
    </div>
  );
}
