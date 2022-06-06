import React from "react";
import styles from "./styles.module.css";
import { useChat } from "../Context/ChatContext";
import ChatItem from "./ChatItem";
import ScrollableFeed from 'react-scrollable-feed'

export default function ChatList() {
  const { messages } = useChat();

  return (
    <div className={styles.chatlist}>
      <ScrollableFeed>
        {messages.map((item, key) => (
          <ChatItem key={key} item={item} />
        ))}
      </ScrollableFeed>
    </div>
  );
}
