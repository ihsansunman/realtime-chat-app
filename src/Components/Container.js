import { useEffect } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import { init } from "../Api/socketApi";

export default function Container() {
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="App">
      <ChatList />
      <ChatForm />
    </div>
  );
}
