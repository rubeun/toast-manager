import React, { useState } from 'react';
import './App.css';
import ToastMessage from './components/ToastMessage/ToastMessage';
import ToastCreator from './components/ToastCreator/ToastCreator';

const App = () => {
  const [horizontalPosition, setHorizontalPosition] = useState("left");
  const [verticalPosition, setVerticalPosition] = useState("top");
  const [message, setMessage] = useState("Message");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Toast Manager</h1>
        <ToastCreator />
        <ToastMessage />



      </header>
    </div>
  );
}

export default App;
