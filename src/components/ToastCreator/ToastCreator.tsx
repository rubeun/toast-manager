import styles from "./ToastCreator.module.css";

const ToastCreator = () => {
  return (
    <div className={styles.toastCreator}>
      <select>
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>
      <select>
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
      </select>
      <input type="text" placeholder="Type message here" />
      <button>Show Toast</button>
    </div>
  );
}

export default ToastCreator;