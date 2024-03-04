import { useNavigate } from "react-router-dom";
import * as s from "../css/retrospection/noticeModal";

export default function NoticeModal(props) {
  const navigate = useNavigate();
  return (
    <s.Div>
      <s.NoticeBox>
        <span>{`회고 분석은 매일 새벽 1시에 진행됩니다 :)`}</span>
        <s.Button
          onClick={() => {
            props.setShowModal(false);
            navigate("/Calendar");
          }}
        >
          확인
        </s.Button>
      </s.NoticeBox>
    </s.Div>
  );
}
