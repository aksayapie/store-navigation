import React from 'react';
import './App.scss';
import Counter from './features/counter/Counter';
import ShoppingList from './Components/ShoppingList';

function App() {
  return (
    <div>
      <Counter />
      <ShoppingList />
    </div>
  );
}

export default App;
