import { ChatProvider } from "./Context/ChatContext";
import Container from "./Components/Container";
import "./App.css";

function App() {
  return (
    <ChatProvider>
      <Container />
    </ChatProvider>
  );
}

export default App;
