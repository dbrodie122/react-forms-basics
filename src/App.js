import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import EvenOddApp from './even-odd/EvenOddApp';
import TodoApp from './todo/TodoApp';

export default function App() {
  return (
    <Router>
      <div>
        <nav className='navbar bg-dark'>
          <Link className='nav-link' to='/'>
            Even Odd
          </Link>
          <Link className='nav-link' to='/todo'>
            Todo
          </Link>
        </nav>

        <Switch>
          <Route path='/todo'>
            <TodoApp />
          </Route>
          <Route path='/'>
            <EvenOddApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
