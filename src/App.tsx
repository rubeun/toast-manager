import React, { useState } from 'react';
import './App.css';
import ToastMessage from './components/ToastMessage/ToastMessage';
import ToastCreator from './components/ToastCreator/ToastCreator';

export type Message = {
  id: number;
  message: string;
  position: string;
  type: string;
};

const App = () => {
  const [toastMessages, setToastMessages] = useState<Message[]>([]);

  const initialiseToast = (newToast: Message, toastDuration: number) => {
    setToastMessages((previousToastMessages) => [...previousToastMessages, newToast]);
    const timer = setTimeout(() => {
      setToastMessages((previousToastMessages) =>
        previousToastMessages.filter((msg) => msg.id !== newToast.id),
      );
    }, toastDuration * 1000);

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Toast Manager</h1>
        <ToastCreator initialiseToast={initialiseToast} />
        <ToastMessage toastMessages={toastMessages} />
      </header>
    </div>
  );
}

export default App;
