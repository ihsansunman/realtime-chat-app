import React from "react";
import styles from "./styles.module.css";
import { useChat } from "../Context/ChatContext";
import ChatItem from "./ChatItem";

export default function ChatList() {
  const { messages } = useChat();

  console.log(messages);

  return (
    <div className={styles.chatlist}>
      <div>
        {messages.map((item, key) => (
          <ChatItem key={key} item={item} />
        ))}
      </div>
    </div>
  );
}
