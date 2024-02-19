import { FaLeaf } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { BsChevronLeft } from "react-icons/bs";
import { useContext } from "react";
import { WriteContext } from "../context/context";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { registReview } from "../../service/db";
import { getUID } from "../../service/auth";

export default function HeaderText(props) {
  const { retrospectionData, checkRetrospection } = useContext(WriteContext);
  const navigate = useNavigate();
  let month = retrospectionData.date.month;

  return (
    <>
      <BackBtn onClick={() => navigate(-1)}>
        <BsChevronLeft />
      </BackBtn>
      <TextBox>
        <LeafIcon />
        <span
          onClick={() => {
            props.setShowCalendar((prev) => !prev);
          }}
        >
          {month[0] == 0 ? month.substring(1, 3) : month}월
          {retrospectionData.date.date}
          일의 회고
        </span>
        <CalendarBtn />
        {checkRetrospection && (
          <CheckBtn
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
              // navigate("/Home");
            }}
          />
        )}
      </TextBox>
    </>
  );
}

const BackBtn = styled.div`
  width: 45px;
  height: 45px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 24px;
  z-index: 2;
`;

const TextBox = styled.div`
  width: 320px;
  height: 100%;
  font-size: 16px;
  font-weight: 600;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeafIcon = styled(FaLeaf)`
  margin-right: 4px;
  font-size: 22px;
  color: #5ac479;
`;

const CalendarBtn = styled(IoTriangle)`
  margin-left: 3px;
  font-size: 15px;
  transform: rotate(180deg);
`;

const CheckBtn = styled(FaCheck)`
  font-size: 20px;
  color: #5ac479;
  position: absolute;
  right: 0;
`;
