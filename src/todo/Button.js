import React from 'react';

export default function Button({ color, text, clickHandler }) {
  return (
    <button type='button' className={`btn btn-${color}`} onClick={clickHandler}>
      {text}
    </button>
  );
}
