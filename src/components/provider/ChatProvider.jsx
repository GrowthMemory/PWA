import { useState } from "react";
import { ChatContext } from "../context/context";

export default function ChatProvider(props) {
  const [sendChat, setSendChat] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <ChatContext.Provider
      value={{
        sendChat,
        setSendChat,
        showAnswer,
        setShowAnswer,
        message,
        setMessage,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
}
