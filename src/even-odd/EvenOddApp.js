import React, { useState } from 'react';
import Stats from './Stats';
import ButtonForm from './ButtonForm';
import NumberList from './NumberList';

export default function EvenOddApp() {
  const [checked, setChecked] = useState(false);
  const [numbers, setNumbers] = useState([]);
  const handleCheckboxClick = e => {
    setChecked(e.target.checked);
  };
  const generateRandomNumber = () => {
    const num = Math.floor(Math.random() * 11);
    const newNums = [...numbers, num];
    setNumbers(newNums);
  };

  const generateRandomEvenNumber = () => {
    let num;
    while (num % 2 !== 0) {
      num = Math.floor(Math.random() * 11);
    }
    const newNums = [...numbers, num];
    setNumbers(newNums);
  };

  return (
    <div className='container'>
      <h1>Even / Odd</h1>
      <Stats numbers={numbers} />
      <ButtonForm
        handleCheckboxClick={handleCheckboxClick}
        checked={checked}
        buttonCallback={
          checked ? generateRandomEvenNumber : generateRandomNumber
        }
      />
      <NumberList numbers={numbers} />
    </div>
  );
}
