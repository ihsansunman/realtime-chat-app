import io from "socket.io-client";
let socket;
export const init = () => {
  console.log("Connecting...");
  socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });
  socket.on("connect", () => console.log("connected!"));
};

export const sendMessage = (message) => {
  if (socket) socket.emit("new-message", message);
};

export const subscribeChat = (callBack) => {
  if (!socket) return;

  socket.on("receive-message", (message) => {
    console.log("Yeni mesaj var!", message);
    callBack(message)
  });
};

export const subscribeInitialMessages = (callBack)=>{
  if (!socket) return;

  socket.on("message-list", (message) => {
    console.log("Initial", message);
    callBack(message)
  });
}