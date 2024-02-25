import { HiPaperAirplane } from "react-icons/hi2";
import { useContext, useRef } from "react";
import { ChatContext } from "../context/context";
import * as s from "../css/chat/chatInput";

export default function ChatInput() {
  const { setSendChat, setMessage } = useContext(ChatContext);
  let chatInput = useRef();
  return (
    <s.Div>
      <s.InputBox>
        <s.Textarea ref={chatInput}></s.Textarea>
        <s.Btn
          onClick={() => {
            setSendChat(true);
            setMessage(chatInput.current.value);
            chatInput.current.value = "";
          }}
        >
          <HiPaperAirplane />
        </s.Btn>
      </s.InputBox>
    </s.Div>
  );
}
