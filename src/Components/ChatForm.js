import { useState } from "react";
import styles from "./styles.module.css";

export default function ChatForm() {
  const [message, setMessage] = useState("[]");
  const handleSubmit=(e)=>{
    e.preventDefault()

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.textInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
}
