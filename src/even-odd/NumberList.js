import React from 'react';

export default function NumberList({ numbers }) {
  const numListItems = numbers.map((num, i) => <li key={i}>{num}</li>);
  return <ul>{numListItems}</ul>;
}
