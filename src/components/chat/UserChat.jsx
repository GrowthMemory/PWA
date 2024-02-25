import * as s from "../css/chat/userChat";

export default function UserChat(props) {
  let currentHour = new Date().getHours();
  let currentMinute = new Date().getMinutes();
  return (
    <s.Div>
      <s.Chat>{props.children}</s.Chat>
      <s.Time>{`${currentHour > 12 ? currentHour - 12 : currentHour}
          :${currentMinute < 10 ? "0" + currentMinute : currentMinute} ${
        currentMinute > 12 ? "pm" : "am"
      }`}</s.Time>
    </s.Div>
  );
}
