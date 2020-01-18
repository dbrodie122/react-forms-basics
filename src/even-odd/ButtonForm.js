import React from 'react';

export default function ButtonForm({
  handleCheckboxClick,
  checked,
  buttonCallback
}) {
  return (
    <div>
      <div class='custom-control custom-checkbox'>
        <input
          type='checkbox'
          class='custom-control-input'
          id='customCheck1'
          checked={checked}
          onChange={handleCheckboxClick}
        />
        <label class='custom-control-label' for='customCheck1'>
          Even Numbers Only
        </label>
      </div>

      <button onClick={buttonCallback}>Generate Number</button>
    </div>
  );
}
