import "./ToastMessage.css";
import type { Message } from "../../App";

const ToastMessage = ({ toastMessages, closeToast }: {toastMessages: Message[], closeToast: any}) => {

  const messageDiv = (messageObj: Message, index: number) => {
    return (
      <div className={`${[messageObj.type]} message`} key={index} id={messageObj.id.toString()}>
        {messageObj.message}
        <button
          className="messageButton"
          onClick={() => closeToast(messageObj.id)}
        >
          &#10006;
        </button>
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
    <div className="toastMessage">
      <div className="topLeft messages">
        {topLeftPositionedMessages.map((msg, idx) => messageDiv(msg, idx))}
      </div>
      <div className="topRight messages">
        {topRightPositionedMessages.map((msg, idx) => messageDiv(msg, idx))}
      </div>
      <div className="bottomLeft messages">
        {bottomLeftPositionedMessages.map((msg, idx) => messageDiv(msg, idx))}
      </div>
      <div className="bottomRight messages">
        {bottomRightPositionedMessages.map((msg, idx) => messageDiv(msg, idx))}
      </div>      
    </div>
  );
}

export default ToastMessage;