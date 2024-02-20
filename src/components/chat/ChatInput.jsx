import { HiPaperAirplane } from "react-icons/hi2";
import { useContext } from "react";
import { ChatContext } from "../context/context";
import * as s from "../css/chat/chatInput";

export default function ChatInput() {
  const { setSendChat, setMessage } = useContext(ChatContext);
  let text = "";
  return (
    <s.Div>
      <s.InputBox>
        <s.Textarea
          onChange={(e) => {
            text = e.target.value;
          }}
        ></s.Textarea>
        <s.Btn
          onClick={() => {
            setSendChat(true);
            setMessage(text);
          }}
        >
          <HiPaperAirplane />
        </s.Btn>
      </s.InputBox>
    </s.Div>
  );
}
