import styles from "./ToastMessage.module.css";
import type { Message } from "../../App";

const ToastMessage = ({ toastMessages }: {toastMessages: Message[]}) => {

  const messageDiv = (messageObj: Message, index: number) => {
    return (
      <div className={`${styles[messageObj.type]} ${styles.message}`} key={index}>
        {messageObj.message}
      </div>
    );
  }

  const topLeftPositionedMessages = toastMessages.filter(
    (msg) => msg.position === "top-left",
  );
  const topRightPositionedMessages = toastMessages.filter(
    (msg) => msg.position === "top-right",
  );
  const bottomLeftPositionedMessages = toastMessages.filter(
    (msg) => msg.position === "bottom-left",
  );
  const bottomRightPositionedMessages = toastMessages.filter(
    (msg) => msg.position === "bottom-right",
  );


  return (
    <div className={styles.toastMessage}>
      <div className={`${styles.topLeft} ${styles.messages}`}>
        {topLeftPositionedMessages.map((msg, idx) => messageDiv(msg, idx))}
      </div>
      <div className={`${styles.topRight} ${styles.messages}`}>
        {topRightPositionedMessages.map((msg, idx) => messageDiv(msg, idx))}
      </div>
      <div className={`${styles.bottomLeft} ${styles.messages}`}>
        {bottomLeftPositionedMessages.map((msg, idx) => messageDiv(msg, idx))}
      </div>
      <div className={`${styles.bottomRight} ${styles.messages}`}>
        {bottomRightPositionedMessages.map((msg, idx) => messageDiv(msg, idx))}
      </div>      
    </div>
  );
}

export default ToastMessage;