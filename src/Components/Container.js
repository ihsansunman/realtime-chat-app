import React from "react";
import ChatList from "./ChatList"
import ChatForm from "./ChatForm"

export default function Container() {
  return (
    <div className="App">
      <ChatList />
      <ChatForm />
    </div>
  );
}
