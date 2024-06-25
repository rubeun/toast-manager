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

const tempData = [
  {
    id: 0,
    message: "Top Left Message 1",
    position: "top-left",
    type: "success"
  },
  {
    id: 1,
    message: "Top Right Message",
    position: "top-right",
    type: "error"
  },
  {
    id: 2,
    message: "Bottom Left Message",
    position: "bottom-left",
    type: "warning"
  },
  {
    id: 3,
    message: "Bottom Right Message",
    position: "bottom-right",
    type: "info"
  },
  {
    id: 4,
    message: "Top Left Message 2",
    position: "top-left",
    type: "info"
  },
];

const App = () => {
  const [toastMessages, setToastMessages] = useState<Message[]>(tempData);

  const initialiseToast = (newToast: Message, toastDuration: number) => {
    setToastMessages((previousToastMessages) => [...previousToastMessages, newToast]);
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
