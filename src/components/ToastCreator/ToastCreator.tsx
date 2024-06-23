import React, { useState } from "react";
import styles from "./ToastCreator.module.css";

const ToastCreator = () => {
  const [horizontalPosition, setHorizontalPosition] = useState("left");
  const [verticalPosition, setVerticalPosition] = useState("top");
  const [toastMessage, setToastMessage] = useState("");

  const changeHorizontalPosition = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setHorizontalPosition(event.target.value);
  };

  const changeVerticalPosition = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setVerticalPosition(event.target.value);
  };

  const changeToastMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToastMessage(event.target.value);
  };


  return (
    <div className={styles.toastCreator}>
      <select onChange={changeHorizontalPosition} value={horizontalPosition}>
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>
      <select onChange={changeVerticalPosition} value={verticalPosition}>
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
      </select>
      <input type="text" placeholder="Type message here" onChange={changeToastMessage} value={toastMessage} />
      <button>Show Toast</button>
    </div>
  );
}

export default ToastCreator;