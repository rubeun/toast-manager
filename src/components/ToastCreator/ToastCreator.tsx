import React, { useState } from "react";
import styles from "./ToastCreator.module.css";

const ToastCreator = ({ initialiseToast }:any)  => {
  const [horizontalPosition, setHorizontalPosition] = useState("left");
  const [verticalPosition, setVerticalPosition] = useState("top");
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [toastDuration, setToastDuration] = useState(5);

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

  const changeToastType = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setToastType(event.target.value);
  };

  const changeToastDuration = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToastDuration(parseInt(event.target.value));
  };

  const createToast = () => {
    const newToast = {
      id: Date.now(),
      message: toastMessage,
      position: `${verticalPosition}-${horizontalPosition}`,
      type: toastType,
    };
    initialiseToast(newToast, toastDuration);
  }

  return (
    <div className={styles.toastCreator}>
      <div className={styles.toastCreatorOptions}>
        <h5>Position:</h5>
        <select onChange={changeVerticalPosition} value={verticalPosition}>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>
        <select onChange={changeHorizontalPosition} value={horizontalPosition}>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </div>
      <div className={styles.toastCreatorOptions}>
        <h5>Message:</h5>
        <input type="text" placeholder="Type message here" onChange={changeToastMessage} value={toastMessage} />
      </div>
      <div className={styles.toastCreatorOptions}>
        <h5>Toast Type:</h5>
        <select onChange={changeToastType} value={toastType}>
          <option value="success">Success</option>
          <option value="error">Error</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
        </select>
      </div>
      <div className={styles.toastCreatorOptions}>
        <h5>Toast Duration:</h5>
        <input
          type="range"
          min={1}
          max={20}
          value={toastDuration}
          onChange={changeToastDuration}
        />
        <div className={styles.toastDuration}>{toastDuration} seconds</div>
      </div>
      <button className={styles.toastButton} onClick={createToast}>Show Toast</button>
    </div>
  );
}

export default ToastCreator;