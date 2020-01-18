import React from 'react';

export default function ButtonForm({
  handleCheckboxClick,
  checked,
  buttonCallback
}) {
  return (
    <div>
      <div className='custom-control custom-checkbox'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customCheck1'
          checked={checked}
          onChange={handleCheckboxClick}
        />
        <label className='custom-control-label' htmlFor='customCheck1'>
          Even Numbers Only
        </label>
      </div>

      <button onClick={buttonCallback}>Generate Number</button>
    </div>
  );
}
