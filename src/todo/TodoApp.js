import React, { useState } from 'react';
import Button from './Button';

export default function TodoApp() {
  const hideCompleted = () => {
    console.log('clicked');
  };
  return (
    <div>
      <h1>Todo</h1>
      <Button text='Hide Complete' color='info' clickHandler={hideCompleted} />
    </div>
  );
}
