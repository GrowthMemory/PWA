import { useContext } from "react";
import { CalendarContext, WriteContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { SELECTDATE } from "../common/key";
import * as s from "../css/calendar/modal";

export default function GoingRetrospection() {
  const { setShowModal } = useContext(CalendarContext);
  const navigate = useNavigate();
  return (
    <s.Div>
      <s.Modal>
        <span>회고를 작성하시겠어요?</span>
        <s.BtnBox>
          <s.LeftBtn
            onClick={() => {
              setShowModal(false);
              localStorage.removeItem(SELECTDATE);
            }}
          >
            아니오
          </s.LeftBtn>
          <s.RightBtn
            onClick={() => {
              setShowModal(false);
              navigate("/Write");
            }}
          >
            네
          </s.RightBtn>
        </s.BtnBox>
      </s.Modal>
    </s.Div>
  );
}
