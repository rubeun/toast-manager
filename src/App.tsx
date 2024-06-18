import React from 'react';
import './App.css';
import ToastMessage from './components/ToastMessage/ToastMessage';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Toast Manager</h1>

        <ToastMessage />
      </header>
    </div>
  );
}

export default App;
