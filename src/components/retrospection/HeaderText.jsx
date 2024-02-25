import { BsChevronLeft } from "react-icons/bs";
import { useContext } from "react";
import { WriteContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { registReview } from "../../service/db";
import { getUID } from "../../service/auth";
import * as s from "../css/retrospection/headerText";
export default function HeaderText(props) {
  const { retrospectionData, checkRetrospection } = useContext(WriteContext);
  const navigate = useNavigate();
  let month = retrospectionData.date.month;

  return (
    <>
      <s.BackBtn onClick={() => navigate(-1)}>
        <BsChevronLeft />
      </s.BackBtn>
      <s.TextBox>
        <s.LeafIcon />
        <span
          onClick={() => {
            props.setShowCalendar((prev) => !prev);
          }}
        >
          {month[0] == 0 ? month.substring(1, 3) : month}월
          {retrospectionData.date.date}
          일의 회고
        </span>
        <s.CalendarBtn />
        {checkRetrospection && (
          <s.CheckBtn
            onClick={() => {
              let year = String(retrospectionData.date.year).substring(2, 4);
              let month = retrospectionData.date.month;
              let date = retrospectionData.date.date;
              let data = {
                Keep: retrospectionData.text.keep,
                Problem: retrospectionData.text.problem,
                Try: retrospectionData.text.try,
                date: `${year}년 ${month}월 ${date}일`,
                isAnalyze: false,
              };
              let uid = getUID();
              registReview(uid, `${year}-${month}-${date}`, data);
              navigate("/Calendar");
            }}
          />
        )}
      </s.TextBox>
    </>
  );
}
