import * as s from "../css/chat/charBot";
export default function ChatBot(props) {
  let currentHour = new Date().getHours();
  let currentMinute = new Date().getMinutes();
  return (
    <s.Div>
      <s.ImgBox>
        <img src="img/tree.png" alt="" />
      </s.ImgBox>
      <s.ChatBox>
        <s.Chat>{props.children}</s.Chat>
        <s.Time>
          {`${currentHour > 12 ? currentHour - 12 : currentHour}
          :${currentMinute < 10 ? "0" + currentMinute : currentMinute} ${
            currentMinute > 12 ? "pm" : "am"
          }`}
        </s.Time>
      </s.ChatBox>
    </s.Div>
  );
}
