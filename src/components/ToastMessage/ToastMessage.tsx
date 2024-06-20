import styles from "./ToastMessage.module.css";
import type { Message } from "../../App";


const ToastMessage = ({ toastMessages }: {toastMessages: Message[]}) => {

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
        {topLeftPositionedMessages.map((msg, idx) => (
          <div className={styles.message} key={idx}>
            {msg.message}
          </div>
        ))}
      </div>
      <div className={`${styles.topRight} ${styles.messages}`}>
        {topRightPositionedMessages.map((msg, idx) => (
          <div className={styles.message} key={idx}>
            {msg.message}
          </div>
        ))}
      </div>
      <div className={`${styles.bottomLeft} ${styles.messages}`}>
        {bottomLeftPositionedMessages.map((msg, idx) => (
          <div className={styles.message} key={idx}>
            {msg.message}
          </div>
        ))}
      </div>
      <div className={`${styles.bottomRight} ${styles.messages}`}>
        {bottomRightPositionedMessages.map((msg, idx) => (
          <div className={styles.message} key={idx}>
            {msg.message}
          </div>
        ))}
      </div>      
    </div>
  );
}

export default ToastMessage;