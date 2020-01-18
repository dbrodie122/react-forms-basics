import React from 'react';

export default function Stats({ numbers }) {
  const numUnique = Object.keys(
    numbers.reduce((acc, num) => {
      acc[num] = num;
      return acc;
    }, {})
  ).length;
  return (
    <p>
      {numUnique} unique number{numbers.length === 1 ? '' : 's'}
    </p>
  );
}
